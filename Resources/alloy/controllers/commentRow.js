function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.commentRow = Ti.UI.createTableViewRow({
        id: "commentRow"
    });
    $.__views.commentRow && $.addTopLevelView($.__views.commentRow);
    $.__views.comment = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            color: "#EF4144"
        },
        width: Ti.UI.FILL,
        top: "45dp",
        left: "20dp",
        right: "3dp",
        touchEnabled: false,
        id: "comment"
    });
    $.__views.commentRow.add($.__views.comment);
    $.__views.image = Ti.UI.createImageView({
        height: "70dp",
        left: "5dp",
        top: "10dp",
        touchEnabled: false,
        id: "image"
    });
    $.__views.commentRow.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        id: "date"
    });
    $.__views.commentRow.add($.__views.date);
    $.__views.rating = Ti.UI.createLabel({
        font: {
            fontSize: "12dp",
            color: "#FFFFFF"
        },
        top: "70dp",
        left: "10dp",
        id: "rating"
    });
    $.__views.commentRow.add($.__views.rating);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.comment.text = args.comment;
    $.image.image = "/post/bruno.png";
    $.date.text = args.date;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;