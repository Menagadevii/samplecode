const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  dx: 4,
  dy: -4,
  radius: 10
};

const leftPaddle = {
  x: 30,
  y: canvas.height / 2 - 60,
  width: 10,
  height: 120,
  dy: 8
};

const rightPaddle = {
  x: canvas.width - 40,
  y: canvas.height / 2 - 60,
  width: 10,
  height: 120,
  dy: 8
};

let leftScore = 0;
let rightScore = 0;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = 'white';
  ctx.fill();
  ctx.closePath();
  
  // Draw left paddle
  ctx.fillStyle = 'white';
  ctx.fillRect(leftPaddle.x, leftPaddle.y, leftPaddle.width, leftPaddle.height);
  
  // Draw right paddle
  ctx.fillRect(rightPaddle.x, rightPaddle.y, rightPaddle.width, rightPaddle.height);
  
  // Draw scores
  ctx.font = '40px Arial';
  ctx.fillText(leftScore, canvas.width / 4, 50);
  ctx.fillText(rightScore, (canvas.width / 4) * 3, 50);
  
  // Update ball position
  ball.x += ball.dx;
  ball.y += ball.dy;
  
  // Ball collision with top and bottom walls
  if (ball.y + ball.dy > canvas.height - ball.radius || ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  }
  
  // Ball collision with left and right paddles
  if (
    ball.x - ball.radius < leftPaddle.x + leftPaddle.width &&
    ball.y > leftPaddle.y &&
    ball.y < leftPaddle.y + leftPaddle.height
  ) {
    ball.dx = -ball.dx;
  } else if (
    ball.x + ball.radius > rightPaddle.x &&
    ball.y > rightPaddle.y &&
    ball.y < rightPaddle.y + rightPaddle.height
  ) {
    ball.dx = -ball.dx;
  }
  
  // Scoring
  if (ball.x - ball.radius < 0) {
    rightScore++;
    resetBall();
  } else if (ball.x + ball.radius > canvas.width) {
    leftScore++;
    resetBall();
  }
  
  // Move paddles
  movePaddles();
  
  requestAnimationFrame(draw);
}

function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.dx = -ball.dx;
}

function movePaddles() {
  // Move left paddle
  if (leftPaddle.y + leftPaddle.dy > 0 && leftPaddle.y + leftPaddle.dy < canvas.height - leftPaddle.height) {
    leftPaddle.y += leftPaddle.dy;
  }
  
  // Move right paddle
  if (rightPaddle.y + rightPaddle.dy > 0 && rightPaddle.y + rightPaddle.dy < canvas.height - rightPaddle.height) {
    rightPaddle.y += rightPaddle.dy;
  }
}

document.addEventListener('keydown', (event) => {
  // Handle key presses for paddle movement
  if (event.key === 'w') {
    leftPaddle.dy = -8;
  } else if (event.key === 's') {
    leftPaddle.dy = 8;
  } else if (event.key === 'ArrowUp') {
    rightPaddle.dy = -8;
  } else if (event.key === 'ArrowDown') {
    rightPaddle.dy = 8;
  }
});

document.addEventListener('keyup', (event) => {
  // Stop paddle movement on key release
  if (event.key === 'w' || event.key === 's') {
    leftPaddle.dy = 0;
  } else if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
    rightPaddle.dy = 0;
  }
});

draw();
