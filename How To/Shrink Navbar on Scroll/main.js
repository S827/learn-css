window.onscroll = function(){
    const nav = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        nav.style.padding = '20px 10px';
        logo.style.fontSize = '25px';
    } else {
        nav.style.padding = '90px 10px';
        logo.style.fontSize = '35px';
    }
}