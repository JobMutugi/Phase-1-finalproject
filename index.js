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



function button1() {
  const acceptBtn = document.querySelector('.Accept');
  const amountInput = document.getElementById('amount');

  if (acceptBtn && amountInput) {
    acceptBtn.addEventListener('click', function () {
      const amount = amountInput.value.trim();

      if (amount !== '' && !isNaN(amount)) {
        amountInput.value = '';
        amountInput.placeholder = '✅ Your order has been processed';
      } else {
        amountInput.value = '';
        amountInput.placeholder = '❌ Please enter a valid number';
      }

      setTimeout(() => {
        amountInput.placeholder = 'ENTER YOUR AMOUNT HERE';
      }, 4000);
    });
  }
}

function button2() {
  const declineBtn = document.querySelector('.Decline');
  const amountInput = document.getElementById('amount');

  if (declineBtn && amountInput) {
    declineBtn.addEventListener('click', function () {
      amountInput.value = '';
      amountInput.placeholder = '❌ Your order has been declined';

      setTimeout(() => {
        amountInput.placeholder = 'ENTER YOUR AMOUNT HERE';
      }, 4000);
    });
  }
}

button1();
button2();
