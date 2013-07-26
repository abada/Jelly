function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId26 = Ti.UI.createWindow({
        navBarHidden: true,
        exitOnClose: true,
        title: "home",
        id: "__alloyId26"
    });
    $.__views.dashboard = Ti.UI.createView({
        top: 0,
        bottom: 0,
        layout: "horizontal",
        borderRadius: 0,
        id: "dashboard"
    });
    $.__views.__alloyId26.add($.__views.dashboard);
    $.__views.navgroup = Ti.UI.iPhone.createNavigationGroup({
        window: $.__views.__alloyId26,
        id: "navgroup"
    });
    $.__views.index.add($.__views.navgroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Alloy.CFG.navgroup = $.navgroup;
    var di = Alloy.createController("home").getView();
    $.dashboard.add(di);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;