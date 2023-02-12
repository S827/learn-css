const acc = document.getElementsByClassName('accordion');

for(let i = 0; i < acc.length; i++){
    console.log('hi');
    acc[i].addEventListener('click', () => {
        // toggle bw add/remove active class
        acc[i].classList.toggle('active');
        // console.log('hi');
        // toggle bw hiding/showing the panel
        let panel = acc[i].nextElementSibling;
        if(panel.style.display === 'block'){
            panel.style.display = 'none';
        } else{
            panel.style.display = 'block';
            // console.log('hi');
        }
    });
}