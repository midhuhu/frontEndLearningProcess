var User = /** @class */ (function () {
    function User(id, name) {
        this.id = id;
        this.name = name;
        console.log("构造函数");
    }
    User.prototype.posArticle = function (title, content) {
        console.log("\u96F6\u96F6\u843D\u843D" + title);
    };
    return User;
}());
var user1 = new User(1, "bob");
user1.posArticle("sdfs", "dfsd");
