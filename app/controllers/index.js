if(OS_IOS) {
	// add navgroup to the global scope
	Alloy.CFG.navgroup = $.navgroup;
}
var di = Alloy.createController('home').getView();
$.dashboard.add(di);

/*di.addEventListener("click",function(e){
	$.navgroup.open(Alloy.createController(e.source.con, e.source.params).getView());
});*/

$.index.open();