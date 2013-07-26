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
	

function login(e) {
	
	if (e && e.source && _.isFunction(e.source.blur)) {
		e.source.blur();
	}
	
	//alert("usuario[" + $.username.value + "] password [" + $.password.value + "] largo user-->" + $.username.value.length + "<--");
	if(($.username.value.length==0) || ($.password.value.length==0)){
		alert("Usuario y/o Password no puede ser vacio");
	}else{
		var respuesta = user.login($.username.value, $.password.value);
		//alert("respuesta [" + respuesta + "]");
		if(respuesta==="false") {
			alert("Credenciales erradas" + respuesta);
		} else {
			alert("Respuesta OK" + respuesta)
			Alloy.CFG.navgroup.open(Alloy.createController('feed').getView());
		}
	//	Alloy.CFG.navgroup.open(Alloy.createController('profile').getView());
		//$.login.close();
		//Alloy.createController('profile').getView().open({
     //transition : Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    }
}

function focusPassword() {
	$.password.focus();
}

function forgotPassword(evt){
	Alloy.CFG.navgroup.open(Alloy.createController('forgot').getView());
}

