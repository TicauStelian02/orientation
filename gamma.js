window.addEventListener("deviceorientation", on_device_orientation);

function on_device_orientation(evt) {
    var alpha = evt.alpha;
    var beta = evt.beta;
    var gamma = evt.gamma;

    document.getElementById("a").innerHTML = "Alpha = " + alpha;
    document.getElementById("b").innerHTML = "Beta = " + beta;
    document.getElementById("c").innerHTML = "Gamma = " + gamma;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    var centru = { x: canvas.width / 2, y: canvas.height / 2 };
    var latura_patrat = 50;

    context.clearRect(0, 0, canvas.width, canvas.height);

    // Modificați dimensiunea unghiului Gamma în intervalul -90 până la 90 pentru a se potrivi cu dimensiunea formei geometrice
    var dimensiune = Math.abs(gamma) * 5; // Puteți ajusta factorul de scalare după preferință

    context.fillStyle = "#6A0888";
    context.beginPath();
    context.fillRect(centru.x - dimensiune / 2, centru.y - dimensiune / 2, dimensiune, dimensiune);
}

