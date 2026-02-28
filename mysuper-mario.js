// Player position
let x = 100;
let y = 250;
let speed = 5;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(120, 190, 255); // sky

  // ground
  fill(60, 200, 90);
  rect(0, 330, width, 70);
  updateJump();
  updateMovement();
  drawPlayer();
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}
function updateMovement() {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    x -= speed;
  }
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x += speed;
  }
  
  // Keep player on screen
  x = constrain(x, 0, width - 40);
}
function keyPressed() {
  if (key === " " || key === "ArrowUp" || key === "w") {
    if (!jumping) {
      jumping = true;
      jumpFrame = 0;
    }
  }
}

// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  fill(255, 60, 60);
  rect(x, y, 40, 40);
}
