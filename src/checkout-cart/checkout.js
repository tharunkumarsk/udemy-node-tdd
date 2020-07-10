module.exports = class Checkout {
    constructor(){
        this.total =0;
        this.prices = new Object();
    }
    addItemPrice(item,price){
        this.prices[item] = price;
    }

    addItem(item){
        this.total += this.prices[item]

    }

    calculateTotal(){
    return this.total;
    }
};
