const acc = document.getElementsByClassName('accordion');
for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', () => {
        acc[i].classList.toggle('active');
        const panel = acc[i].nextElementSibling;
        console.log(panel.style.maxHeight)
        if(panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight +'px';
        }
    })
}