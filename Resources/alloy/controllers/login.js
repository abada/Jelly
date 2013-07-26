function Controller() {
    function cancel() {
        Alloy.CFG.navgroup.close($.login, {
            animated: true
        });
    }
    function login(e) {
        e && e.source && _.isFunction(e.source.blur) && e.source.blur();
        if (0 == $.username.value.length || 0 == $.password.value.length) alert("Usuario y/o Password no puede ser vacio"); else {
            var respuesta = user.login($.username.value, $.password.value);
            if ("false" === respuesta) alert("Credenciales erradas" + respuesta); else {
                alert("Respuesta OK" + respuesta);
                Alloy.CFG.navgroup.open(Alloy.createController("feed").getView());
            }
        }
    }
    function focusPassword() {
        $.password.focus();
    }
    function forgotPassword() {
        Alloy.CFG.navgroup.open(Alloy.createController("forgot").getView());
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
    login ? $.__views.rightButton.addEventListener("click", login) : __defers["$.__views.rightButton!click!login"] = true;
    $.__views.__alloyId13 = Ti.UI.createScrollView({
        top: 50,
        id: "__alloyId13"
    });
    $.__views.login.add($.__views.__alloyId13);
    $.__views.lblTitulologin = Ti.UI.createLabel({
        top: 40,
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: 50,
            fontWeight: "bold",
            fontFamily: "BebasNeue"
        },
        color: "#ed4243",
        text: "LOGIN",
        id: "lblTitulologin"
    });
    $.__views.__alloyId13.add($.__views.lblTitulologin);
    $.__views.lblUsername = Ti.UI.createView({
        left: 20,
        font: {
            fontSize: 10,
            fontWeight: "bold",
            font: "BebasNeue"
        },
        color: "#fff",
        width: "80dp",
        height: "32dp",
        backgroundImage: "/login/label.png",
        top: 160,
        id: "lblUsername"
    });
    $.__views.__alloyId13.add($.__views.lblUsername);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 10,
            fontWeight: "bold",
            fontFamily: "BebasNeue"
        },
        color: "#fff",
        width: "80dp",
        height: "32dp",
        text: "USERNAME",
        id: "__alloyId14"
    });
    $.__views.lblUsername.add($.__views.__alloyId14);
    $.__views.username = Ti.UI.createTextField({
        width: "180dp",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        height: "35dp",
        top: "160dp",
        left: 120,
        hintText: "username",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        id: "username"
    });
    $.__views.__alloyId13.add($.__views.username);
    focusPassword ? $.__views.username.addEventListener("return", focusPassword) : __defers["$.__views.username!return!focusPassword"] = true;
    $.__views.lblPassword = Ti.UI.createView({
        left: 20,
        font: {
            fontSize: 10,
            fontWeight: "bold",
            font: "BebasNeue"
        },
        color: "#fff",
        width: "80dp",
        height: "32dp",
        backgroundImage: "/login/label.png",
        top: 210,
        id: "lblPassword"
    });
    $.__views.__alloyId13.add($.__views.lblPassword);
    $.__views.__alloyId15 = Ti.UI.createLabel({
        left: 10,
        font: {
            fontSize: 10,
            fontWeight: "bold",
            fontFamily: "BebasNeue"
        },
        color: "#fff",
        width: "80dp",
        height: "32dp",
        text: "PASSWORD",
        id: "__alloyId15"
    });
    $.__views.lblPassword.add($.__views.__alloyId15);
    $.__views.password = Ti.UI.createTextField({
        width: "180dp",
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        height: "35dp",
        top: "210dp",
        left: 120,
        hintText: "password",
        passwordMask: true,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "password"
    });
    $.__views.__alloyId13.add($.__views.password);
    login ? $.__views.password.addEventListener("return", login) : __defers["$.__views.password!return!login"] = true;
    $.__views.__alloyId16 = Ti.UI.createButton({
        font: {
            fontSize: 10,
            fontWeight: "normal",
            font: "BebasNeue"
        },
        top: 250,
        height: 12,
        width: 111,
        borderWidth: 0,
        borderRadius: 0,
        title: "I forgot my password",
        id: "__alloyId16"
    });
    $.__views.__alloyId13.add($.__views.__alloyId16);
    forgotPassword ? $.__views.__alloyId16.addEventListener("click", forgotPassword) : __defers["$.__views.__alloyId16!click!forgotPassword"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var user = Alloy.Models.user;
    __defers["$.__views.leftButton!click!cancel"] && $.__views.leftButton.addEventListener("click", cancel);
    __defers["$.__views.rightButton!click!login"] && $.__views.rightButton.addEventListener("click", login);
    __defers["$.__views.username!return!focusPassword"] && $.__views.username.addEventListener("return", focusPassword);
    __defers["$.__views.password!return!login"] && $.__views.password.addEventListener("return", login);
    __defers["$.__views.__alloyId16!click!forgotPassword"] && $.__views.__alloyId16.addEventListener("click", forgotPassword);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;