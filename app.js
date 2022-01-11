// message when user enter website - show and delete
setTimeout(message,1000);

function message() {
    const page = document.body;
    const div = document.createElement('div');
    div.innerHTML = '<p class="message">Design borrower from w3school!</p>';
    div.setAttribute('class', 'message-container');
    page.appendChild(div);
}

setTimeout(deleteMessage, 5000);

function deleteMessage() {
    const div = document.querySelector('.message-container');
    div.style.display = 'none';
}

// carousel - header section

const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');


let index = 1;

let interval = setInterval(run,4000);

function run() {
    const windowWidth = window.innerWidth;
    if(index > carouselItems.length -1) {
        index = 0;
    }
    carouselContainer.style.transform = `translateX(-${windowWidth * index}px)`;
    index++;
}

// mobile menu
const hamburger = document.querySelector('.hamburger-icon');
const closeBtn = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile');


hamburger.addEventListener('click', () => {
    mobileMenu.style.transform = `translateX(0%)`;
    hamburger.style.display = 'none';
})

closeBtn.addEventListener('click', () => {
    mobileMenu.style.transform = `translateX(-100%)`;
    hamburger.style.display = 'block';
})

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.transform = `translateX(-100%)`;
    hamburger.style.display = 'block';

    })
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 600) {
        hamburger.style.display = 'none';
    } else {
        hamburger.style.display = 'block';
    }
     
})

