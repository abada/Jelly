var moment = require('alloy/moment');
var ServicesHelper = require('Helper');
var Helper = new ServicesHelper();
var urlBase = Helper.UrlBase;


exports.definition = {
	config: {
		columns: {
		    "Id": "int",
		    "ParentId": "int",
		    "Title": "string",
		    "Description": "string",
		    "Photo": "string",
		    "CreatorId": "int",
		    "Rating": "int",
		    "CommentCount": "int",
		    "LikeCount": "int",
		    "Gender": "string",
		    "GeoLocation": "string",
		    "LastUpdate": "datetime"
		},
		adapter: {
			type: "sql",
			collection_name: "Post"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			sendPost: function(userId, parentId, title, description, photo, rating, comment, geolocation) {
                var params = {action:'post',userId:userId, parentId:parentId, title:title, description:description, photo:photo, rating:rating, comment:comment, geolocation:geolocation};
                return getRequest(urlBase, params, 1000);              
            },
            getPosts: function(postId, userId) {
                var params = {action:'getpost',id_post:postId,id_user:userId};
                return getRequest(urlBase, params, 1000);        
            },
            getFeeds: function(userId, start) {
                var params = {action:'getfeed',id_user:userId, start:start, max_posts:10};
                return getRequest(urlBase, params, 1000);              
            },
            searchFeeds: function(userId, find) {
                var params = {action:'searchfeed',userId:userId, find:find};
                return getRequest(urlBase, params, 1000);              
            },
            searchAutocomplete: function(userId, find) {
                var params = {action:'autocomplete',userId:userId, find:find};
                return getRequest(urlBase, params, 1000);              
            },
		});
		
		return Model;
	},
	extendCollection: function(Collection) {		
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});
		
		return Collection;
	}
}

