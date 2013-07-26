//alert("en controller forgot");

//var args = arguments[0] || {};
var user = Alloy.Models.user;
//$.icon.backgroundImage = args.image;
function cancel(evt) {
	//alert('000');
	Alloy.CFG.navgroup.close($.login, {animated: true});
}
function done(evt) {
	Alloy.CFG.navgroup.close($.login, {animated: true});
}
	
function send(evt){
	alert("function send()");
}
