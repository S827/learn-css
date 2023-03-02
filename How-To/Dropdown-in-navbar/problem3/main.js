function myFunc1(){
    document.getElementById('myDrop1').classList.toggle('show');
}
function myFunc2(){
    document.getElementById('myDrop2').classList.toggle('show');
}
function myFunc3(){
    document.getElementById('myDrop3').classList.toggle('show');
}
window.onclick = function(e){
    if(!e.target.matches('.dropbtn')){
        let x = document.getElementById('myDrop1');
        let y = document.getElementById('myDrop2');
        let z = document.getElementById('myDrop3');
        if(x.classList.contains('show') || y.classList.contains('show') || z.classList.contains('show')){
            x.classList.remove('show');
            y.classList.remove('show');
            z.classList.remove('show');
        }
    }
}