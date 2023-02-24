let prevScrollPos = window.pageYOffset;

window.onscroll = function(){
    let currScrollPos = window.pageYOffset;
    const nav = document.getElementById('nav');
    if(prevScrollPos > currScrollPos){
        nav.style.top = 0;
    } else {
        nav.style.top = '-50px';
    }
    prevScrollPos = currScrollPos;
}