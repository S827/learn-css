function myFunc(){
    const drop = document.getElementById('mydrop');
    drop.classList.toggle('show');
}
window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        const mydrop = document.getElementsByClassName('drop-content');
        for(let i = 0; i < mydrop.length; i++){
            if(mydrop[i].classList.contains('show')){
                mydrop[i].classList.remove('show');
            }
        }
    }
}