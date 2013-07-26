exports.definition = {
	config: {
		columns: {
		    "Id": "int",
		    "PostId": "int",
		    "UserId": "int",
		    "Date": "date"
		},
		adapter: {
			type: "sql",
			collection_name: "Like"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			like: function(userId, postId) {
                var params = {action:'liked',userId:userId,postId:postId};
                return getRequest(urlBase, params, 1000);              
            },
            unlike: function(userId, postId) {
                var params = {action:'unliked',userId:userId,postId:postId};
                return getRequest(urlBase, params, 1000);              
            }
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

