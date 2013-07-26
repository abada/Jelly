//create custom back button
if (OS_IOS) {
	var leftButton = Ti.UI.createButton({
		backgroundImage: 'images/6dots.png',
		width: 41,
		height: 30
	});
	leftButton.addEventListener('click', function () {
		Alloy.CFG.navgroup.close($.index, {animated: true});
    });
	$.index.leftNavButton = leftButton;
	
	var clickWin = function(e){
		alert('eso');
	}
}