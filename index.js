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

document.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('.btn');
  const imagesContainer = document.getElementById('images');

  button.addEventListener('click', function () {
    imagesContainer.classList.add('clear');
  });
});
