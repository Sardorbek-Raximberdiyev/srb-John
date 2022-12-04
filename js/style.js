const elsHeaderButton = document.querySelectorAll('.js-button');
const elHeader = document.querySelector('.site-header');


elsHeaderButton.forEach(function (elbutton) {
  elbutton.addEventListener('click', function () {
    elHeader.classList.toggle('site-header--open');
  });
})
