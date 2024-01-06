let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
width = "400";
height = "400";

//declare size and mouvement variables for the players

//wasd
let playerGreen = {
  x: 50,
  y: 50,
  size: 20,
  speed: 5,
};

//arrow keys
let playerBlue = {
  x: 200,
  y: 200,
  size: 20,
  speed: 5,
};

function drawPlayer(color, player) {
  ctx.fillStyle = color;
  ctx.fillRect(player.x, player.y, player.size, player.size);
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawPlayer("green", playerGreen);
  drawPlayer("blue", playerBlue);
}

function update() {
  document.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key === "w") {
      playerGreen.y -= playerGreen.speed;
    } else if (key === "a") {
      playerGreen.x -= playerGreen.speed;
    } else if (key === "s") {
      playerGreen.y += playerGreen.speed;
    } else if (key === "d") {
      playerGreen.x += playerGreen.speed;
    }

    if (playerGreen.x < 0) {
      playerGreen.x = canvas.width - playerGreen.size;
    } else if (playerGreen.x + playerGreen.size > canvas.width) {
      playerGreen.x = 0;
    }

    if (playerGreen.y < 0) {
      playerGreen.y = canvas.height - playerGreen.size;
    } else if (playerGreen.y + playerGreen.size > canvas.height) {
      playerGreen.y = 0;
    }

    updateCanvas();
  });

  document.addEventListener("keydown", function (event) {
    let key = event.key;
    if (key === "ArrowUp" && playerBlue.y > 0) {
      playerBlue.y -= playerBlue.speed;
    } else if (key === "ArrowLeft" && playerBlue.x > 0) {
      playerBlue.x -= playerBlue.speed;
    } else if (
      key === "ArrowDown" &&
      playerBlue.y + playerBlue.size < canvas.height
    ) {
      playerBlue.y += playerBlue.speed;
    } else if (
      key === "ArrowRight" &&
      playerBlue.x + playerBlue.size < canvas.width
    ) {
      playerBlue.x += playerBlue.speed;
    }

    updateCanvas();
  });
}

update();
