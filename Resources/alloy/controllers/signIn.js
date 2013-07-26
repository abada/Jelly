function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.signin = Ti.UI.createWindow({
        id: "signin",
        title: "Basic Window"
    });
    $.__views.signin && $.addTopLevelView($.__views.signin);
    $.__views.__alloyId23 = Ti.UI.createScrollView({
        id: "__alloyId23"
    });
    $.__views.signin.add($.__views.__alloyId23);
    $.__views.__alloyId24 = Ti.UI.createLabel({
        font: {
            fontSize: 46,
            font: "Arial Black"
        },
        top: 10,
        color: "#ED4243",
        width: 200,
        text: "SIGN UP",
        id: "__alloyId24"
    });
    $.__views.__alloyId23.add($.__views.__alloyId24);
    $.__views.__alloyId25 = Ti.UI.createButton({
        backgroundImage: "/login/choose-photo.png",
        top: 60,
        width: 90,
        height: 90,
        id: "__alloyId25"
    });
    $.__views.__alloyId23.add($.__views.__alloyId25);
    $.__views.lblFullname = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            font: "Arial Black"
        },
        top: 170,
        left: 20,
        color: "#fff",
        backgroundImage: "/login/label.png",
        width: 90,
        height: 38,
        text: "FULLNAME",
        id: "lblFullname"
    });
    $.__views.__alloyId23.add($.__views.lblFullname);
    $.__views.fullname = Ti.UI.createTextField({
        width: "180dp",
        height: 38,
        font: {
            fontSize: 14,
            font: "Arial Black"
        },
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        top: "170dp",
        right: 20,
        hintText: "username",
        returnKeyType: Ti.UI.RETURNKEY_NEXT,
        id: "fullname"
    });
    $.__views.__alloyId23.add($.__views.fullname);
    $.__views.lblEmail = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            font: "Arial Black"
        },
        top: 210,
        left: 20,
        color: "#fff",
        backgroundImage: "/login/label.png",
        width: 90,
        height: 38,
        text: "EMAIL",
        id: "lblEmail"
    });
    $.__views.__alloyId23.add($.__views.lblEmail);
    $.__views.email = Ti.UI.createTextField({
        width: "180dp",
        height: 38,
        font: {
            fontSize: 14,
            font: "Arial Black"
        },
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        top: "210dp",
        right: 20,
        hintText: "email",
        passwordMask: true,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "email"
    });
    $.__views.__alloyId23.add($.__views.email);
    $.__views.lblUsername = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            font: "Arial Black"
        },
        top: 250,
        left: 20,
        color: "#fff",
        backgroundImage: "/login/label.png",
        width: 90,
        height: 38,
        text: "USERNAME",
        id: "lblUsername"
    });
    $.__views.__alloyId23.add($.__views.lblUsername);
    $.__views.username = Ti.UI.createTextField({
        width: "180dp",
        height: 38,
        font: {
            fontSize: 14,
            font: "Arial Black"
        },
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        top: "250dp",
        right: 20,
        hintText: "username",
        passwordMask: true,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "username"
    });
    $.__views.__alloyId23.add($.__views.username);
    $.__views.lblPassword = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            font: "Arial Black"
        },
        top: 290,
        left: 20,
        color: "#fff",
        backgroundImage: "/login/label.png",
        width: 90,
        height: 38,
        text: "PASSWORD",
        id: "lblPassword"
    });
    $.__views.__alloyId23.add($.__views.lblPassword);
    $.__views.password = Ti.UI.createTextField({
        width: "180dp",
        height: 38,
        font: {
            fontSize: 14,
            font: "Arial Black"
        },
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        top: "290dp",
        right: 20,
        hintText: "password",
        passwordMask: true,
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "password"
    });
    $.__views.__alloyId23.add($.__views.password);
    $.__views.lblBirthday = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            font: "Arial Black"
        },
        top: 330,
        left: 20,
        color: "#fff",
        backgroundImage: "/login/label.png",
        width: 90,
        height: 38,
        text: "BIRTHDAY",
        id: "lblBirthday"
    });
    $.__views.__alloyId23.add($.__views.lblBirthday);
    $.__views.birthday = Ti.UI.createTextField({
        width: "60dp",
        height: 38,
        font: {
            fontSize: 14,
            font: "Arial Black"
        },
        autocapitalization: Ti.UI.TEXT_AUTOCAPITALIZATION_NONE,
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_LINE,
        borderColor: "#BEBEBE",
        top: "330dp",
        right: 20,
        hintText: "00/00/0000",
        returnKeyType: Ti.UI.RETURNKEY_DONE,
        id: "birthday"
    });
    $.__views.__alloyId23.add($.__views.birthday);
    $.__views.lblGender = Ti.UI.createLabel({
        font: {
            fontSize: 10,
            font: "Arial Black"
        },
        top: 330,
        left: 160,
        color: "#fff",
        backgroundImage: "/login/label.png",
        width: 90,
        height: 38,
        text: "GENDER",
        id: "lblGender"
    });
    $.__views.__alloyId23.add($.__views.lblGender);
    $.__views.genderM = Ti.UI.createButton({
        top: "330dp",
        left: 210,
        backgroundImage: "/login/man-off.gif",
        width: 12,
        height: 35,
        id: "genderM"
    });
    $.__views.__alloyId23.add($.__views.genderM);
    $.__views.genderF = Ti.UI.createButton({
        top: "330dp",
        left: 240,
        backgroundImage: "/login/woman-off.gif",
        width: 15,
        height: 35,
        id: "genderF"
    });
    $.__views.__alloyId23.add($.__views.genderF);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var leftButton = Ti.UI.createButton({
        background: "#fff",
        color: "#ff9900",
        width: 41,
        height: 30,
        title: "Cancel"
    });
    leftButton.addEventListener("click", function() {
        Alloy.CFG.navgroup.close($.signin, {
            animated: true
        });
    });
    $.signin.leftNavButton = leftButton;
    var rightButton = Ti.UI.createButton({
        background: "#fff",
        color: "#ff9900",
        width: 41,
        height: 30,
        title: "Done"
    });
    rightButton.addEventListener("click", function() {
        Alloy.CFG.navgroup.open(Alloy.createController("home").getView());
    });
    $.signin.rightNavButton = rightButton;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;