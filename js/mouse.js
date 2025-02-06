const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
  const cursorPosition = {
    top: e.pageY - 10 + 'px',
    left: e.pageX - 10 + 'px',
  };
  
  cursor.setAttribute('style', `top: ${cursorPosition.top}; left: ${cursorPosition.left};`);
});

document.addEventListener('click', () => {
  cursor.classList.add('expand');

  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500);
});
