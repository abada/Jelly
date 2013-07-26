function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.profile = Ti.UI.createWindow({
        backgroundImage: "/login/fondo.png",
        navBarHidden: false,
        barColor: "#ff9900",
        top: "10dp",
        left: "10dp",
        textAlign: "center",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "profile"
    });
    $.__views.profile && $.addTopLevelView($.__views.profile);
    $.__views.__alloyId17 = Ti.UI.createScrollView({
        id: "__alloyId17"
    });
    $.__views.profile.add($.__views.__alloyId17);
    $.__views.__alloyId18 = Ti.UI.createView({
        top: 0,
        border: "1px",
        height: "91dp",
        width: Ti.UI.FILL,
        textAlign: "center",
        backgroundImage: "/post/background_header2.png",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "__alloyId18"
    });
    $.__views.profile.add($.__views.__alloyId18);
    $.__views.back = Ti.UI.createImageView({
        top: "10dp",
        left: "10dp",
        image: "/general/back.gif",
        width: "50dp",
        id: "back"
    });
    $.__views.__alloyId18.add($.__views.back);
    $.__views.profile = Ti.UI.createLabel({
        top: "10dp",
        left: "10dp",
        textAlign: "center",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        text: "PROFILE",
        id: "profile"
    });
    $.__views.__alloyId18.add($.__views.profile);
    $.__views.configuraciones = Ti.UI.createImageView({
        top: "10dp",
        right: "20dp",
        image: "/general/configuraciones.gif",
        width: "50dp",
        id: "configuraciones"
    });
    $.__views.__alloyId18.add($.__views.configuraciones);
    $.__views.__alloyId19 = Ti.UI.createView({
        id: "__alloyId19"
    });
    $.__views.profile.add($.__views.__alloyId19);
    $.__views.__alloyId20 = Ti.UI.createView({
        id: "__alloyId20"
    });
    $.__views.profile.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Ti.UI.createView({
        top: "80dp",
        border: "1px",
        height: "91dp",
        width: Ti.UI.FILL,
        textAlign: "center",
        backgroundImage: "/general/footer.gif",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "__alloyId21"
    });
    $.__views.profile.add($.__views.__alloyId21);
    $.__views.ALGO = Ti.UI.createImageView({
        id: "ALGO"
    });
    $.__views.__alloyId21.add($.__views.ALGO);
    $.__views.JR = Ti.UI.createImageView({
        id: "JR"
    });
    $.__views.__alloyId21.add($.__views.JR);
    $.__views.search = Ti.UI.createImageView({
        id: "search"
    });
    $.__views.__alloyId21.add($.__views.search);
    $.__views.__alloyId22 = Ti.UI.createScrollView({
        id: "__alloyId22"
    });
    $.__views.profile.add($.__views.__alloyId22);
    exports.destroy = function() {};
    _.extend($, $.__views);
    alert("inicio controler profile");
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;