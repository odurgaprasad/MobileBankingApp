'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// /////////////////////////////////////////

// // selecting,creaing,and deleting

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allsections = document.querySelectorAll('.section');
// console.log(allsections);

// const allbuttons = document.getElementsByTagName('button');
// console.log(allbuttons);

// console.log(document.getElementsByClassName('btn'));

// //creating and inserting elements
// // .insertadjacentHTML

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent =
//   'we use cokkied for improved functionality and analytics.';
// message.innerHTML =
//   'we use cokkied for improved functionality and analytics.<button class="btn btn--close--cookie">Got it!</button>';

// // header.prepend(message);
// header.append(message);
// // header.append(message.cloneNode(true));
// // header.before(message);
// // header.after(message);

// //Deleting elements:

// document
//   .querySelector('.btn--close--cookie')
//   .addEventListener('click', function () {
//     message.parentElement.removeChild(message);
//   });

// //////////////////////////////////////////////////////////

// //Styles

// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.color);
// console.log(message.style.BackgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt = 'Beautiful minimlist logo';

// //Non-standard

// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// //Data Attributes

// console.log(logo.dataset.versionNumber);

// //classes

// console.log(logo.classList.add('c'));
// console.log(logo.classList.remove('c'));
// console.log(logo.classList.toggle('c'));
// console.log(logo.classList.contains('c'));

// // don't use

// logo.className = 'jonas';

////////////////////////////////////////////////////////////

// smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coods = section1.getBoundingClientRect();
  // console.log(s1coods);

  // console.log(e.target.getBoundingClientRect());

  // console.log('Current scroll (X/Y)', window.pageXOffset, pageYOffset);
  // console.log(
  //   'height/width viewport',
  //   document.documentElement.clientHeight,
  //   document.documentElement.clientWidth
  // );

  /////// example-1:///////

  // window.scrollTo(
  //   s1coods.left + window.pageXOffset,
  //   s1coods.top + window.pageYOffset
  // );

  /////example-2://////

  // window.scrollTo({
  //   left: s1coods.left + window.pageXOffset,
  //   top: s1coods.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

/////////////////////////////////////////////////////////
//Event propagation

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINk', e.target, e.currentTarget);
//   console.log(e.target === this);

//   //stop propagation
//   // e.stopPropagation;
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true
// );

//////////////////////////////////////////////////////////////////////////////////

//page Navigation
// const sectionList = document.querySelectorAll('.nav__link').forEach((el) => {
//   el.addEventListener('click', function (e) {
//     // e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });
//Event Delegation

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// //////////////////////////////////////////////////////////

// //Dom Traversing

// const h1 = document.querySelector('h1');

// //Going downwards:child
// console.log(h1.querySelector('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'orange';
// h1.lastElementChild.style.color = 'orangered';

// //Going upwards:Parent

// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// //Going sideways:siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

/////////////////////////////////////////////////
//Building a Tabbed Component:

const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const content = document.querySelectorAll('.operations__content');

// console.log(tabs, tabsContainer, content);

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  //guard clause
  if (!clicked) return;
  //remove the classList Elements
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  content.forEach((c) => c.classList.remove('operations__content--active'));
  // activate tab
  clicked.classList.add('operations__tab--active');

  // activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});
////////////////////////////////////////////////
////////////////////////////////////////////////

// passing Arguments to event handlers

const passHandler = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
};

const navContainer = document.querySelector('.nav');

navContainer.addEventListener('mouseover', passHandler.bind(0.5));
// {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach((el) => {
//       if (el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

navContainer.addEventListener('mouseout', passHandler.bind(1));
// {
// if (e.target.classList.contains('nav__link')) {
//   const link = e.target;
//   const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//   const logo = link.closest('.nav').querySelector('img');
//   siblings.forEach((el) => {
//     if (el !== link) el.style.opacity = 1;
//   });

//   logo.style.opacity = 1;
// }
// });

///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

// Sticky Navigation

// const initialCoords = navContainer.getBoundingClientRect();

// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCoords.top)
//     navContainer.classList.add('sticky');
//   else navContainer.classList.remove('sticky');
// });

//////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

// A Better way: The intersection observer API

// const obsCallbacks = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: 0.1,
// };

// const observer = new IntersectionObserver(obsCallbacks, obsOptions);
// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = navContainer.getBoundingClientRect().height;

// console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) navContainer.classList.add('sticky');
  else navContainer.classList.remove('sticky');
};

const headerObs = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObs.observe(header);

/////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////

//Revealing Elements on scroll

const allsections = document.querySelectorAll('.section');

const revealingSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const revealingHandler = new IntersectionObserver(revealingSection, {
  root: null,
  threshold: 0.15,
});

allsections.forEach((section) => {
  revealingHandler.observe(section);
  section.classList.add('section--hidden');
});

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//  lazy Loading images

const imgTarget = document.querySelectorAll('img[data-src]');

const loadingImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgHandler = new IntersectionObserver(loadingImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTarget.forEach((img) => imgHandler.observe(img));

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//Building slider Component:part 1
