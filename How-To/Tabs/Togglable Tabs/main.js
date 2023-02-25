function openCity(event, cityName){
    // Get all the elements with classname tab-contents and hide them
    const tabcontent = document.getElementsByClassName('tab-contents');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class 'tablinks'and remove the class active
    const tablink = document.getElementsByClassName('tablinks');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active', '');
    }

    // show the current tab, and add an active  class to the button that opened the tab
    document.getElementById(cityName).style.display = 'block';
    event.currentTarget.className += ' active';
}