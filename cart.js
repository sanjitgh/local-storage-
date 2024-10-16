const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product, quantity)
    saveProductToLocalStorage(product, quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    ul.appendChild(li);
}


////////////////////


const getStordShopingCart = () =>{
    let cart = {};
    const stordCart = localStorage.getItem('cart');
    if(stordCart){
        cart = JSON.parse(stordCart);
    }
    return cart;
}


const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStordShopingCart();
    cart[product] = quantity;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}


const displayProductFromLocalStorage = () =>{

    const saveCart = getStordShopingCart();
    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product,quantity);
        displayProduct(product, quantity)
    }
}
displayProductFromLocalStorage()