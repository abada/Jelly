var HANDLERS = ['success','error'];
var MAX_ROWS = 20; // can be overridden by args
var FEED_URL = '';
var handlers = {};

// ---------------------------
// Public Functions
// ---------------------------
exports.setHandlers = function(args) {
	_.each(HANDLERS, function(h) {
		if (args[h]) {
			handlers[h] = args[h];
		}
	});
};

exports.loadFeed = function(args) {
	//expecting args.url and optional args.max_rows
	if (args.url) {
		FEED_URL = args.url;
		if(args.max_rows) {
			MAX_ROWS = args.max_rows;
		}
		getFeed();
	} else {
		alert('You forgot to pass the FEED URI!');
		Ti.API.error('[ERROR] URI not passed to function');
	}
};

// ---------------------------
// Private Functions
// ---------------------------
function processFeedData(data) {
	var entrys = [];

	try {
		var items = data.getElementsByTagName("item");
        for(var c = 0; c < Math.min(items.length,MAX_ROWS); c++) {
            entrys.push({
            	title: items.item(c).getElementsByTagName("title").item(0).text,
            	url: items.item(c).getElementsByTagName("link").item(0).text
            });
        }

        //fire success handler
		handlers.success(entrys);

	} catch (e) {
		Ti.API.error('[ERROR] ' + (e.error || JSON.stringify(e)));
		alert('Invalid response from server. Try again.');
		return;
	}
}


// ---------------------------
// event handlers
// ---------------------------


function getFeed(e) {

	var xhr = Ti.Network.createHTTPClient({
		onload: function(e) {
			if(handlers.success) {
				var response = this.responseXML.documentElement;
				processFeedData(response);
			}
		},
		onerror: function(e) {
			if(handlers.error) {
				handlers.error(e);
			} else {
				alert('There was an error processing the request. Make sure you have a network connection and try again.');
				Ti.API.error('[ERROR] ' + (e.error || JSON.stringify(e)));
			}
		},
		timeout: 5000
	});

	xhr.open('GET', FEED_URL);
	xhr.send();
}