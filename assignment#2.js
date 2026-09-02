let cart = [
    {
        id: 101,
        name: "Laptop",
        price: 120000,
        quantity: 2,
        discount: 10
    },
    {
        id: 102,
        name: "Mouse",
        price: 2500,
        quantity: 3,
        discount: 5
    }
];

const TAX_RATE = 15;
function calculateTotal() {

    let subtotal = 0;
    let discountAmount = 0;

    cart.forEach(function (product) {
        let productSubtotal = product.price * product.quantity;
        let productDiscount =
            productSubtotal * product.discount / 100;
        subtotal += productSubtotal;
        discountAmount += productDiscount;
    });
    let priceAfterDiscount = subtotal - discountAmount;
    let tax = priceAfterDiscount * TAX_RATE / 100;
    let finalPrice = priceAfterDiscount + tax;
    return {
        subtotal: subtotal,
        discountAmount: discountAmount,
        tax: tax,
        finalPrice: finalPrice
    };
}
function addToCart(product) {
    let existingProduct = cart.find(function (item) {
        return item.id === product.id;
    });

    if (existingProduct) {
        console.log("Product already exists in cart.");
        return;
    }

    cart.push(product);

    console.log(product.name + " added to cart.");
}

function removeFromCart(id) {

    let index = cart.findIndex(function (product) {
        return product.id === id;
    });

    if (index === -1) {
        console.log("Product not found.");
        return;
    }

    let removedProduct = cart.splice(index, 1);

    console.log(removedProduct[0].name + " removed from cart.");
}

function updateQuantity(id, change) {

    let product = cart.find(function (item) {
        return item.id === id;
    });

    if (!product) {
        console.log("Product not found.");
        return;
    }

    product.quantity += change;
    if (product.quantity < 0) {
        product.quantity = 0;
    }
    console.log(
        product.name +
        " quantity updated to " +
        product.quantity
    );
}

function updatePrice(id, newPrice) {

    let product = cart.find(function (item) {
        return item.id === id;
    });

    if (!product) {
        console.log("Product not found.");
        return;
    }

    product.price = newPrice;

    console.log(
        product.name +
        " price updated to " +
        newPrice
    );
}

function applyDiscount(id, discount) {

    let product = cart.find(function (item) {
        return item.id === id;
    });

    if (!product) {
        console.log("Product not found.");
        return;
    }

    // Keep discount between 0 and 100
    if (discount < 0) {
        discount = 0;
    }

    if (discount > 100) {
        discount = 100;
    }

    product.discount = discount;

    console.log(
        product.name +
        " discount updated to " +
        discount +
        "%"
    );
}
function mostExpensiveItem() {

    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }

    let expensiveProduct = cart.reduce(function (max, product) {

        return product.price > max.price
            ? product
            : max;

    });

    console.log("Most expensive item:");
    console.log(expensiveProduct);
}

function displayCart() {

    console.log("========== CART ==========");

    cart.forEach(function (product) {

        console.log(
            "ID:", product.id,
            "| Name:", product.name,
            "| Price:", product.price,
            "| Quantity:", product.quantity,
            "| Discount:", product.discount + "%"
        );
    });
}

displayCart();
let total = calculateTotal();

console.log("========== TOTAL ==========");
console.log("Subtotal:", total.subtotal);
console.log("Discount Amount:", total.discountAmount);
console.log("Tax:", total.tax);
console.log("Final Price:", total.finalPrice);

addToCart({
    id: 103,
    name: "Keyboard",
    price: 5000,
    quantity: 1,
    discount: 10
});

addToCart({
    id: 101,
    name: "Laptop",
    price: 120000,
    quantity: 1,
    discount: 10
});
updateQuantity(101, 1);

updateQuantity(102, -1);
updateQuantity(102, -10);
updatePrice(101, 115000);
applyDiscount(101, 20);
removeFromCart(103);

mostExpensiveItem();
let finalTotal = calculateTotal();
console.log("Subtotal:", finalTotal.subtotal);
console.log("Discount Amount:", finalTotal.discountAmount);
console.log("Tax:", finalTotal.tax);
console.log("Final Price:", finalTotal.finalPrice);