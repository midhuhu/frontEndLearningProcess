var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//父类
var User2 = /** @class */ (function () {
    function User2(id, username) {
        this.id = id;
        this.username = username;
    }
    User2.prototype.posArticle = function (title, content) {
        console.log(this.username + " \u53D1\u8868\u4E86\u6587\u7AE0\u300A" + title + "\u300B \u5185\u5BB9\u662F\uFF1A" + content);
    };
    return User2;
}());
//子类
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    //子类中添加constructor,必须super父类的参数
    function VIP(id, username, score) {
        var _this = _super.call(this, id, username) || this;
        _this.score = score;
        return _this;
        //使用this.id要早super之后
    }
    VIP.prototype.posArticle = function (title, content, file) {
        //super父类方法
        _super.prototype.posArticle.call(this, title, content);
        if (file) {
            this.posAttachment(file);
        }
    };
    VIP.prototype.posAttachment = function (file) {
        console.log(this.username + " \u4E0A\u4F20\u4E86\u4E00\u4E2A\u9644\u4EF6\uFF1A" + file);
    };
    return VIP;
}(User2));
var vip1 = new VIP(1, "zoe", 89);
vip1.posArticle("流浪", "饿饿饿饿饿饿饿饿饿饿饿", "1-png");
// vip1.posAttachment("e.png")
