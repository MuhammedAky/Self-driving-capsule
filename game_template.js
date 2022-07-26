const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.focus();

putWallsAround(0,0, canvas.clientWidth, canvas.clientHeight);
let player = new Ball(100,100,30,5);
player.setColor("red");
player.maxSpeed = 5;

function gameLogic() {
    // this gets called periodically as part of the main loop
}


userInput(player);
requestAnimationFrame(mainLoop);