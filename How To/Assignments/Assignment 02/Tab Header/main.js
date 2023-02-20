function myFunc(evt, color){
    const tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].style.backgroundColor = '';
    }
    document.getElementById(color).style.display = 'block';
    document.getElementById(color).style.backgroundColor = color;
    evt.style.backgroundColor = color;
}
document.getElementById('def').click();