var expect = require("chai").expect;
const Checkout = require('../src/checkout-cart/checkout');

var checkout;

beforeEach(function () {
    checkout = new Checkout()
    checkout.addItemPrice("bread" ,1);
    checkout.addItem("bread");
});



it('should calculate total price', function () {

    expect(checkout.calculateTotal()).to.equal(1);
});

it('should calculate total price for multiple items', function () {
    checkout.addItemPrice("water" ,2);
    checkout.addItem("water");
    expect(checkout.calculateTotal()).to.equal(3);
});