var dog,happyDog,database,foodS,foodStock
var dogImg,happyDogImg



function preload()
{
	//load images here
dogImg = loadImage("images/dogImg.png")
happyDogImg = loadImage("images/dogImg1.png")


}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
 

  dog = createSprite(250,250,10,10);
dog.addImage=("images/dogImg")

//happyDog = createSprite(350,350,10,10)
//happyDog.addImage("images/happyDogImg")


foodStock=database.ref("Food");
foodStock.on("value",readStock)




}


function draw() {  

  drawSprites();
  background(46,139,87)


//dog.display();
//happyDog.display();




if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg)
}


drawSprites()
textSize()
fill()
text()

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

database.ref('/').update({
 Food:x 
})

}





