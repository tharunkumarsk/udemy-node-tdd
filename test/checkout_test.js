const Checkout = require('../src/checkout-cart/checkout');
var checkout;

beforeEach(function () {
    checkout = new Checkout()
});


it('should add item price', function () {
    checkout.addItemPrice("bread",1);
});

it('should add an item', function () {

    checkout.addItemPrice("bread" ,1);
    checkout.addItem("bread");
});