const acc = document.getElementsByClassName('accordion');

for(let i = 0; i < acc.length; i++){
    console.log('hi');
    acc[i].addEventListener('click', () => {
        acc[i].classList.toggle('active');

        let panel = acc[i].nextElementSibling;
        console.log('hi');
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else{
            panel.style.maxHeight = panel.scrollHeight + 'px';
            console.log('hi');
        }
    })
}