function myFunc(){
    const mydrop = document.getElementById('myDropdown');
    mydrop.classList.toggle('show');
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        const dropContent = document.getElementsByClassName('dropdown-content');
        for(let i = 0; i < dropContent.length; i++){
            let drop = dropContent[i];
            if(drop.classList.contains('show')){
                drop.classList.remove('show');
            }
        }
    }
    
}