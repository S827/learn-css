
function myFunc(event, cityName){
    // set display to  none to tabCotnent
    const tabContent = document.getElementsByClassName('tabContent');
    for(let i = 0; i < tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }
    // remove active class from tablink
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active', '');
    }
    // set display to block to tabConent
    document.getElementById(cityName).style.display = 'block';
    // add active class to tablink
    event.currentTarget.className += ' active';
}
document.getElementById('defaultTab').click();