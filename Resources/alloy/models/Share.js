exports.definition = {
    config: {
        columns: {
            Id: "int",
            PostId: "int",
            UserId: "int",
            SocialId: "int",
            Date: "date"
        },
        adapter: {
            type: "sql",
            collection_name: "Share"
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

model = Alloy.M("Share", exports.definition, []);

collection = Alloy.C("Share", exports.definition, model);

exports.Model = model;

exports.Collection = collection;