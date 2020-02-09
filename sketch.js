var initialInput;
var submitButton;
var database;

var storage;
var canvas;
var capture;

var pic_container;
var photoButton;
var retakePhotoButton;

var new_img
var new_img_small;

var foto_fatta;

function preload() {
  // put preload code here
}

function setup() {

  foto_fatta == false;
  //camera

  canvas = createCanvas(400, 400);
  canvas.id('canvas');

  capture = createCapture(VIDEO);
  capture.id('capture');
  capture.hide();

  imageMode(CENTER);

  //scores
  submitButton = createButton('Confirm');
  submitButton.mousePressed(confirm);
  submitButton.class('submitButton');
  submitButton.hide();

  photoButton = createButton('Take photo');
  photoButton.mousePressed(takePhoto);
  photoButton.class('submitButton');

  retakePhotoButton = createButton('Retake photo');
  retakePhotoButton.mousePressed(reTakePhoto);
  retakePhotoButton.class('submitButton');
  retakePhotoButton.hide();

  changePageButton = createButton('View mosaic');
  changePageButton.mousePressed(changePage);
  changePageButton.class('submitButton');


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

  if (foto_fatta == true){
    image(capture, width/2, height/2, capture.width/30, capture.height/30);
  }
  else {
    var pic = image(capture, width/2, height/2, capture.width, capture.height);
  }


  // put drawing code here
}

function takePhoto() {

  foto_fatta = false;

  submitButton.show();
  retakePhotoButton.show();
  photoButton.hide();

  var canvas1 = document.getElementById('canvas');
  var dataURLbig = canvas1.toDataURL('image/png', 0.1);
  console.log(dataURLbig);

  noLoop();

}


function reTakePhoto(){

  foto_fatta=false;
  resizeCanvas(400, 400);
  submitButton.hide();
  retakePhotoButton.hide();
  photoButton.show();
  loop();
}


function confirm(){

  foto_fatta = true;
  resizeCanvas(15,15);
  var canvas2 = document.getElementById('canvas');
  var dataURL = canvas2.toDataURL('image/png', 0.1);
  console.log('invio');


  var data = {
    photo_img: dataURL
  }

     console.log(dataURL);

  var ref = database.ref('photos');
  ref.push(data);
 window.open('index2.html', '_self');
}




function errData(err) {
  console.log('Error');
  console.log(err)
}

function changePage() {
  window.open('index2.html', '_self');
}
