function Controller() {
    function refreshComments() {
        var respuesta = comments.getComments(3);
        if ('"false"' === respuesta) alert("Sin comentarios"); else {
            var rows = [];
            _.each(respuesta, function(item) {
                var detail = comments.getComment(item.id_post_comment);
                '"false"' === detail || "false" === detail ? alert("erradas") : rows.push(Alloy.createController("commentRow", {
                    articleUrl: detail.id_post_comment,
                    comment: "Comentario en duro. El servicio no lo retorna",
                    date: detail.date
                }).getView());
            });
            $.table.setData(rows);
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.comment = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "comment"
    });
    $.__views.comment && $.addTopLevelView($.__views.comment);
    $.__views.table = Ti.UI.createTableView({
        top: 0,
        bottom: "42dp",
        id: "table"
    });
    $.__views.comment.add($.__views.table);
    $.__views.__alloyId2 = Ti.UI.createView({
        bottom: "40dp",
        border: "1px",
        height: "39dp",
        width: Ti.UI.FILL,
        textAlign: "center",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "__alloyId2"
    });
    $.__views.comment.add($.__views.__alloyId2);
    $.__views.commentText = Ti.UI.createTextField({
        top: 0,
        left: 5,
        right: 90,
        id: "commentText"
    });
    $.__views.__alloyId2.add($.__views.commentText);
    $.__views.sendButton = Ti.UI.createButton({
        top: 0,
        width: 80,
        right: 10,
        title: "Send",
        id: "sendButton"
    });
    $.__views.__alloyId2.add($.__views.sendButton);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var comments = Alloy.Models.comments;
    refreshComments();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;