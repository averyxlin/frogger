let backgroundColor,
  frogX,
  frogY,
  score,
  lives,
  gameIsOver,
  // car1X,
  // car1Y,
  car1V,
  carPosX,
  carPosY;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;

  //car in middle bottom of screen
  frogX = width / 2;
  frogY = height - 15;
  score = 0;
  lives = 3;
  gameIsOver = false;
  carPosX = [-50, 0];
  carPosY = [100, 150];
  // car1X = 0;
  // car1Y = 100;
  car1V = 5;
}

function draw() {
  background(backgroundColor);
  // Code for gold goal line
  fill(60, 80, 80);
  rect(0, 0, width, 50);
  // Code to display Frog
  fill(120, 80, 80);
  ellipse(frogX, frogY, 20);
  if (lives > 0) {
    moveObjects();
    draw;
    drawCars();
    checkCollisions();
    checkWin();
  }
  displayScores();
}

function keyPressed() {
  // if (keyCode === UP_ARROW && frogY > 0) {
  //   frogY -= 10;
  // }
  // else if ((keyIsDown(DOWN_ARROW))&& frogY < height){
  //   frogY += 10;
  // }
  // else if (keyCode === LEFT_ARROW && frogX > 0){
  //   frogX -= 10;
  // }
  // else if (keyCode === RIGHT_ARROW && frogX < width){
  //   frogX += 10;
  // }
}

function moveObjects() {
  for (let i = 0; i < carPosX.length; i += 1) {
    if (carPosX[i] < width) {
      carPosX[i] += car1V;
    } else {
      carPosX[i] = 0;
    }
  }
  if (keyIsDown(UP_ARROW) && frogY > 0) {
    frogY -= 5;
  } else if (keyIsDown(DOWN_ARROW) && frogY < height) {
    frogY += 5;
  } else if (keyIsDown(LEFT_ARROW) && frogX > 0) {
    frogX -= 5;
  } else if (keyIsDown(RIGHT_ARROW) && frogX < width) {
    frogX += 5;
  }
}

function drawCars() {
  // Code for car 1
  fill(0, 80, 80);
  for (let i = 0; i < carPosX.length; i += 1) {
    rect(carPosX[i], carPosY[i], 40, 30);
  }
}

function checkCollisions() {
  for (let i = 0; i < carPosX.length; i += 1) {
    if (collideRectCircle(carPosX[i], carPosY[i], 40, 30, frogX, frogY, 20)) {
      frogY = height - 10;
      lives -= 1;
    }
  }
}

function checkWin() {
  if (frogY < 50) {
    score += 1;
    frogY = height - 10;
  }
}

function displayScores() {
  textSize(12);
  fill(0);
  // Display Lives
  text(`Lives: ${lives}`, 10, 20);
  // Display Score
  text(`Score: ${score}`, 10, 35);

  if (lives <= 0) {
    text("Game over", 60, 35);
  }
}
