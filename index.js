const button = document.querySelector('.btn');

if (button) {
    button.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


const home = document.querySelector('.home');
if (home) {
    home.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


const pay = document.querySelector('.pay');
if (pay) {
    pay.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });


}

const orderButtons = document.querySelectorAll(".order");

orderButtons.forEach(order => {
    order.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
});


document.addEventListener('DOMContentLoaded', function () {
  const imagesContainer = document.getElementById('images');
  const revealButton = document.querySelector('.btn'); 

  revealButton.addEventListener('click', function () {
    imagesContainer.classList.add('clear');
  });
});
