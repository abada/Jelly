exports.definition = {
    config: {
        columns: {
            Id: "int",
            UserId: "int",
            RelationTypeId: "int",
            UserIdRelation: "int"
        },
        adapter: {
            type: "sql",
            collection_name: "UserRelation"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("UserRelation", exports.definition, []);

collection = Alloy.C("UserRelation", exports.definition, model);

exports.Model = model;

exports.Collection = collection;