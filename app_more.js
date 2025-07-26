const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const educationMenu = document.querySelector('#education-page');
  const experiencesMenu = document.querySelector('#experiences-page');
  const achievementsMenu = document.querySelector('#achievements-page');
  const hobbiesMenu = document.querySelector('#hobbies-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 300) {
    homeMenu.classList.add('highlight');
    educationMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 825) {
    educationMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    experiencesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 3750) {
    experiencesMenu.classList.add('highlight');
    educationMenu.classList.remove('highlight');
    achievementsMenu.classList.remove('highlight');
    return;
  }else if (window.innerWidth > 960 && scrollPos < 5000) {
    experiencesMenu.classList.remove('highlight');
    achievementsMenu.classList.add('highlight');
    hobbiesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos <= 5500) {
    achievementsMenu.classList.remove('highlight');
    hobbiesMenu.classList.add('highlight');
    return;
  }

  if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
