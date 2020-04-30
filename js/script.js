let popap = document.querySelector('.modal-login');
let link = document.querySelector('.login-link');
let mapBtn = document.querySelector('.map-button');
let modalMap = document.querySelector('.modal-map');
let login = popap.querySelector('[name=login]');
let overlayPopap = document.querySelector('.modal-overlay');
let closePopaps = document.querySelectorAll('.modail-close');

link.addEventListener("click", function (evt) {
    evt.preventDefault();
popap.classList.add('modal-show');
// overlayPopap.classList.add('modal-show');
login.focus();
});

mapBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add('modal-show');
    overlayPopap.classList.add('modal-show');
});

overlayPopap.addEventListener("click", function () {
    overlayPopap.classList.remove('modal-show');
    popap.classList.remove('modal-show');
    modalMap.classList.remove('modal-show');
})
for (let close of closePopaps) {
   close.addEventListener("click", function () {
    popap.classList.remove('modal-show');
    modalMap.classList.remove('modal-show');
    overlayPopap.classList.remove('modal-show');
   }) 
};

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27) {
        evt.defaultPrevented();
    }
    if (popap.classList.contains('modal-show'))
    popap.classList.remove('modal-show'); // Попап логина должен закрываться на Esc
})