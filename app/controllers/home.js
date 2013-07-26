var socialNetwork = Alloy.Models.socialNetworks;


var loginJelly = function(e){
	Alloy.CFG.navgroup.open(Alloy.createController("login").getView());
}

var signupJelly = function (e){
        Alloy.CFG.navgroup.open(Alloy.createController("signup").getView());
}

function isLoggedInFacebook(){
	var fb = require('facebook');
	fb.appid = Ti.App.Properties.getString("ti.facebook.appid","127424943970451");
	fb.permissions = ['read_stream'];
	fb.forceDialogAuth = false;
	return fb.loggedIn; 	
}

function loginFacebook(evt){
	var fb = require('facebook');
	fb.appid = Ti.App.Properties.getString("ti.facebook.appid","127424943970451");
	fb.permissions = ['read_stream'];
	fb.forceDialogAuth = false;
	fb.addEventListener('login', function(e) {
    	if (e.success) {
    		//socialNetwork.updateConnectSocialNetwork();	    
    	    alert('Logged In');
    	} else if (e.error) {
    	    alert(e.error);
    	} else if (e.cancelled) {
    	    alert("Canceled");
    	}
	});
	fb.authorize();
}


function loginTwitter(evt){
	var social = require('social');
	var twitter = social.create({
    	site: 'Twitter', // <-- this example is for Twitter. I'll expand this to other sites in the future.
    	consumerKey: '8i5ubq6QBRDIus8hIP8ISg', // <--- you'll want to replace this
    	consumerSecret: 'prtpoB4py1TNJsaCusovgh9TBmLdbSITDkxxuKS5hCM' // <--- and this with your own keys!
	});
	twitter.authorize(function() {
        alert('Authorized!');
    });
}

function loginInstagram(evt){
	var social = require('social');
	var twitter = social.create({
    	site: 'Instagram', // <-- this example is for Twitter. I'll expand this to other sites in the future.
    	consumerKey: '8i5ubq6QBRDIus8hIP8ISg', // <--- you'll want to replace this
    	consumerSecret: 'prtpoB4py1TNJsaCusovgh9TBmLdbSITDkxxuKS5hCM' // <--- and this with your own keys!
	});
	twitter.authorize(function() {
        alert('Authorized!');
    });
}


function initialize(){
	if(isLoggedInFacebook()) {
		//Alloy.CFG.navgroup.open(Alloy.createController('feed').getView());
	}
}

initialize();
