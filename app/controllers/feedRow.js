var args = arguments[0] || {};
//Por cada feed, obtenemos el detalle.
//$.row.articleUrl = args.title;
$.title.text = args.title;
$.image.image = '/post/moto.gif';//args.image;
$.date.text = args.date;
$.rating.text = args.rating;

function comment(){
	Alloy.CFG.navgroup.open(Alloy.createController('feedComment').getView());
}

function swipeMenu(e) {
	if (e.direction == 'left'){
        $.menuComment.animate({left: (-260), duration: 500});
    }
    if (e.direction == 'right'){
        $.menuComment.animate({left: (0), duration: 500});
    }
}
