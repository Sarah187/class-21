var movingRect, fixedRect;

function setup() {

createCanvas(800,600);

fixedRect = createSprite(100,100,50,100);
fixedRect.shapeColor = "green";
fixedRect.debug = true;

movingRect = createSprite(200,100,100,50);
movingRect.shapeColor = "red";
movingRect.debug = true;

rect1 = createSprite(300,200,50,100);
rect1.shapeColor = "#74d6a8"
rect2 = createSprite(400,200,50,100);
rect2.shapeColor = rgb(177, 136, 227);
rect3 = createSprite(500,200,50,100);
rect3.shapeColor = "#f7be54"
rect4 = createSprite(600,200,50,100);
rect4.shapeColor = "#fa84a4"

}

function draw() {

background(0);

movingRect.y = mouseY;
movingRect.x = mouseX;

//collision formula for 2 rectangles is movingRect.x - fixedRect.x
//movingRect.x - fixedRect.x = movingrect.width/2 + fixedRect.width/2
//movingRect.x - fixedRect.x = 100/2 + 50/2 = 75
//200 - 100 = 75 
//100 = 75

console.log(movingRect.x-fixedRect.x);


drawSprites();

if (touching(movingRect, fixedRect)) {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";

} else {
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "green";

}

if (touching(movingRect, rect1)) {
movingRect.shapeColor = "blue"
rect1.shapeColor = "blue"
} else {
  //movingRect.shapeColour = "red"
  rect1.shapeColor = "#74d6a8"
}

if (touching(movingRect, rect2)) {
  movingRect.shapeColor = "blue"
  rect2.shapeColor = "blue"
  } else {
    //movingRect.shapeColour = "red"
    rect2.shapeColor = rgb(177, 136, 227)
  }

if (touching(movingRect, rect3)) {
  movingRect.shapeColor = "blue"
  rect3.shapeColor = "blue"
} else {
    //movingRect.shapeColour = "red"
    rect3.shapeColor = "#f7be54"
}

if (touching(movingRect, rect4)) {
  movingRect.shapeColor = "blue"
  rect4.shapeColor = "blue"
  } else {
    //movingRect.shapeColour = "red"
    rect4.shapeColor = "#fa84a4"
  }

}

function touching(a, b) {
  //a = object1
  //b = object2
  if (a.x - b.x < a.width/2 + b.width/2 
    && b.x - a.x < a.width/2 + b.width/2
    && a.y - b.y < a.height/2 + b.height/2
    && b.y - a.y < a.height/2 + b.height/2 ) {
return true
  }
  
  else {
    return false
  }
}