var moment = require("alloy/moment");

var DBHelper = require("DBHelper");

var Helper = new DBHelper();

exports.definition = {
    config: {
        columns: {
            Id: "text",
            Name: "text",
            Connected: "bool"
        },
        adapter: {
            type: "sql",
            collection_name: "SocialNetwork"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            getSocialNetwork: function() {
                var model = null;
                var db = Helper.openDbConnection();
                var rs = db.execute("SELECT Id, Name, Connected FROM SocialNetwork");
                rs.isValidRow() && (model = Alloy.createModel("SocialNetworks", {
                    Id: rs.fieldByName("Id"),
                    Name: rs.fieldByName("Name"),
                    Connected: rs.fieldByName("Connected")
                }));
                db.close();
                return model;
            },
            updateConnectSocialNetwork: function(name, connected, id) {
                var db = Helper.openDbConnection();
                var rs = db.execute("SELECT Id, Name, Connected FROM SocialNetwork");
                rs.isValidRow() ? db.execute("Update SocialNetwork SET Name=?, Connected=? WHERE Id=?", name, connected, id) : db.execute("INSERT into SocialNetwork (Id, Name, Connected) Values (?,?,?)", id, name, connected);
                db.close();
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("SocialNetwork", exports.definition, []);

collection = Alloy.C("SocialNetwork", exports.definition, model);

exports.Model = model;

exports.Collection = collection;