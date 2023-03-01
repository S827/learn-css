probObject = {
    "Maths": ["Algebra", "Calculus", "Trigonometry"],
    "Physics": ["Gravitations", "SHM", "Motions"],
    "Chemistry": ["Physical Chemistry", "Molecular Chemistry", "Organic Chemistry"],
    "Biology": ["Plants", "Animals", "Humans"]
}
window.onload = function(){
    let subjectSelect = document.getElementById('subject');
    let topicSelect = document.getElementById('topic');
    for(let x in probObject){
        subjectSelect.options[subjectSelect.options.length] = new Option(x, x);
    }
    subjectSelect.onchange = function(){
        // empty the topic options
        topicSelect.length = 1
        // get the topic array
        let y = probObject[this.value];
        console.log(y);
        // loop over the array and add in the topicSelect options
        for(let i = 0; i < y.length; i++){
            topicSelect.options[topicSelect.options.length] = new Option(y[i], y[i]);
        }
    }
}