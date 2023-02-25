const sidenav = document.getElementById('myNav');
const main = document.getElementById('main-page');

function openNav(){
    sidenav.style.width = '250px';
    main.style.marginLeft = '250px';
}
function closeNav(){
    sidenav.style.width = 0;
    main.style.marginLeft = 0;
}