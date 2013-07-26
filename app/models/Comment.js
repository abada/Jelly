var moment = require('alloy/moment');
var ServicesHelper = require('Helper');
var Helper = new ServicesHelper();
var urlBase = Helper.UrlBase;

exports.definition = {
	config: {
		columns: {
		    "Id": "integer primary key",
		    "PostId": "integer",
		    "UserId": "integer",
		    "Date": "date",
		    "Comment": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "Comment"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			getComments: function(postId) {
                var params = {action:'getcomments',id_post:postId, start:0, max_posts:10};
                return getRequest(urlBase, params, 1000);              
            },
            getComment: function(commentId) {
                var params = {action:'getcomment',id_post_comment:commentId};
                return getRequest(urlBase, params, 1000);              
            },
            postComment: function(userId, postId, comment) {
                var params = {action:'comment',userId:userId, postId:postId,comment:comment};
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

