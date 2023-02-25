window.onscroll = function() {scrollFunc()};
function scrollFunc(){
    const nav = document.getElementById('nav');
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        nav.style.top = 0;
    } else {
        nav.style.top = '-50px';
    }
}