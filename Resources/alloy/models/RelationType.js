exports.definition = {
    config: {
        columns: {
            Id: "int",
            Name: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "RelationType"
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

model = Alloy.M("RelationType", exports.definition, []);

collection = Alloy.C("RelationType", exports.definition, model);

exports.Model = model;

exports.Collection = collection;