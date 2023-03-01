let probObj = {
    "A": {
        "B": {
            "C": [1, 2, 3],
            "D": [4, 5, 6],
            "E": [7, 8, 9]
        },
        "F": {
            "G": [10, 11, 12],
            "H": [13, 14, 15],
            "I": [16, 17, 18]
        },
        "J": {
            "K": [19, 20, 21],
            "L": [22, 23, 24],
            "M": [25, 26, 27]
        }
    },
    "N": {
        "O": {
            "P": [28, 29, 30],
            "Q": [31, 32, 33],
            "R": [34, 35, 36]
        },
        "S": {
            "T": [37, 38, 39],
            "U": [40, 41, 42],
            "V": [43, 44, 45]
        },
        "W": {
            "X": [46, 47, 48],
            "Y": [49, 50, 51],
            "Z": [52, 53, 54]
        }
    },
    "AA": {
        "AB": {
            "AC": [55, 56, 57],
            "AD": [58, 59, 60],
            "AE": [61, 62, 63]
        },
        "AF": {
            "AG": [64, 65, 66],
            "AH": [67, 68, 69],
            "AI": [70, 71, 72]
        },
        "AJ": {
            "AK": [73, 74, 75],
            "AL": [76, 77, 78],
            "AM": [79, 80, 81]
        }
    },
}
window.onload = function(){
    const subSel = document.getElementById('subject');
    const topSel = document.getElementById('topic');
    const subTopSel = document.getElementById('subtopic');
    const secSel = document.getElementById('section');

    for(let x in probObj){
        subSel.options[subSel.options.length] = new Option(x, x);
    }
    subSel.onchange = function(){
        topSel.length = 1;
        subTopSel.length = 1;
        secSel.length = 1;
        for(let y in probObj[this.value]){
            topSel.options[topSel.options.length] = new Option(y, y);
        }
        topSel.onchange = function(){
            subTopSel.length = 1;
            secSel.length = 1;
            for(let z in probObj[subSel.value][this.value]){
                subTopSel.options[subTopSel.options.length] = new Option(z, z);
            }
            subTopSel.onchange = function(){
                secSel.length = 1;
                let a = probObj[subSel.value][topSel.value][this.value];
                for(let i = 0; i < a.length; i++){
                    secSel.options[secSel.options.length] = new Option(a[i], a[i]);
                }
            }
        }
    }
}