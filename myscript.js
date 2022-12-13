var band = "Rammstein";
        const band2 = {type:"math metal", name:"Meshuggah", seenLive:0};
        band2.seenLive = 1;

function myFunction() {
    document.getElementById("p1").innerHTML = "Sonne";
    document.getElementById("p2").innerHTML = band;
}

function askForName() {
    let name = prompt("Please state your name: ", "no name provided");
    document.getElementById("p3").innerHTML = name;
}

function getConfirmation() {
    let yesNo = confirm("I'm assuming you love this website?");
    if (yesNo == true) {
        document.getElementById("p4").innerHTML = Number(yesNo)
    } else {
        document.getElementById("p4").innerHTML = yesNo
    }
}

function ageCheck() {
    let age = Number(prompt("Please provide your age"));
    if (age < 25) {
        document.getElementById("p5").innerHTML = "you are younger than 25";
    } else if (age > 25) {
        document.getElementById("p5").innerHTML = "you are older than 25";
    } else {
        document.getElementById("p5").innerHTML = "you must be 25";
    }    
}

function looping() {
    let total = 0;
    for(var x = 0; x<5; x++){
        total += " ";
        total += String(x+1);
    }
    document.getElementById("p6").innerHTML = total;
}