document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.btn');
  const home = document.querySelector('.home');
  const pay = document.querySelector('.pay');
  const imagesContainer = document.getElementById('images');

  const orderButtons = document.querySelectorAll('.order');
  const amountBox = document.getElementById('amount');
  const acceptButton = document.querySelector('.Accept');
  const declineButton = document.querySelector('.Decline');
  const inputArea = document.querySelector('.typing-container');

  let selectedImage = null;

  // Scroll to top for .btn and .home
  if (button) {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  if (home) {
    home.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll to bottom for .pay
  if (pay) {
    pay.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }

  // Scroll to bottom when any ORDER button is clicked
  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedImage = button.previousElementSibling;

      const price = button.getAttribute('data-price'); // Get price suggestion

      inputArea.scrollIntoView({ behavior: 'smooth' });

      amountBox.value = price || '';
      amountBox.placeholder = 'ENTER YOUR AMOUNT HERE';
    });
  });

  // Reveal images when 'Check Out Our Products' button is clicked
  if (button && imagesContainer) {
    button.addEventListener('click', function () {
      imagesContainer.classList.add('clear');
    });
  }

  // ACCEPT button logic
  if (acceptButton) {
    acceptButton.addEventListener('click', () => {
      const enteredAmount = amountBox.value.trim();

      if (enteredAmount !== '' && !isNaN(enteredAmount)) {
        amountBox.value = '';
        amountBox.placeholder = '✅ Order accepted!';

        if (selectedImage) {
          const orderBtn = selectedImage.nextElementSibling;
          selectedImage.scrollIntoView({ behavior: 'smooth' });

          orderBtn.style.backgroundColor = 'green';
          orderBtn.textContent = '✔ ORDERED';

          setTimeout(() => {
            amountBox.placeholder = 'ENTER YOUR AMOUNT HERE';
          }, 4000);
        }
      } else {
        amountBox.value = '';
        amountBox.placeholder = '❌ Enter a valid number to proceed!';
        setTimeout(() => {
          amountBox.placeholder = 'ENTER YOUR AMOUNT HERE';
        }, 4000);
      }
    });
  }

  // DECLINE button logic
  if (declineButton) {
    declineButton.addEventListener('click', () => {
      amountBox.value = '';
      amountBox.placeholder = '❌ Order cancelled';

      if (selectedImage) {
        const orderBtn = selectedImage.nextElementSibling;
        selectedImage.scrollIntoView({ behavior: 'smooth' });

        orderBtn.style.backgroundColor = 'red';
        orderBtn.textContent = '✖ CANCELLED';

        setTimeout(() => {
          orderBtn.style.backgroundColor = '';
          orderBtn.textContent = 'ORDER';
        }, 4000);
      }

      setTimeout(() => {
        amountBox.placeholder = 'ENTER YOUR AMOUNT HERE';
      }, 4000);
    });
  }
});
