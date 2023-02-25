function myFunc(name, evt, color){
    // set display to none
    const tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    // set bgcolor to ''
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].style.backgroundColor = '';
    }
    // set display to block and change bgcolor
    document.getElementById(name).style.display = 'block';
    document.getElementById(name).style.backgroundColor = color;
    // set button color same
    evt.style.backgroundColor = color;
}
document.getElementById('deftab').click();