function myFunc(event, cityName){
    // set display none
    const tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    // remove active class
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active', '');
    }
    // set display block
    document.getElementById(cityName).style.display = 'block';
    // set tactive class
    event.currentTarget.className += ' active';
}