function myFunc(cityName, elmnt, color){
    // hide all elements with class tabcontent
    const tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    // remove the bgcolor of all buttons
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].style.backgroundColor = '';
    }
    // show the specific tab content and set the bgcolor
    document.getElementById(cityName).style.display = 'block';
    document.getElementById(cityName).style.backgroundColor = color;
    // add the specific color to button used to open the tabcontent
    elmnt.style.backgroundColor = color;
}
const defaultTab = document.getElementById('defaultOpen');
defaultTab.click();