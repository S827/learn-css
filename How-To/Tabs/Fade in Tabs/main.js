function myFunc(event, cityName){
    // set tabcontent display to none
    const tabContent = document.getElementsByClassName('tab-content');
    for(let i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }
    // remove active class from tablinks
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i  < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active', '');
    }
    // set tabconten to display
    document.getElementById(cityName).style.display = 'block';
    // add active class to tablink
    event.currentTarget.className += ' active';
}