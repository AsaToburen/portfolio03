

function type(i, t, ie, oe) {
    var input = document.getElementById(ie).innerHTML;
    document.getElementById(oe).innerHTML += input.charAt(i);
    setTimeout(function(){
        ((i < input.length - 1) ? type(i+1, t, ie, oe) : false);
    }, t);
}

     type(0, 75, "typing", "typing-effect");

var header = document.getElementById('headr');

window.addEventListener('scroll', function(ev) {
  if(window.pageYOffset>50){
        header.classList.add('header-fixed');
    } else if (window.pageYOffset<100) {
        header.classList.remove('header-fixed');
    };
  if(window.pageYOffset>575) {
        console.log('go daddy');
        header.classList.add('header-hide');
    } else if (window.pageYOffset<400){
        header.classList.remove('header-hide');
    }
}, false);

//Slideshow 

var slideshowList = document.getElementById("slideshow");
var slideItems = slideshowList.getElementsByTagName('li');


//function move(index) {
//
//  slideItems[index].classList.add('current');
//}
//
//function changeSlide() {
//  var timeout;
//  var index = 0;
//  timeout = setTimeout(function() {
//    if(slideItems[index] < (slideItems.length - 1)){
//      slideItems[index].classList.remove('current');
//      index++;
//      console.log(index);
//      move(index);}
//  }, 5);
//};



var currentIndex = 0;
var timeout;

moveSlide(currentIndex);

function advance() {
  clearTimeout(timeout);
  timeout = setTimeout(function() {
    
    if(currentIndex < (slideItems.length - 1)) {
      moveSlide(currentIndex + 1);
    } else {
      moveSlide(0);
    }
  }, 8000);
}


function moveSlide(newIndex) {

    advance();

    slideItems[currentIndex].classList.remove('current');
    slideItems[newIndex].classList.add('current');
    currentIndex = newIndex;
}


// Portfolio Scripts

  var section = document.getElementById('portfolio');
  
  section.addEventListener("click", function(e) {
    console.log(e.target.tagName);
    var projects = document.querySelectorAll('.project');
    if(e.target.tagName === 'A') {
        var projectSelected = event.target.parentNode.parentNode.parentNode;

}
});

















