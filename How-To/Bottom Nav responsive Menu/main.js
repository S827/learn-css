function myFunc(){
    const nav = document.getElementById('bNav');
    if(nav.className === 'bnav'){
        nav.className += ' res';
    } else {
        nav.className = 'bnav';
    }
}