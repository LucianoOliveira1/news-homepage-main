let menu = document.querySelector('.menu');
let icon = document.querySelector('.menu_icon');
let shadow = document.querySelector('.menu_shadow');

let isOpen = false;

function menuOpenClose(){
    if(isOpen == true){
        isOpen = false;
        icon.style = "background-image: url(assets/images/icon-menu.svg)";
        menu.classList.remove('open');
        shadow.style.display = 'none';
    }
    else if(isOpen == false){
        isOpen = true;
        icon.style = "background-image: url(assets/images/icon-menu-close.svg)";
        menu.classList.add('open');
        shadow.style.display = 'block';
    }
}