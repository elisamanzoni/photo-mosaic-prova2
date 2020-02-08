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
  // capture.hide();

  //scores

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
  ref.once('value', gotData, errData);



//------------------------------------------------

}

function draw() {

  // put drawing code here
}




function gotData(data) {

  var photolistings = selectAll('photolisting');
  for (let i = 0; i < photolistings.length; i++){
    photolistings[i].remove();
  }

var photos = data.val();
var keys = Object.keys(photos);
console.log(keys.length);
for (let j = 0; j < keys.length; j++){
  let k = keys[j];
  let initials = photos[k].initials;
  let photo_img = photos[k].photo_img;

  var li = createElement('p', initials);
  li.class('photolisting');
  li.parent('photolist');

  var li_img = createImg(photo_img);
  li_img.class('photolisting');
  li_img.parent('photolist');
  }

  // console.log(photo_img);
}

function errData(err){
  console.log('Error');
  console.log(err)
}
