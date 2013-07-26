var Alloy = require("alloy"), _ = Alloy._, Backbone = Alloy.Backbone;

Alloy.Models.user = Alloy.createModel("User");

Alloy.Models.user.fetch();

Alloy.Models.posts = Alloy.createModel("Post");

Alloy.Models.comments = Alloy.createModel("Comment");

Alloy.Models.socialNetworks = Alloy.createModel("SocialNetwork");

Alloy.createController("index");