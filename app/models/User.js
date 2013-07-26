var moment = require('alloy/moment');
var ServicesHelper = require('Helper');
var Helper = new ServicesHelper();
var urlBase = Helper.UrlBase;

var USERNAME = 'user',
    PASSWORD = 'password',
    AUTHKEY = 'somelongauthkeyforvalidation';

exports.definition = {
	config: {
		"columns": {
			"Id": "integer primary key",
			"Login":"text",
            "Name":"text",
            "Password":"text",
            "Birthday":"date",
            "Gender":"text",
            "Photo":"text",
            "PhotoType":"text",
            "PostCount":"integer",
            "FollowerCount":"integer",
            "FollowingCount":"integer",
            "OauthProvider":"string",
            "TwitterToken":"string",
            "OauthUid":"string",
            "Email":"text",
			"AuthKey":"text",
			"LoggedIn":"integer",
			"LoggedInSince":"date",
            "Theme":"integer"
		},
		"adapter": {
			"type": "sql",
			"collection_name": "User",
            "idAttribute": "Id"
		}
	},

	extendModel : function(Model) {
        _.extend(Model.prototype, {
            login: function(username, password) {
                var params = {action:'auth',login:username,passwd:password};
                return getRequest(urlBase, params, 1000);
            },
            setPassword: function(userId, password, newpassword) {
                var params = {action:'setpasswd',userId:userId,passwd:password,newpassword:newpassword};
                return getRequest(urlBase, params, 1000);
            },
            follow: function(userId, followId) {
                var params = {action:'follow',userId:userId,followId:followId};
                return getRequest(urlBase, params, 1000);
            },
            register: function(login, name, lastName, password, bio, birthday, photo, phototype) {
                var params = {action:'createuser',login:login, name:name, lastName:lastname, password:password, bio:bio, birthday:brthday, photo:photo, phototype:phototype};
                return getRequest(urlBase, params, 1000);
            },
            logout: function() {
                this.set({
                    LoggedIn: 0,
                    LoggedInSince: '',
                    AuthKey: ''
                });
                this.save();
            },
            validateAuth: function() {
                // Again, this would be done against an auth server in a real world
                // scenario. We're just keeping it simple here.
                if (this.get('LoggedIn') === 1 && this.get('AuthKey') === AUTHKEY) {
                    return true;
                } else {
                    return false;
                }
            },
            /*saveDataLogin: function(){
            	var DBHelper = require('DBHelper');
            	var HelperDB = new DBHelper();
            	var db = HelperDB.openDbConnection();
            	var rs = db.execute('SELECT id,email,hash FROM usuario WHERE email=?', "Partly Cloudy");
            	
            },*/
        });

        return Model;
    }
}