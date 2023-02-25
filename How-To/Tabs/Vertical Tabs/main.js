const defaulttab = document.getElementById('defaultTab');
defaulttab.click();

function myFunc(event, query){
    // set display to none
    const tabcontent = document.getElementsByClassName('tabcontent');
    for(let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display = 'none';
    }
    // remove active class
    const tablink = document.getElementsByClassName('tablink');
    for(let i = 0; i < tablink.length; i++){
        tablink[i].className = tablink[i].className.replace('active', '');
    }
    // set display to block
    document.getElementById(query).style.display = 'block';
    // add active class
    event.currentTarget.className += ' active';
}