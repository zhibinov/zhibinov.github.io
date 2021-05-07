let closePopUp = document.querySelector('.b-pop-up__close');
let openPopUp = document.querySelectorAll('.open_pop-up');
let popUp = document.querySelector('.b-pop-up');
openPopUp.forEach(element => linkUp(element));
function linkUp(item) {
    item.addEventListener('click', function (event) {
        popUp.style.display = 'flex';
    });
}
closePopUp.addEventListener('click', function (event) {
    popUp.style.display = 'none';
});
