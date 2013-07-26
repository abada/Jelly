var moment = require("alloy/moment");

var ServicesHelper = require("Helper");

var Helper = new ServicesHelper();

var urlBase = Helper.UrlBase;

exports.definition = {
    config: {
        columns: {
            Id: "integer primary key",
            PostId: "integer",
            UserId: "integer",
            Date: "date",
            Comment: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "Comment"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            getComments: function(postId) {
                var params = {
                    action: "getcomments",
                    id_post: postId,
                    start: 0,
                    max_posts: 10
                };
                return getRequest(urlBase, params, 1e3);
            },
            getComment: function(commentId) {
                var params = {
                    action: "getcomment",
                    id_post_comment: commentId
                };
                return getRequest(urlBase, params, 1e3);
            },
            postComment: function(userId, postId, comment) {
                var params = {
                    action: "comment",
                    userId: userId,
                    postId: postId,
                    comment: comment
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

model = Alloy.M("Comment", exports.definition, []);

collection = Alloy.C("Comment", exports.definition, model);

exports.Model = model;

exports.Collection = collection;