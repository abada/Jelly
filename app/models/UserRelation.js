exports.definition = {
	config: {
		columns: {
		    "Id": "int",
		    "UserId": "int",
		    "RelationTypeId": "int",
		    "UserIdRelation": "int"
		},
		adapter: {
			type: "sql",
			collection_name: "UserRelation"
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

