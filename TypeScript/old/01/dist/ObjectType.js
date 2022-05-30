var f = {};
var arr = [1, 2, 3];
var date = new Date();
var user = {
    username: 'Aix',
    age: 12
};
console.log(user.age);
var user2 = {
    username: 'Bob',
    age: 23
};
//类与构造函数
//功能相对强大，但是比较复杂
var Person = /** @class */ (function () {
    function Person(username, age) {
        this.username = username;
        this.age = age;
    }
    return Person;
}());
var user3 = new Person("Cis", 20);
console.log(user3.age);
function ajax(options) {
}
ajax({
    url: 'www.baidu.com',
    method: 'get'
});
