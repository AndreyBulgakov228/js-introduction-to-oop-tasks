import _ from 'lodash';

// BEGIN
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(item, count) {
        const existingItem = this.items.find(entry => entry.item.name === item.name);
        if (existingItem) {
            existingItem.count += count;
        } else {
            this.items.push({ item, count });
        }
    }

    getItems() {
        return this.items;
    }

    getCost() {
        return this.items.reduce((total, entry) => total + (entry.item.price * entry.count), 0);
    }

    getCount() {
        return this.items.reduce((total, entry) => total + entry.count, 0);
    }
}

export default Cart;
// END
