const sidenav = document.getElementById('mySidenav');
const main = document.getElementById('main');
function openNav(){
    sidenav.style.width = '250px';
    main.style.paddingLeft = '250px';
}
function closeNav(){
    sidenav.style.width = '0px';
    main.style.paddingLeft = '0px';
}