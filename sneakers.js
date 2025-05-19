// Sneaker hub

// Image slide show

// Select the main image and all thumbnail images
const bigImage = document.querySelector('.myimage');
const thumbnails = document.querySelectorAll('.miniimage');

thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        // Get the larger image URL from the data attribute
        const bigImageUrl = thumbnail.getAttribute('data-big');
        
        // Update the main image's src attribute
        bigImage.src = bigImageUrl;

        // Optional: Add an active class to the clicked thumbnail
        thumbnails.forEach((thumb) => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});


// changing image without thumbnail

const images = ['images/image-product-1.jpg', 'images/image-product-2.jpg', 'images/image-product-3.jpg', 'images/image-product-4.jpg'];
let currentSlide = 0;

const bigImage1 = document.querySelector('.myimage');
const nextBtn = document.querySelector('.next-1');
const prevBtn = document.querySelector('.prev-1');

function updateImage() {
  bigImage1.src = images[currentSlide];
}

nextBtn.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % images.length;
  updateImage();
});

prevBtn.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + images.length) % images.length;
  updateImage();
});

// The counter 

const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const value = document.querySelector('.value');

let counter = 0;
minus.addEventListener("click", () => {
if (counter > 0){
    counter--;
    value.textContent = counter;
}
});
 
plus.addEventListener("click", () =>{
    counter++;
    value.textContent = counter;
});



// Access lightbox
const lightBox = document.querySelector('.lightbox');
const closeButton = document.querySelector('.close');

closeButton.addEventListener("click", ()=>{
    lightBox.style.display = "none";
});

bigImage.addEventListener("click", () => {
    if (window.innerWidth < 480) {
        lightBox.style.display = "none"; 
    }
    else {
        lightBox.style.display = "flex";
    }
});
//Lightbox Image control

const bigImage_2 = document.querySelector('.myimage2');
const thumbnails_2 = document.querySelectorAll('.miniimage-2');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

thumbnails_2.forEach((thumbnail) => {
    thumbnail.addEventListener('click', () => {
        const bigImageUrl = thumbnail.getAttribute('data-big');
        bigImage_2.src = bigImageUrl;

        thumbnails_2.forEach((thumb) => thumb.classList.remove('active'));
        thumbnail.classList.add('active');
    });
});
let currentIndex = 0;
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % thumbnails_2.length;
    const bigImageUrl = thumbnails_2[currentIndex].getAttribute('data-big');
    bigImage_2.src = bigImageUrl;

    thumbnails_2.forEach((thumb) => thumb.classList.remove('active'));
    thumbnails_2[currentIndex].classList.add('active');
});
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + thumbnails_2.length) % thumbnails_2.length;
    const bigImageUrl = thumbnails_2[currentIndex].getAttribute('data-big');
    bigImage_2.src = bigImageUrl;

    thumbnails_2.forEach((thumb) => thumb.classList.remove('active'));
    thumbnails_2[currentIndex].classList.add('active');
});

//Add to cart

const addToCartButton = document.querySelector('.add-to-cart');
const cartCount = document.querySelector('.cart-count');
const cartCountInner = document.querySelector('.cart-count-inner');
const totalPrice = document.querySelector('.total-price');
const cartInfo = document.querySelector('.cart-info');
const cartInfoText = document.querySelector('.counter-zero');
const dropDown = document.querySelector('.dropdown');
const cartIcon = document.querySelector('.cart-icon');
const cartImage = document.querySelector('.cart-img');

let price = 125.00;
function calculateTotalPrice() {
    return price * Number(value.textContent); // Convert value.textContent to a number
}
let totalPriceValue = calculateTotalPrice();

addToCartButton.addEventListener('click', () => {
    totalPriceValue = calculateTotalPrice(); // Recalculate total price here
    cartCount.textContent = counter;
    cartCount.style.display = "flex";
    dropDown.style.display = "none";
    if (counter == "0") {                                                           
        cartCount.style.display = "block";
        dropDown.style.display = "none";
        cartInfo.style.display = "none";
    } else {
        cartCount.style.display = "block";
        cartCountInner.textContent = counter;
        totalPrice.textContent = `$${totalPriceValue}.00`;
        totalPrice.style.fontSize = "1rem";
        totalPrice.style.fontWeight = "700";
        totalPrice.style.color = "black";
        cartInfoText.style.display = "none";
        cartInfo.style.display = "flex";
    }
});

// Cart image display dropdown
cartImage.addEventListener('click', () => {
    if(counter == "0"){
    cartInfoText.style.display = "flex";
     cartInfoText.textContent = "Your cart is empty";
      dropDown.style.display = "block";
      cartInfo.style.display = "none"
    }
      else{
        cartInfoText.style.display = "none";
        dropDown.style.display = "block";
        cartCount.style.display = "block";
      }
    }
    );

    
  // delete cart item
const deleteButton = document.querySelector('.delete');
if (deleteButton) {
deleteButton.addEventListener('click', () => {
    cartCount.style.display = "none";
    cartInfo.style.display = "none";
    dropDown.style.display = "none";
    counter = 0;
    value.textContent = counter;
});
}


//button click effect 
const button = document.querySelector('.add-to-cart');
button.addEventListener('click', () => {
    button.classList.add('clicked');
    setTimeout(() => {
        button.classList.remove('clicked');
    }, 300); 
});

// scroll event listener for the top navigation bar
window.addEventListener('scroll', function() {
    const topNav = document.querySelector('.top-nav');
    if (window.scrollY > 0) {
        topNav.classList.add('scrolled');
    } else {
        topNav.classList.remove('scrolled');
    }
});

// Responsive navigation menu
const menuButton = document.querySelector('.vertical-contrl');
const closeButtonNav = document.querySelector('.close2');
const navMenu = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navMenu.style.display = 'flex';
});
closeButtonNav.addEventListener('click', () => {
    navMenu.style.display = 'none';
});


// Close the dropdown when clicking outside of it
window.addEventListener('click', (event) => {
    if (!cartImage.contains(event.target) && !dropDown.contains(event.target)) {
        dropDown.style.display = 'none';
    }
});