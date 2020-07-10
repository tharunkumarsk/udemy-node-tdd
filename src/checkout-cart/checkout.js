module.exports = class Checkout {
    constructor() {
        this.itemsCount = new Object();
        this.prices = new Object();
        this.discount = new Object();
    }

    addItemPrice(item, price) {
        this.prices[item] = price;
    }

    addItem(item) {
        if (this.itemsCount[item] == undefined) {
            return this.itemsCount[item] = 1
        }
        return this.itemsCount[item]++

    }

    calculateTotal() {
        let total = 0;
        let totalDiscount = 0;
        for (let item in this.itemsCount) {
            let discount = this.discount[item];
            if (discount !== undefined) {
                let nbrOfDiscounts = Math.floor(this.itemsCount[item] / discount.count);
                totalDiscount = nbrOfDiscounts * discount.discountPrice;
                total += this.prices[item] * this.itemsCount[item] - totalDiscount;
            } else {
                total += this.prices[item] * this.itemsCount[item]
            }

        }
        return total;
    }

    addDiscount(item, count, discountPrice) {
        this.discount[item] = {count, discountPrice};

    }
};
