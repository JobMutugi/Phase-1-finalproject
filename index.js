document.addEventListener('DOMContentLoaded', function() {
  
  const productsContainer = document.getElementById('products-container');
  const amountInput = document.getElementById('amount');
  const viewProductsBtn = document.querySelector('.view-products');
  const checkoutBtn = document.querySelector('.checkout-btn');
  const acceptBtn = document.querySelector('.accept');
  const declineBtn = document.querySelector('.decline');
  const homeBtn = document.querySelector('.home');
  
  let selectedProduct = null;

  // Products data
  const furnitureProducts = [
    { id: 1, name: "Modern Sofa", price: 15000, image: "pexels-pixabay-276534.jpg" },
    { id: 2, name: "Luxury Chair", price: 22000, image: "pexels-pixabay-276583.jpg" },
    { id: 3, name: "Comfortable Sofa", price: 20000, image: "pexels-donaldtong94-133919.jpg" },
    { id: 4, name: "Coffee Table", price: 7000, image: "pexels-eric-mufasa-578798-1350789.jpg" },
    { id: 5, name: "Luxury Sofa", price: 42000, image: "pexels-fotoaibe-1571460.jpg" },
    { id: 6, name: "Sofa", price: 23000, image: "pexels-olly-3757055.jpg" },
    { id: 7, name: "Sofa", price: 20000, image: "phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg" },
    { id: 8, name: "Set of Sofa", price: 39000, image: "pexels-eurooo-1090092.jpg" },
    { id: 9, name: "Modern Sofa", price: 25000, image: "pexels-heyho-6782424.jpg" },
    { id: 10, name: "Comfortable Sofa", price: 17000, image: "pexels-keeganjchecks-10032378.jpg" },
    { id: 11, name: "Coffee Table", price: 6000, image: "jake-goossen-EaexzaHDN98-unsplash.jpg" },
    { id: 12, name: "Dinning Table", price: 32500, image: "jean-philippe-delberghe-F0DdaYs0EeQ-unsplash.jpg" },
    { id: 13, name: "Dinning Table", price: 38000, image: "don-kaveen-NFbwes_e-jI-unsplash.jpg" },
    { id: 14, name: "Dinning Table", price: 30000, image: "collov-home-design-v9096DgeVeA-unsplash.jpg" },
    { id: 15, name: "Coffee Table", price: 5500, image: "angelina-cXmER3VNxUA-unsplash.jpg" },
    { id: 16, name: "Pillow", price: 1500, image: "pexels-anna-nekrashevich-6603475.jpg" },
    { id: 17, name: "Pillow", price: 2500, image: "personalgraphic-com-BlPj9WDIVlA-unsplash.jpg" },
    { id: 18, name: "Pillow", price: 3000, image: "pexels-atomlaborblog-776120.jpg" }
  ];

  // Function to render images
  function showAllProducts() {
    productsContainer.innerHTML = '';
    
    furnitureProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className = 'product';
      
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}"> <!-- No 'images/' prefix -->
        <h3>${product.name}</h3>
        <p>KES ${product.price.toLocaleString()}</p>
        <button class="order-btn" data-id="${product.id}">Order Now</button>
      `;
      
      productsContainer.appendChild(productDiv);
    });

    // Add event listeners to the buttons
    document.querySelectorAll('.order-btn').forEach(button => {
      button.addEventListener('click', function() {
        const productId = parseInt(this.getAttribute('data-id'));
        selectedProduct = furnitureProducts.find(item => item.id === productId);
        
        if (selectedProduct) {
          selectedProduct.buttonElement = this;
          amountInput.value = selectedProduct.price;
          document.querySelector('.payment').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Event Listeners
  viewProductsBtn?.addEventListener('click', () => {
    showAllProducts();
    productsContainer.scrollIntoView({ behavior: 'smooth' });
  });

  checkoutBtn?.addEventListener('click', () => {
    document.querySelector('.payment').scrollIntoView({ behavior: 'smooth' });
  });

  homeBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  acceptBtn?.addEventListener('click', () => {
    if (!selectedProduct) {
      amountInput.placeholder = "Please select a product first!";
      amountInput.value = "";
      return;
    }
    
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount)) {
      amountInput.placeholder = "Please enter a valid number!";
      amountInput.value = "";
      return;
    }
    
    updateButtonStatus(selectedProduct.buttonElement, "ORDERED", "#4CAF50", "white");
    
    setTimeout(() => {
      resetButton(selectedProduct.buttonElement);
      amountInput.value = "";
    }, 6000);
  });

  declineBtn?.addEventListener('click', () => {
    if (!selectedProduct) return;
    
    updateButtonStatus(selectedProduct.buttonElement, "CANCELLED", "#f44336", "white");
    
    setTimeout(() => {
      resetButton(selectedProduct.buttonElement);
      amountInput.value = "";
    }, 6000);
  });

  function updateButtonStatus(button, text, bgColor, textColor) {
    button.textContent = text;
    button.style.background = bgColor;
    button.style.color = textColor;
    button.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function resetButton(button) {
    button.textContent = "Order Now";
    button.style.background = "#FFC107";
    button.style.color = "black";
  }

  showAllProducts();
});