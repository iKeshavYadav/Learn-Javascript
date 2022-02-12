//Exporting module
console.log('Exporting module');

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
}

const totalPrice = 237;
const totalQuantity = 23;

//export multiple obj 
export {totalPrice, totalQuantity as tq}


//'default export' - export one thing per module (exporting value)

export default function (product, quantity){
    cart.push({product, quantity});
    console.log(`${quantity} ${product} added to cart`);
};
