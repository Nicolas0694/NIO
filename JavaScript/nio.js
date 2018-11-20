window.onload = function () {

    var canvas = document.getElementById('myCanvas');
    var ctx;

    ctx = canvas.getContext("2d");

    ctx.fillStyle = "#00a3cc";
    ctx.fillRect(200,200,400,100);

    console.log("TEST");

}