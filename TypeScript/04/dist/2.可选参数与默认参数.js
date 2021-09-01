function buildName(firstName, lastName, name) {
    return firstName + " " + lastName;
}
// let result1 = buildName("Bob");                  // error
// let result2 = buildName("Bob", "Adams", "Sr.","sum");  // error
// let result2 = buildName("Bob", "Adams", "Sr.");  // error
var result3 = buildName("Bob", "Adams"); // right
function buildName2(firstName, lastName) {
    return firstName + " " + lastName;
}
var res1 = buildName2("a");
// let res2 = buildName2("a","b");
var res3 = buildName2("a", "smith");
var res4 = buildName2("a", undefined);
// let res5 = buildName2("a","b","c");
function buildName3(firstName, lastName) {
    return firstName + " " + lastName;
}
// let res11 = buildName3("a");
var res12 = buildName3("bob", "b");
