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
			collection_name: "Favorite"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			favorite: function(userId, postId) {
                var params = {action:'favorite',userId:userId,postId:postId};
                return getRequest(urlBase, params, 1000);              
            },
            unfavorite: function(userId, postId) {
                var params = {action:'unfavorite',userId:userId,postId:postId};
                return getRequest(urlBase, params, 1000);              
            },
            getlist: function(userId, init, max) {
                var params = {action:'getfavorites',start:init,max_post:max};
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

