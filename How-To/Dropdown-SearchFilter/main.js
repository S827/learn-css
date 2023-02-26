function myFunc(){
    document.getElementById('dropdown').classList.toggle('show');
}
function filterFunc(){
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const a = document.getElementsByTagName('a');
    for(let i = 0; i < a.length; i++){
        if(a[i].textContent.toUpperCase().indexOf(filter) > -1){
            a[i].style.display = '';
        } else{
            a[i].style.display = 'none';
        }
    }
}