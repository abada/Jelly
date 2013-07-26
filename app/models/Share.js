exports.definition = {
	config: {
		columns: {
		    "Id": "int",
		    "PostId": "int",
		    "UserId": "int",
		    "SocialId": "int",
		    "Date": "date"
		},
		adapter: {
			type: "sql",
			collection_name: "Share"
		}
	},		
	extendModel: function(Model) {		
		_.extend(Model.prototype, {
			// extended functions and properties go here
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

