function Controller() {
    function cancel() {
        Alloy.CFG.navgroup.close($.login, {
            animated: true
        });
    }
    function send() {
        alert("function send()");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundImage: "/login/fondo.png",
        navBarHidden: true,
        barColor: "#D33B3C",
        id: "login",
        title: "Login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.navBar = Ti.UI.createView({
        top: 0,
        height: 50,
        width: Ti.UI.FILL,
        backgroundImage: "/login/top-login.png",
        id: "navBar"
    });
    $.__views.login.add($.__views.navBar);
    $.__views.leftButton = Ti.UI.createButton({
        font: {
            fontSize: 10,
            fontWeight: "normal",
            font: "BebasNeue"
        },
        image: "/cancel.png",
        borderRadius: 0,
        width: 63,
        height: 25,
        left: 10,
        title: "",
        id: "leftButton"
    });
    $.__views.navBar.add($.__views.leftButton);
    cancel ? $.__views.leftButton.addEventListener("click", cancel) : __defers["$.__views.leftButton!click!cancel"] = true;
    $.__views.rightButton = Ti.UI.createButton({
        font: {
            fontSize: 10,
            fontWeight: "normal",
            font: "BebasNeue"
        },
        image: "/done.png",
        borderRadius: 0,
        width: 63,
        height: 25,
        right: 10,
        title: "",
        id: "rightButton"
    });
    $.__views.navBar.add($.__views.rightButton);
    send ? $.__views.rightButton.addEventListener("click", send) : __defers["$.__views.rightButton!click!send"] = true;
    $.__views.__alloyId4 = Ti.UI.createScrollView({
        top: 50,
        id: "__alloyId4"
    });
    $.__views.login.add($.__views.__alloyId4);
    $.__views.lblForgotTitle = Ti.UI.createLabel({
        top: 40,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 50,
            fontWeight: "bold",
            fontFamily: "BebasNeue"
        },
        color: "#ed4243",
        text: "Forgot My Password",
        id: "lblForgotTitle"
    });
    $.__views.__alloyId4.add($.__views.lblForgotTitle);
    $.__views.lblUserEmail = Ti.UI.createView({
        left: 20,
        font: {
            fontSize: 10,
            fontWeight: "bold",
            font: "Bebas Neue"
        },
        color: "#fff",
        width: "80dp",
        height: "32dp",
        backgroundImage: "/login/label.png",
        top: 160,
        id: "lblUserEmail"
    });
    $.__views.__alloyId4.add($.__views.lblUserEmail);
    $.__views.__alloyId5 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 10,
            fontWeight: "bold",
            font: "Arial"
        },
        color: "#fff",
        width: "80dp",
        height: "32dp",
        text: "USERNAME",
        id: "__alloyId5"
    });
    $.__views.lblUserEmail.add($.__views.__alloyId5);
    $.__views.userEmail = Ti.UI.createTextField({
        width: "180dp",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        height: "35dp",
        top: "160dp",
        left: 120,
        hintText: "userEmail",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        id: "userEmail"
    });
    $.__views.__alloyId4.add($.__views.userEmail);
    send ? $.__views.userEmail.addEventListener("return", send) : __defers["$.__views.userEmail!return!send"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Models.user;
    __defers["$.__views.leftButton!click!cancel"] && $.__views.leftButton.addEventListener("click", cancel);
    __defers["$.__views.rightButton!click!send"] && $.__views.rightButton.addEventListener("click", send);
    __defers["$.__views.userEmail!return!send"] && $.__views.userEmail.addEventListener("return", send);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;