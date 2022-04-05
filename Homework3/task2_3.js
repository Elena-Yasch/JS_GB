function countBasketPrice(shop_basket) {
    let total = 0
    for (let item in shop_basket) {
        price = shop_basket[item]['price'];
        quantity = shop_basket[item]['quantity'];
        sum = price * quantity;
        total = total + sum
    }

    return total;
}


shop_basket = [
    { product: 'milk', price: '90', quantity: '3' },
    { product: 'oil', price: '120', quantity: '1' },
    { product: 'cheese', price: '380', quantity: '1' },
    { product: 'eggs', price: '60', quantity: '1' },
    { product: 'bread', price: '45', quantity: '2' },
]


console.log(countBasketPrice(shop_basket));