function Controller() {
    function comment() {
        Alloy.CFG.navgroup.open(Alloy.createController("feedComment").getView());
    }
    function swipeMenu(e) {
        "left" == e.direction && $.menuComment.animate({
            left: -260,
            duration: 500
        });
        "right" == e.direction && $.menuComment.animate({
            left: 0,
            duration: 500
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feedRow = Ti.UI.createTableViewRow({
        id: "feedRow"
    });
    $.__views.feedRow && $.addTopLevelView($.__views.feedRow);
    $.__views.title = Ti.UI.createLabel({
        font: {
            fontSize: "16dp",
            color: "#EF4144"
        },
        width: Ti.UI.FILL,
        top: "5dp",
        left: "10dp",
        right: "3dp",
        touchEnabled: false,
        id: "title"
    });
    $.__views.feedRow.add($.__views.title);
    $.__views.image = Ti.UI.createImageView({
        height: "400dp",
        left: "5dp",
        right: "5dp",
        top: "0dp",
        touchEnabled: false,
        id: "image"
    });
    $.__views.feedRow.add($.__views.image);
    $.__views.date = Ti.UI.createLabel({
        id: "date"
    });
    $.__views.feedRow.add($.__views.date);
    $.__views.menuComment = Ti.UI.createView({
        left: "-260dp",
        width: "300dp",
        top: "70dp",
        height: "50dp",
        backgroundColor: "#000",
        id: "menuComment"
    });
    $.__views.feedRow.add($.__views.menuComment);
    swipeMenu ? $.__views.menuComment.addEventListener("swipe", swipeMenu) : __defers["$.__views.menuComment!swipe!swipeMenu"] = true;
    $.__views.more = Ti.UI.createButton({
        left: "10dp",
        width: "60dp",
        height: "40dp",
        top: "10dp",
        font: {
            fontSize: "12dp",
            color: "#FFFFFF"
        },
        title: "...",
        id: "more"
    });
    $.__views.menuComment.add($.__views.more);
    $.__views.comment = Ti.UI.createButton({
        left: "70dp",
        width: "60dp",
        height: "40dp",
        top: "10dp",
        font: {
            fontSize: "12dp",
            color: "#FFFFFF"
        },
        id: "comment"
    });
    $.__views.menuComment.add($.__views.comment);
    $.__views.rate = Ti.UI.createButton({
        id: "rate"
    });
    $.__views.menuComment.add($.__views.rate);
    $.__views.jelly = Ti.UI.createButton({
        left: "130dp",
        width: "60dp",
        height: "40dp",
        top: "10dp",
        font: {
            fontSize: "12dp",
            color: "#FFFFFF"
        },
        id: "jelly"
    });
    $.__views.menuComment.add($.__views.jelly);
    $.__views.rating = Ti.UI.createLabel({
        left: "190dp",
        width: "60dp",
        height: "40dp",
        top: "10dp",
        font: {
            fontSize: "12dp",
            color: "#FFFFFF"
        },
        id: "rating"
    });
    $.__views.menuComment.add($.__views.rating);
    comment ? $.__views.rating.addEventListener("click", comment) : __defers["$.__views.rating!click!comment"] = true;
    $.__views.__alloyId3 = Ti.UI.createView({
        width: Ti.UI.FILL,
        background: "#747678",
        height: "70dp",
        id: "__alloyId3"
    });
    $.__views.feedRow.add($.__views.__alloyId3);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title;
    $.image.image = "/post/moto.gif";
    $.date.text = args.date;
    $.rating.text = args.rating;
    __defers["$.__views.menuComment!swipe!swipeMenu"] && $.__views.menuComment.addEventListener("swipe", swipeMenu);
    __defers["$.__views.rating!click!comment"] && $.__views.rating.addEventListener("click", comment);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;