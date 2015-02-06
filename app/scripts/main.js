console.log('Hello!');


function works() {
    console.log('it\'s working');
}

new Vivus('phoneSvg', {type: 'async', duration: 200}, works);



/* Typing Effect */

function type(i, t, ie, oe) {
    var input = document.getElementById(ie).innerHTML;
    var inputOne = document.getElementById(oe);
    document.getElementById(oe).innerHTML += input.charAt(i);
    setTimeout(function(){
        ((i < input.length - 1) ? type(i+1, t, ie, oe) : false);
    }, t);
}


var header = document.getElementById('headr');

function userScroll(ev){
    if(window.pageYOffset>50){
        header.classList.add('header-fixed');
    } else if (window.pageYOffset<100) {
        header.classList.remove('header-fixed');
    } else if(window.pageYOffset>575) {
		header.classList.add('header-toggle');
	} else if (window.pageYOffset<200){
		header.classList.remove('header-toggle');
	}
}

window.onscroll= userScroll;



type(0, 75, "typing", "desktop-blank");
