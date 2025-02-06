const loadingElement = document.querySelector('#loading');
loadingElement.style.opacity = 1;

setTimeout(() => {
  loadingElement.style.opacity = 0;
}, 7600);


const webcoderskullElement = document.querySelector('.webcoderskull');
webcoderskullElement.style.left = '110px';
webcoderskullElement.style.opacity = 0;

setTimeout(() => {
  webcoderskullElement.style.left = '0';
  webcoderskullElement.style.opacity = 1;
}, 1000);


const textLineElement = document.querySelector('.text--line');
textLineElement.style.top = '90px';
textLineElement.style.opacity = 0;

setTimeout(() => {
  textLineElement.style.top = '-10px';
  textLineElement.style.opacity = 1;
}, 2000);
