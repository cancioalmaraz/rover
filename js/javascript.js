
var app = new Vue({
    el: "#app",
    data: {
        message: "David",
        tareas: [
            "Aprender View",
            "Aprender Laravel",
            "etc"
        ]
    }
});

function obtener() {
    $.getJSON('data.json', function(data) {
        document.getElementById("label").innerHTML = "Time GPS > " + String(data.Hour)+ ":" +String(data.Minute) + ":" + String(data.Second);
    });
}

setInterval(function() {
    $(obtener());
}, 250);