function myFunc(){
    const drop = document.getElementById('mydrop');
    drop.classList.toggle('show');
}

window.onclick = function(event) {
    console.log(1);
    if(!event.target.matches('.dropbtn')){
        const drop = document.getElementsByClassName('drop-content');
        for(let i = 0; i < drop.length; i++){
            if(drop[i].classList.contains('show')){
                console.log(1);
                drop[i].classList.remove('show');
            }
        }
    }
}