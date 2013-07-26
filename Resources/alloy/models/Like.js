exports.definition = {
    config: {
        columns: {
            Id: "int",
            PostId: "int",
            UserId: "int",
            Date: "date"
        },
        adapter: {
            type: "sql",
            collection_name: "Like"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            like: function(userId, postId) {
                var params = {
                    action: "liked",
                    userId: userId,
                    postId: postId
                };
                return getRequest(urlBase, params, 1e3);
            },
            unlike: function(userId, postId) {
                var params = {
                    action: "unliked",
                    userId: userId,
                    postId: postId
                };
                return getRequest(urlBase, params, 1e3);
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("Like", exports.definition, []);

collection = Alloy.C("Like", exports.definition, model);

exports.Model = model;

exports.Collection = collection;