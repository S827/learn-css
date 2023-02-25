function myFunc(evt, name){
    const tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active', '');
    }
    document.getElementById(name).style.display = 'block';
    evt.currentTarget.className += ' active';
}