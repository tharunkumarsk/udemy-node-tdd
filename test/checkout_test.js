const Checkout = require('../src/checkout-cart/checkout');


it('should instantiate checkout', function () {
var checkout = new Checkout();
});

it('should add item price', function () {
    var checkout = new Checkout();
    checkout.addItemPrice("bread",1);
});