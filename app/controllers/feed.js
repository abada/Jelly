var posts = Alloy.Models.posts;

function refreshFeeds(start) {
	var respuesta = posts.getFeeds(1, start);
	if(respuesta==='"false"') {
		alert("Credenciales erradas");
	} else {
		var rows = [];
		_.each(respuesta, function(item) {
			var detail = posts.getPosts(item.id_post, 1);
			if(detail==='"false"' || detail==="false") {
				alert("erradas");
			} else {
				//alert(detail);
				var row = Alloy.createController('feedRow', {
					articleUrl: detail.like_count,
					image: detail.photo,
					title: detail.title,
					rating: detail.rating,
					date: detail.last_update
				}).getView();
				rows.push(row);
				$.table.appendRow(row,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.NONE});
			}
		});
		return rows;
	}
}

refreshFeeds(1);



var lastRow = 10;

var navActInd = Titanium.UI.createActivityIndicator();
$.feed.rightNavButton = navActInd;

var updating = false;
var loadingRow = Ti.UI.createTableViewRow({title:"Loading..."});

function beginUpdate()
{
	updating = true;
	navActInd.show();

	$.table.appendRow(loadingRow);

	// just mock out the reload
	setTimeout(endUpdate,2000);
}

function endUpdate()
{
	updating = false;

	$.table.deleteRow(lastRow,{animationStyle:Titanium.UI.iPhone.RowAnimationStyle.NONE});
	
	refreshFeeds(lastRow);
	lastRow += 10;

	// just scroll down a bit to the new rows to bring them into view
	//$.table.scrollToIndex(lastRow-9,{animated:true,position:Ti.UI.iPhone.TableViewScrollPosition.BOTTOM});

	navActInd.hide();
}

var lastDistance = 0; // calculate location to determine direction

$.table.addEventListener('scroll',function(e)
{
	var offset = e.contentOffset.y;
	var height = e.size.height;
	var total = offset + height;
	var theEnd = e.contentSize.height;
	var distance = theEnd - total;

	// going down is the only time we dynamically load,
	// going up we can safely ignore -- note here that
	// the values will be negative so we do the opposite
	if (distance < lastDistance)
	{
		// adjust the % of rows scrolled before we decide to start fetching
		var nearEnd = theEnd * .75;

		if (!updating && (total >= nearEnd))
		{
			beginUpdate();
		}
	}
	lastDistance = distance;
});

function cargaProfile(e){
	alert("antes de cargar profile");
	Alloy.CFG.navgroup.open(Alloy.createController('profile').getView());
	alert("despues de cargar profile");
}
