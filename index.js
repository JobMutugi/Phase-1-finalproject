const button = document.querySelector('.btn');

if (button) {
    button.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5502/products.html';
    });
}

const home = document.querySelector('.home');
if (home) {
    home.addEventListener('click', () => {
        window.location.href = 'http://127.0.0.1:5502/index.html';
    });
}
