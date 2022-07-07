/**
 *  chrome 5  / edge 12
 *  直接在一个对象上定义新的属性或修改现有属性，并返回该对象
 *  Object.defineProperties(obj, props)
 */

var obj = {};
Object.defineProperties(obj, {
    'property1': {
        value: true,
        writable: true
    },
    'property2': {
        value: 'Hello',
        writable: false
    }
    // etc. etc.
});