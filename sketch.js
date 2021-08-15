var library, libraryImg;
var librarian, librarianImg;
var boy, boyImg;
var nail, nailImg;
var gameState = "play";

function preload(){
libraryImg =  loadImage("library.jpg");
librarianimg = loadImage("librarian.jpeg");
boyImg = loadImage("boy.jpeg");
nailImg = loadImage("nail.png");
}

function setup() {
 createCanvas(600,800);
 library = createSprite;
 library.addImage("library", libraryImg);
 librarian = createSprite(20,20,70,70);
 librarian.addImage("librarian", librarianImg);

}

function draw() {
 drawSprites();

}