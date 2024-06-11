function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.details-container');
    const itemWidth = items[0].clientWidth;
    const visibleItems = 3; // Number of items visible at a time
    let index = 0;
  
    nextButton.addEventListener('click', () => {
      if (index < items.length - visibleItems) {
        index++;
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
      }
    });
  
    prevButton.addEventListener('click', () => {
      if (index > 0) {
        index--;
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
      }
    });
  });