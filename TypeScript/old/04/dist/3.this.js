//例子1
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            //可以看到createCardPicker是个函数，并且它又返回了一个函数。
            // 如果我们尝试运行这个程序，会发现它并没有弹出对话框而是报错了。
            // 因为 createCardPicker返回的函数里的this被设置成了window而不是deck对象。
            // 因为我们只是独立的调用了 cardPicker()。 顶级的非方法式调用会将 this视为window。
            // （注意：在严格模式下， this为undefined而不是window）。
            // 打开下方
            // return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        };
    }
};
var cardPicker1 = deck1.createCardPicker();
var pickedCard1 = cardPicker1();
// alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
//例子2
var deck2 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker2 = deck2.createCardPicker();
var pickedCard2 = cardPicker2();
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
