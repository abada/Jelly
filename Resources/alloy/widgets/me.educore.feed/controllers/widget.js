function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "me.educore.feed/" + s : s.substring(0, index) + "/me.educore.feed/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function processFeedData(data) {
        var entrys = [];
        try {
            var items = data.getElementsByTagName("item");
            for (var c = 0; Math.min(items.length, MAX_ROWS) > c; c++) entrys.push({
                title: items.item(c).getElementsByTagName("title").item(0).text,
                url: items.item(c).getElementsByTagName("link").item(0).text
            });
            handlers.success(entrys);
        } catch (e) {
            Ti.API.error("[ERROR] " + (e.error || JSON.stringify(e)));
            alert("Invalid response from server. Try again.");
            return;
        }
    }
    function getFeed() {
        var xhr = Ti.Network.createHTTPClient({
            onload: function() {
                if (handlers.success) {
                    var response = this.responseXML.documentElement;
                    processFeedData(response);
                }
            },
            onerror: function(e) {
                if (handlers.error) handlers.error(e); else {
                    alert("There was an error processing the request. Make sure you have a network connection and try again.");
                    Ti.API.error("[ERROR] " + (e.error || JSON.stringify(e)));
                }
            },
            timeout: 5e3
        });
        xhr.open("GET", FEED_URL);
        xhr.send();
    }
    new (require("alloy/widget"))("me.educore.feed");
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.feedView = Ti.UI.createView({
        id: "feedView"
    });
    $.__views.feedView && $.addTopLevelView($.__views.feedView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var HANDLERS = [ "success", "error" ];
    var MAX_ROWS = 20;
    var FEED_URL = "";
    var handlers = {};
    exports.setHandlers = function(args) {
        _.each(HANDLERS, function(h) {
            args[h] && (handlers[h] = args[h]);
        });
    };
    exports.loadFeed = function(args) {
        if (args.url) {
            FEED_URL = args.url;
            args.max_rows && (MAX_ROWS = args.max_rows);
            getFeed();
        } else {
            alert("You forgot to pass the FEED URI!");
            Ti.API.error("[ERROR] URI not passed to function");
        }
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;