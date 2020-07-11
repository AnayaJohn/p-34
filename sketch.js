//Create variables here
var happyDog, dog;
var foodS, foodStock;
var database;

function preload()
{
  //load images here
  dog = loadImage("sprites/dogImg.png");
  happyDog= loadImage("sprites/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(50,180,20,50);
  dog.addImage("hungry",dog);

/*
  happyDog= createSprite(50,180,20,50);
  happyDog.addImage("happy",happyDog);
*/

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
}


function draw() { 
  background(46, 139, 87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);    
  }

  drawSprites();
  fill("white");
  text("Note: Press UP_ARROW Key to feed Dog",250,50);
  //add styles here

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1;
  }
  database.ref('/').update
  food:x
}



