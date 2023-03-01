let subjectObject = {
    "Front-End": {
        "HTML": ["Links", "Images", "Tables", "Lists"],
        "CSS": ["Borders", "Margins", "Backgrounds", "Floats"],
        "JavaScript": ["Variables", "Operators", "Loops", "Functions"]
    },
    "Back-End": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
    }
}
window.onload = function(){
    let subjectSel = document.getElementById("subject");
    let topicSel = document.getElementById("topic");
    let chapterSel = document.getElementById("chapter");

    for(let x in subjectObject){
        subjectSel.options[subjectSel.options.length] = new Option(x, x);
    }
    subjectSel.onchange = function(){
        // empty chapters and topics dropdowns
        chapterSel.length = 1;
        topicSel.length = 1;
        // display correct values
        for(let y in subjectObject[this.value]){
            topicSel.options[topicSel.options.length] = new Option(y, y);
        }
    }
    topicSel.onchange = function(){
        // empty chapters dropdown
        chapterSel.length = 1;
        // display correct values
        let z = subjectObject[subjectSel.value][this.value];
        for(let i = 0; i < z.length; i++){
            chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
        }
    }
    
}