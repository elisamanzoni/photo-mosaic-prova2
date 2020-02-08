var initialInput;
var submitButton;
var database;

var storage;
var canvas;
var capture;

var pic_container;

function preload() {
  // put preload code here
}

function setup() {
  //camera

  canvas = createCanvas(20, 20);
  canvas.id('canvas');

  capture = createCapture(VIDEO);
  capture.class('capture_class');
  capture.size(windowWidth, windowWidth);
  capture.id('capture');
  // capture.hide();

  imageMode(CENTER);

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

  var ref = database.ref('photos');
  ref.on('value', errData);

  //------------------------------------------------




}

function draw() {
  stroke('black');
  noFill();
  rect(0, 0, width, height);

  // put drawing code here
}



function submitScore() {

  var pic = image(capture, width/2, height/2, 30, 20);

  // console.log(data);

  var canvas = document.getElementById('canvas');
  var dataURL = canvas.toDataURL('image/png', 0.1);
  // console.log(dataURL);

  // var new_img = createImg(dataURL);

  var data = {
    initials: initialInput.value(),
    photo_img: dataURL
  }

  var ref = database.ref('photos');
  ref.push(data);

  // console.log(data);

  //---------------------------------------------------



}



function errData(err) {
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
