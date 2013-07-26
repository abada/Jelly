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
            collection_name: "Favorite"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            favorite: function(userId, postId) {
                var params = {
                    action: "favorite",
                    userId: userId,
                    postId: postId
                };
                return getRequest(urlBase, params, 1e3);
            },
            unfavorite: function(userId, postId) {
                var params = {
                    action: "unfavorite",
                    userId: userId,
                    postId: postId
                };
                return getRequest(urlBase, params, 1e3);
            },
            getlist: function(userId, init, max) {
                var params = {
                    action: "getfavorites",
                    start: init,
                    max_post: max
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

model = Alloy.M("Favorite", exports.definition, []);

collection = Alloy.C("Favorite", exports.definition, model);

exports.Model = model;

exports.Collection = collection;