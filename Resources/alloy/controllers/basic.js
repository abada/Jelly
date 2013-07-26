function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        navBarHidden: false,
        barColor: "#333",
        id: "index",
        title: "Basic Window"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        color: "red",
        text: "I'm a Basic Window",
        id: "__alloyId0"
    });
    $.__views.index.add($.__views.__alloyId0);
    clickWin ? $.__views.__alloyId0.addEventListener("click", clickWin) : __defers["$.__views.__alloyId0!click!clickWin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var leftButton = Ti.UI.createButton({
        backgroundImage: "images/6dots.png",
        width: 41,
        height: 30
    });
    leftButton.addEventListener("click", function() {
        Alloy.CFG.navgroup.close($.index, {
            animated: true
        });
    });
    $.index.leftNavButton = leftButton;
    var clickWin = function() {
        alert("eso");
    };
    __defers["$.__views.__alloyId0!click!clickWin"] && $.__views.__alloyId0.addEventListener("click", clickWin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;