//calculate.js


function calculate() {

    var boundaryMax_celling = document.getElementById("max").value;
    var boundaryMax_floor   = document.getElementById("A_plus").value;
    var boundaryA_celling   = document.getElementById("A").value;
    var boundaryA_floor     = document.getElementById("A_minus").value;
    var boundaryB_celling   = document.getElementById("B_plus").value;
    var boundaryB_floor     = document.getElementById("B").value;
    var boundaryC_celling   = document.getElementById("B_minus").value;
    var boundaryC_floor     = document.getElementById("C_plus").value;
    var boundaryD_celling   = document.getElementById("C").value;
    var boundaryD_floor     = document.getElementById("C_minus").value;
    var boundaryF_celling   = document.getElementById("D").value;
    var boundaryF_floor     = document.getElementById("F").value;

    if ( isNaN(boundaryMax_celling) || isNaN(boundaryMax_floor) || isNaN(boundaryA_celling)
        || isNaN(boundaryA_floor)   || isNaN(boundaryB_celling) || isNaN(boundaryB_floor)
        || isNaN(boundaryC_celling) || isNaN(boundaryC_floor)   || isNaN(boundaryD_celling)
        || isNaN(boundaryD_floor)   || isNaN(boundaryF_celling) || isNaN(boundaryF_floor) ) {
            alert("Please check boundaries and input again. \nBoundaries are numbers only.");
            return;
        }

    boundaryMax_celling = parseInt(boundaryMax_celling);
    boundaryMax_floor   = parseInt(boundaryMax_floor);
    boundaryA_celling   = parseInt(boundaryA_celling);
    boundaryA_floor     = parseInt(boundaryA_floor);
    boundaryB_celling   = parseInt(boundaryB_celling);
    boundaryB_floor     = parseInt(boundaryB_floor);
    boundaryC_celling   = parseInt(boundaryC_celling);
    boundaryC_floor     = parseInt(boundaryC_floor);
    boundaryD_celling   = parseInt(boundaryD_celling);
    boundaryD_floor     = parseInt(boundaryD_floor);
    boundaryF_celling   = parseInt(boundaryF_celling);
    boundaryF_floor     = parseInt(boundaryF_floor);

    if (boundaryF_floor < 0 || boundaryMax_celling > 100
        ||boundaryMax_celling <= boundaryMax_floor ||boundaryMax_floor <= boundaryA_celling
        ||boundaryA_celling <= boundaryA_floor || boundaryA_floor <= boundaryB_celling
        ||boundaryB_celling <= boundaryB_floor || boundaryB_floor <= boundaryC_celling
        ||boundaryC_celling <= boundaryC_floor || boundaryC_floor <= boundaryD_celling
        ||boundaryD_celling <= boundaryD_floor || boundaryD_floor <= boundaryF_celling ) {

        alert("Please check boundaries and input boundaries again [0-100]. \nBoundaries are positive values and cannot be overlapping");
        return;
    }

    var countF = 0, countD = 0;
    var countCmius = 0, countC = 0, countCplus = 0;
    var countB = 0, countBmius = 0, countBplus = 0;
    var countAmius = 0, countA = 0,countAplus= 0;

    var countAplus_hgram = "", countBplus_hgram = "", countCplus_hgram = "";
    var countA_hgram = "", countB_hgram = "", countC_hgram = "", countD_hgram = "", countF_hgram = "";
    var countAmius_hgram= "", countBmius_hgram= "", countCmius_hgram= "";

    var gradesLen = grades.length;

    for(var i = 0; i < gradesLen; i++ ) {

        if (grades[i] < boundaryF_celling && grades[i] > boundaryF_floor) {
            countF++;
            countF_hgram = countF_hgram + "O";
        }
        if (grades[i] >= boundaryF_celling && grades[i] < boundaryD_floor) {
            countD++;
            countD_hgram = countD_hgram + "O";
        }
        if (grades[i] >= boundaryD_floor && grades[i] < boundaryD_celling) {
            countCmius++;
            countCmius_hgram = countCmius_hgram + "O";
        }
        if (grades[i] >= boundaryD_celling && grades[i] < boundaryC_floor) {
            countC++;
            countC_hgram = countC_hgram + "O";
        }
        if (grades[i] >= boundaryC_floor && grades[i] < boundaryC_celling) {
            countCplus++;
            countCplus_hgram = countCplus_hgram + "O";
        }
        if (grades[i] >= boundaryC_celling && grades[i] < boundaryB_floor) {
            countBmius++;
            countBmius_hgram = countBmius_hgram + "O";
        }
        if (grades[i] >= boundaryB_floor && grades[i] < boundaryB_celling) {
            countB++;
            countB_hgram = countB_hgram + "O";
        }
        if (grades[i] >= boundaryB_celling && grades[i] < boundaryA_floor) {
            countBplus++;
            countBplus_hgram = countBplus_hgram + "O";
        }
        if (grades[i] >= boundaryA_floor && grades[i] < boundaryA_celling) {
            countAmius++;
            countAmius_hgram = countAmius_hgram + "O";
        }
        if (grades[i] >= boundaryA_celling && grades[i] < boundaryMax_floor) {
            countA++;
            countA_hgram = countA_hgram + "O";
        }
        if (grades[i] >= boundaryMax_floor && grades[i] <= boundaryMax_celling) {
            countAplus++;
            countAplus_hgram = countAplus_hgram + "O";
        }
    }

    document.getElementById("countAplus").innerHTML = countAplus_hgram;
    document.getElementById("countA").innerHTML     = countA_hgram;
    document.getElementById("countAmius").innerHTML = countAmius_hgram;
    document.getElementById("countBplus").innerHTML = countBplus_hgram;
    document.getElementById("countB").innerHTML     = countB_hgram;
    document.getElementById("countBmius").innerHTML = countBmius_hgram;
    document.getElementById("countCplus").innerHTML = countCplus_hgram;
    document.getElementById("countC").innerHTML     = countC_hgram;
    document.getElementById("countCmius").innerHTML = countCmius_hgram;
    document.getElementById("countD").innerHTML     = countD_hgram;
    document.getElementById("countF").innerHTML     = countF_hgram;

}

$(document).ready(function() {
    $(".input-field").on('keyup', function (e) {
        if (e.keyCode == 13) {
            calculate();
        }
    });
});
