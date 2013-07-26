function Controller() {
    function isLoggedInFacebook() {
        var fb = require("facebook");
        fb.appid = Ti.App.Properties.getString("ti.facebook.appid", "127424943970451");
        fb.permissions = [ "read_stream" ];
        fb.forceDialogAuth = false;
        return fb.loggedIn;
    }
    function loginFacebook() {
        var fb = require("facebook");
        fb.appid = Ti.App.Properties.getString("ti.facebook.appid", "127424943970451");
        fb.permissions = [ "read_stream" ];
        fb.forceDialogAuth = false;
        fb.addEventListener("login", function(e) {
            e.success ? alert("Logged In") : e.error ? alert(e.error) : e.cancelled && alert("Canceled");
        });
        fb.authorize();
    }
    function loginTwitter() {
        var social = require("social");
        var twitter = social.create({
            site: "Twitter",
            consumerKey: "8i5ubq6QBRDIus8hIP8ISg",
            consumerSecret: "prtpoB4py1TNJsaCusovgh9TBmLdbSITDkxxuKS5hCM"
        });
        twitter.authorize(function() {
            alert("Authorized!");
        });
    }
    function loginInstagram() {
        var social = require("social");
        var twitter = social.create({
            site: "Instagram",
            consumerKey: "8i5ubq6QBRDIus8hIP8ISg",
            consumerSecret: "prtpoB4py1TNJsaCusovgh9TBmLdbSITDkxxuKS5hCM"
        });
        twitter.authorize(function() {
            alert("Authorized!");
        });
    }
    function initialize() {
        isLoggedInFacebook();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home = Ti.UI.createWindow({
        backgroundImage: "/login/fondo.png",
        id: "home",
        title: "Basic Window"
    });
    $.__views.home && $.addTopLevelView($.__views.home);
    $.__views.__alloyId6 = Ti.UI.createImageView({
        image: "/login/logo.png",
        top: 50,
        width: 250,
        id: "__alloyId6"
    });
    $.__views.home.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createButton({
        image: "/login/login-facebook.png",
        left: 20,
        top: 150,
        width: 130,
        height: 130,
        id: "__alloyId7"
    });
    $.__views.home.add($.__views.__alloyId7);
    loginFacebook ? $.__views.__alloyId7.addEventListener("click", loginFacebook) : __defers["$.__views.__alloyId7!click!loginFacebook"] = true;
    $.__views.__alloyId8 = Ti.UI.createButton({
        image: "/login/login-twitter.png",
        right: 20,
        top: 150,
        width: 130,
        height: 130,
        id: "__alloyId8"
    });
    $.__views.home.add($.__views.__alloyId8);
    loginTwitter ? $.__views.__alloyId8.addEventListener("click", loginTwitter) : __defers["$.__views.__alloyId8!click!loginTwitter"] = true;
    $.__views.__alloyId9 = Ti.UI.createButton({
        image: "/login/login-instagram.png",
        left: 20,
        top: 300,
        width: 130,
        height: 130,
        id: "__alloyId9"
    });
    $.__views.home.add($.__views.__alloyId9);
    loginInstagram ? $.__views.__alloyId9.addEventListener("click", loginInstagram) : __defers["$.__views.__alloyId9!click!loginInstagram"] = true;
    $.__views.__alloyId10 = Ti.UI.createButton({
        image: "/login/login.png",
        right: 20,
        top: 370,
        width: 130,
        height: 60,
        id: "__alloyId10"
    });
    $.__views.home.add($.__views.__alloyId10);
    loginJelly ? $.__views.__alloyId10.addEventListener("click", loginJelly) : __defers["$.__views.__alloyId10!click!loginJelly"] = true;
    $.__views.__alloyId11 = Ti.UI.createButton({
        image: "/login/signup-with-username.png",
        right: 20,
        top: 300,
        width: 130,
        height: 60,
        id: "__alloyId11"
    });
    $.__views.home.add($.__views.__alloyId11);
    signupJelly ? $.__views.__alloyId11.addEventListener("click", signupJelly) : __defers["$.__views.__alloyId11!click!signupJelly"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.Models.socialNetworks;
    var loginJelly = function() {
        Alloy.CFG.navgroup.open(Alloy.createController("login").getView());
    };
    var signupJelly = function() {
        Alloy.CFG.navgroup.open(Alloy.createController("signup").getView());
    };
    initialize();
    __defers["$.__views.__alloyId7!click!loginFacebook"] && $.__views.__alloyId7.addEventListener("click", loginFacebook);
    __defers["$.__views.__alloyId8!click!loginTwitter"] && $.__views.__alloyId8.addEventListener("click", loginTwitter);
    __defers["$.__views.__alloyId9!click!loginInstagram"] && $.__views.__alloyId9.addEventListener("click", loginInstagram);
    __defers["$.__views.__alloyId10!click!loginJelly"] && $.__views.__alloyId10.addEventListener("click", loginJelly);
    __defers["$.__views.__alloyId11!click!signupJelly"] && $.__views.__alloyId11.addEventListener("click", signupJelly);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;