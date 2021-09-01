//number类型
var arrNum = [];
arrNum.push(100);
// arrNum.push("100")
//string类型
var arrStr = [];
arrStr.push('111');
// arrStr.push(100)
//元组类型
var dataOne = ['one', 0];
dataOne.push(100);
dataOne.push("100");
dataOne.push(100, '100');
// dataOne.push(true)
//枚举类型
//值不可修改，前面的Key必须是字符，
var HTTP_CODE;
(function (HTTP_CODE) {
    HTTP_CODE[HTTP_CODE["OK"] = 200] = "OK";
    HTTP_CODE[HTTP_CODE["NOT_FOUND"] = 404] = "NOT_FOUND";
    HTTP_CODE[HTTP_CODE["NOT_LIANJIE"] = 500] = "NOT_LIANJIE";
})(HTTP_CODE || (HTTP_CODE = {}));
console.log(HTTP_CODE.OK);
//字符串枚举
var URLS;
(function (URLS) {
    URLS["USER_LOGIN"] = "/api/login";
    URLS["USER_LAYOUT"] = "/api/layout";
    URLS[URLS["USER"] = 200] = "USER";
})(URLS || (URLS = {}));
