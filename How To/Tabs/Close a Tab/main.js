const defaultTab = document.getElementById('defaultTab');
defaultTab.click();



function myFunc(event, cityName){
    // set display to none to tabContent
    const tabContent = document.getElementsByClassName('tabContent');
    for(let i = 0; i< tabContent.length; i++){
        tabContent[i].style.display = 'none';
    }
    // removeactive class from tablink
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active', '');
    }
    // set display to block to tabContent
    document.getElementById(cityName).style.display = 'block';
    // add active class to tablink
    event.currentTarget.className += ' active';
}