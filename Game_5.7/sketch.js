'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins;

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();
  coins = new Coins();

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;

    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      //excute code
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left';
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right';
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up';
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down';
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function canvasClicked() {
  console.log('canvas is clicked');
}

function title() {
  background(0);
  textSize(80);
  stroke(255);
  textAlign(CENTER);
  fill(255);
  text('My Game', w / 2, h / 4);

  textSize(20);
  text('click anywhere to start', w / 2, w / 2);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  // text('click for points', w / 2, h / 3);

  player.display();
  player.move();

  coins.display();
  coins.move();
}

function level1MouseClicked() {
  points += 1;
  console.log('points = ' + points);

  if (points >= 10) {
    state = 'you win'
  }
}

function youWin() {
  background(0);
  textSize(80);
  stroke(255);
  text('YOU WIN', w / 2, h / 4);

  textSize(20);
  text('click anywhere to restart', w / 2, h / 3);

}

function youWinMouseClicked() {
  state = 'level 1';
  points = 0;
}
