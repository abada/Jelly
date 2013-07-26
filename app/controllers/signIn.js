var leftButton = Ti.UI.createButton({
		background: '#fff',
		color:'#ff9900',
		width: 41,
		height: 30,
		title:'Cancel'
	});
	leftButton.addEventListener('click', function () {
		Alloy.CFG.navgroup.close($.signin, {animated: true});
    });
	$.signin.leftNavButton = leftButton;
	
var rightButton = Ti.UI.createButton({
		background: '#fff',
		color:'#ff9900',
		width: 41,
		height: 30,
		title:'Done'
	});
	rightButton.addEventListener('click', function () {
		Alloy.CFG.navgroup.open(Alloy.createController('home').getView());
		//Alloy.CFG.navgroup.close($.signin, {animated: true});

    });
	$.signin.rightNavButton = rightButton;
	

function changeStyle(e){}

