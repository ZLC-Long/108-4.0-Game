'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];
let playerImg;
let coinsImg;

function preload(){
  playerImg = loadImage('assets/mouth.png');
  coinsImg = loadImage('assets/chick.png');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();
  // coins[0] = new Coins();
  coins.push(new Coins());
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

  if (random(1) <= 0.01) {
    coins.push(new Coins());
  }

  player.display();
  player.move();

  // iterating through coins array to display and move them
  //using for loop
  for (let i = 0; i < coins.length; i++) {
    coins[i].display();
    coins[i].move();
  }

  //using forEachh loop
  // coins.forEach(function(coins){
  //   coins.display();
  //   coins.move();
  // })

  //using for of loop
  // for (let coins of coins) {
  //   coins.display();
  //   coins.move();
  // }

  //check for collision, if there is a collision increase points by 1
  // and splice that coin out of array
  // need to iterate backwards through array

  for (let i = coins.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2) {
      points++;
      console.log(points);
      coins.splice(i, 1);
    }else if(coins[i].y > h){
      coins.splice(i, 1);
      console.log('You miss a tasty toasted chick!');
    }
  }

  // text('points' + points, w / 5, h / 4);
  text(`points: ${points}`, w / 5, h / 4);


}

function level1MouseClicked() {
  // points += 1;
  // console.log('points = ' + points);
  //
  // if (points >= 10) {
  //   state = 'you win'
  // }
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
