document.addEventListener('DOMContentLoaded', function () {
  // Scroll to top when .btn is clicked
  const button = document.querySelector('.btn');
  if (button) {
    button.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll to top when .home is clicked
  const home = document.querySelector('.home');
  if (home) {
    home.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Scroll to bottom when .pay is clicked
  const pay = document.querySelector('.pay');
  if (pay) {
    pay.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  }

  // Scroll to bottom when any .order button is clicked
  const orderButtons = document.querySelectorAll('.order');
  orderButtons.forEach(order => {
    order.addEventListener('click', () => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
  });

  // Reveal images when check out our products is clicked
  const imagesContainer = document.getElementById('images');
  if (button && imagesContainer) {
    button.addEventListener('click', function () {
      imagesContainer.classList.add('clear');
    });
}

  // Ordering logic
  let selectedImage = null;

  const amountBox = document.getElementById('amount');
  const acceptButton = document.querySelector('.Accept');
  const declineButton = document.querySelector('.Decline');
  const inputArea = document.querySelector('.typing-container');

  if (!orderButtons.length || !amountBox || !acceptButton || !declineButton || !inputArea) return;

  // When you click an ORDER button
  orderButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedImage = button.previousElementSibling; 

      inputArea.scrollIntoView({ behavior: 'smooth' }); // scroll to where the product has been ordered

      amountBox.value = '';
      amountBox.placeholder = 'ENTER YOUR AMOUNT HERE';
    });
  });

  // When you click ACCEPT
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

  // When you click DECLINE
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
});
