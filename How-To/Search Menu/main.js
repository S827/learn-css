function myFunc(){
    const input = document.getElementById('mySearch');
    const filter= input.value.toUpperCase();
    const ul = document.getElementById('myMenu');
    const li = ul.getElementsByTagName('li');

    // loop through all list items, and hide those who doesn;t match the query
    for(let i = 0; i < li.length; i++){
        const a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        } else{
            li[i].style.display = 'none';
        }
    }
}