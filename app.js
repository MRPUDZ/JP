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
  const aboutMenu = document.querySelector('#about-page');
  const skillsMenu = document.querySelector('#skills-page');
  const experienceMenu = document.querySelector('#experience-page');
  const volunteeringMenu = document.querySelector('#volunteering-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1300) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    skillsMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2200) {
    skillsMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    experienceMenu.classList.remove('highlight');
    return;
  }else if (window.innerWidth > 960 && scrollPos < 2700) {
    skillsMenu.classList.remove('highlight');
    experienceMenu.classList.add('highlight');
    volunteeringMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos <= 3000) {
    experienceMenu.classList.remove('highlight');
    volunteeringMenu.classList.add('highlight');
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
