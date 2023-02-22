const nav = document.getElementById('myNav');
const main = document.getElementById('main');
function openNav(){
    nav.style.width = '250px';
    main.style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
}
function closeNav(){
    nav.style.width = 0;
    main.style.marginLeft = 0;
    document.body.style.backgroundColor = 'white';
}