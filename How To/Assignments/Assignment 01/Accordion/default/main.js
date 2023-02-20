const acc = document.getElementsByClassName('accordion');

for(let i = 0; i < acc.length; i++){
    acc[i].addEventListener('click', () => {
        acc[i].classList.toggle('active');
        const panel = acc[i].nextElementSibling;
        if(panel.style.display === 'block'){
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    })
}