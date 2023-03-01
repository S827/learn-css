// declare object
// on window load create a function to load the options in respective select elements
probObject = {
    "Maths": {
        "Algebra": ["some", "any", "many"],
        "Calculus": ["differectial", "integral"],
        "Trigonometry": ["Basics", "Advanced"]
        },
    "Physics": {
        "Gravitations": ["The universal law of gravitation", "Acceleration due to gravity", "Kepler's laws of planetary motion"], 
        "SHM": ["Damped S.H.M.", "Forced S.H.M", "Force Law for S.H.M"],
        "Motions": ["Distance", "Displacement", "Speed"]
        },
    "Chemistry": {
        "Physical Chemistry": ["Gas Chromatography", "Ionic Liquid", "pH"], 
        "Molecular Chemistry": ["Cyclobutenes and Their Synthesis and Applications", "Lanthanide Sulfides and Their Synthesis and Applications", "Diaryliodonium Salts and Iodination"], 
        "Organic Chemistry": ["Structure and bonding", "Resonance and acid-base chemistry", "Alkanes, cycloalkanes, and functional groups"]
        },
    "Biology": {
        "Plants": ["Crop and Product Physiology", "Functional Plant Ecology", "Functional and Applied Plant Genomics"],
        "Animals": ["Dog Fighting", "Animal Abuse", "Pet Overpopulation"],
        "Humans": ["evolution", "genetics", "anatomy and physiology"]
        }
}
window.onload = function(){
    const subSel = document.getElementById('subject');
    const topSel = document.getElementById('topic');
    const subTopSel = document.getElementById('subtopic');

    for(let x in probObject){
        subSel.options[subSel.options.length] = new Option(x, x);
    }
    subSel.onchange = function(){
        topSel.length = 1;
        subTopSel.length = 1;
        console.log(probObject[this.value])
        for(let y in probObject[this.value]){
            topSel.options[topSel.options.length] = new Option(y, y);
        }
        topSel.onchange = function(){
            subTopSel.length = 1;
            let z = probObject[subSel.value][this.value];
            console.log(probObject[subSel.value][this.value])
            for(let i = 0; i < z.length; i++){
                subTopSel.options[subTopSel.options.length] = new Option(z[i], z[i]);
            }
        }
    }
}