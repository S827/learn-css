 let probObject = {
    "Maths": ["Algebra", "Calculus", "Trigonometry"],
    "Physics": ["Gravitations", "SHM", "Motions"]
}
window.onload = function(){
    let subjectSelect = document.getElementById('subject');
    let topicSelect = document.getElementById('topic');

    for(let x in probObject){
        subjectSelect.options[subjectSelect.options.length] = new Option(x, x);
    }
    subjectSelect.onchange = function(){
        // empty the topics dropdown
        topicSelect.length = 1;
        // display correct values
        let y = probObject[this.value];
        for(let i = 0; i < y.length; i++){
            topicSelect.options[topicSelect.options.length] = new Option(y[i], y[i]);
        }
    }
}
