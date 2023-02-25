const sidenav = document.getElementById('mySidenav');
const main = document.getElementById('main');
function openNav(){
    sidenav.style.width = '250px';
    main.style.paddingLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
}
function closeNav(){
    sidenav.style.width = '0px';
    main.style.paddingLeft = '0px';
    document.body.style.backgroundColor = 'white';
}