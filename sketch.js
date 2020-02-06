var initialInput;
var submitButton;
var database;

var storage;
var canvas;
var capture;

function preload(){
  // put preload code here
}

function setup() {
  //camera
    canvas = createCanvas(150,100);
    canvas.id('canvas');
  capture = createCapture(VIDEO);
  capture.size(700,400);
  capture.id('capture');
  // capture.hide();

  //scores
  initialInput = createInput('initials');
  submitButton = createButton('submit');
  submitButton.mousePressed(submitScore);

  changePageButton = createButton('View mosaic');
  changePageButton.mousePressed(changePage);


  // convertButton = createButton('convert');
  // convertButton.mousePressed(convertCanvasToImage);



  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDHjHCgXbZpwH__Ht2cb-VblVuOdozk09Y",
    authDomain: "photo-mosaic-prova-img.firebaseapp.com",
    databaseURL: "https://photo-mosaic-prova-img.firebaseio.com",
    projectId: "photo-mosaic-prova-img",
    storageBucket: "photo-mosaic-prova-img.appspot.com",
    messagingSenderId: "390227896604",
    appId: "1:390227896604:web:3f87555db4a6b5d52ff2d9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  database = firebase.database();

  var storageref = database.ref('photos');
  storageref.on('value', errData);

//------------------------------------------------

}

function draw() {

  // put drawing code here
}



function submitScore(){
  var pic = image(capture, 0, 0,150, 100);

// console.log(data);

var canvas = document.getElementById('canvas');
var dataURL = canvas.toDataURL('image/png');
// console.log(dataURL);

// var new_img = createImg(dataURL);

var data = {
initials: initialInput.value(),
photo_img: dataURL
}

var storageref = database.ref('photos');
storageref.push(data);

console.log(data);

}



function errData(err){
  console.log('Error');
  console.log(err)
}

function changePage() {
window.open('index2.html', '_self');
}

// function convertCanvasToImage(canvas) {
// 	var image = new Image();
// 	image.src = canvas.toDataURL("image/png");
// 	return image;
// }
