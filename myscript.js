var band = "Rammstein";
        const band2 = {type:"math metal", name:"Meshuggah", seenLive:0};
        band2.seenLive = 1;

function myFunction() {
    document.getElementById("p1").innerHTML = "Sonne";
    document.getElementById("p2").innerHTML = band;
}

function askForName() {
    var name = prompt("Please state your name: ", "no name provided");
    document.getElementById("p3").innerHTML = name;
}

function getConfirmation() {
    var yesNo = confirm("I'm assuming you love this website?");
    document.getElementById("p4").innerHTML = yesNo
}