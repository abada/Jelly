function Controller() {
    function refreshFeeds(start) {
        var respuesta = posts.getFeeds(1, start);
        if ('"false"' !== respuesta) {
            var rows = [];
            _.each(respuesta, function(item) {
                var detail = posts.getPosts(item.id_post, 1);
                if ('"false"' === detail || "false" === detail) alert("erradas"); else {
                    var row = Alloy.createController("feedRow", {
                        articleUrl: detail.like_count,
                        image: detail.photo,
                        title: detail.title,
                        rating: detail.rating,
                        date: detail.last_update
                    }).getView();
                    rows.push(row);
                    $.table.appendRow(row, {
                        animationStyle: Titanium.UI.iPhone.RowAnimationStyle.NONE
                    });
                }
            });
            return rows;
        }
        alert("Credenciales erradas");
    }
    function beginUpdate() {
        updating = true;
        navActInd.show();
        $.table.appendRow(loadingRow);
        setTimeout(endUpdate, 2e3);
    }
    function endUpdate() {
        updating = false;
        $.table.deleteRow(lastRow, {
            animationStyle: Titanium.UI.iPhone.RowAnimationStyle.NONE
        });
        refreshFeeds(lastRow);
        lastRow += 10;
        navActInd.hide();
    }
    function cargaProfile() {
        alert("antes de cargar profile");
        Alloy.CFG.navgroup.open(Alloy.createController("profile").getView());
        alert("despues de cargar profile");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.feed = Ti.UI.createWindow({
        backgroundImage: "/login/fondo.png",
        navBarHidden: false,
        barColor: "#ff9900",
        id: "feed"
    });
    $.__views.feed && $.addTopLevelView($.__views.feed);
    $.__views.__alloyId1 = Ti.UI.createView({
        top: 0,
        border: "1px",
        height: "91dp",
        width: Ti.UI.FILL,
        textAlign: "center",
        backgroundImage: "/post/background_header.gif.png",
        color: "#fff",
        font: {
            fontSize: "24dp",
            fontWeight: "bold"
        },
        id: "__alloyId1"
    });
    $.__views.feed.add($.__views.__alloyId1);
    $.__views.logo = Ti.UI.createImageView({
        id: "logo"
    });
    $.__views.__alloyId1.add($.__views.logo);
    $.__views.comment = Ti.UI.createLabel({
        text: "4",
        id: "comment"
    });
    $.__views.__alloyId1.add($.__views.comment);
    $.__views.friend = Ti.UI.createLabel({
        text: ">XXX",
        id: "friend"
    });
    $.__views.__alloyId1.add($.__views.friend);
    cargaProfile ? $.__views.friend.addEventListener("click", cargaProfile) : __defers["$.__views.friend!click!cargaProfile"] = true;
    $.__views.table = Ti.UI.createTableView({
        top: "95dp",
        id: "table"
    });
    $.__views.feed.add($.__views.table);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var posts = Alloy.Models.posts;
    refreshFeeds(1);
    var lastRow = 10;
    var navActInd = Titanium.UI.createActivityIndicator();
    $.feed.rightNavButton = navActInd;
    var updating = false;
    var loadingRow = Ti.UI.createTableViewRow({
        title: "Loading..."
    });
    var lastDistance = 0;
    $.table.addEventListener("scroll", function(e) {
        var offset = e.contentOffset.y;
        var height = e.size.height;
        var total = offset + height;
        var theEnd = e.contentSize.height;
        var distance = theEnd - total;
        if (lastDistance > distance) {
            var nearEnd = .75 * theEnd;
            !updating && total >= nearEnd && beginUpdate();
        }
        lastDistance = distance;
    });
    __defers["$.__views.friend!click!cargaProfile"] && $.__views.friend.addEventListener("click", cargaProfile);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;