function showMoreInfo() {
    alert('More information coming soon!');
}
document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Iphone 11', price: '₹50000', image: './img/iphone.jpg' },
        { name: 'LED', price: '₹10000', image: './img/TV.jpg' },
        { name: 'Induction', price: '₹3000', image: './img/Induction.jpg' },
        { name: 'Jacket', price: '₹4000', image: './img/Cloth1.jpg' },
        { name: 'T-Shirt', price: '₹2500', image: './img/Cloth2.jpg' },
        { name: 'Table', price: '₹5000', image: './img/Table.jpg' }
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;

        const productTitle = document.createElement('h3');
        productTitle.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        const productButton = document.createElement('button');
        productButton.textContent = 'Add to Cart';
        productButton.onclick = () => addToCart(product.name, product.price);

        productDiv.appendChild(productImage);
        productDiv.appendChild(productTitle);
        productDiv.appendChild(productPrice);
        productDiv.appendChild(productButton);

        productList.appendChild(productDiv);
    });

    updateCart();
});

let cart = [];

function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCart();
    alert(`${productName} for ${productPrice} has been added to your cart.`);
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - ${item.price}`;
        cartItems.appendChild(listItem);

        const price = parseInt(item.price.replace('₹', ''));
        total += price;
    });

    document.getElementById('total-price').textContent = `Total: ₹${total}`;
    document.getElementById('cart').style.display = cart.length ? 'block' : 'none';
}

function checkout() {
    alert(`Total amount to be paid: ₹${cart.reduce((acc, item) => acc + parseInt(item.price.replace('₹', '')), 0)}. Thank you for your purchase!`);
    cart = [];
    updateCart();
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const concatenatedMessage = `Thank you, ${name}! We have received your message: "${message}". We will contact you at ${email}.`;
    alert(concatenatedMessage);
});