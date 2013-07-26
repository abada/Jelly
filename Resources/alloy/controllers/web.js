function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.id = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: false,
        barColor: "#333",
        id: "id"
    });
    $.__views.id && $.addTopLevelView($.__views.id);
    $.__views.web = Ti.UI.createWebView({
        id: "web"
    });
    $.__views.id.add($.__views.web);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.web.url = args.url;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;