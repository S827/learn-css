window.onscroll = function(){
    const nav = document.getElementById('navbar');
    let sticky = nav.offsetTop;
    if(window.pageYOffset >= sticky){
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}