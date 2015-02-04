console.log('Hello!');

var header = document.getElementById('headr');

function userScroll(ev){
	if(window.pageYOffset>575) {
		header.classList.add('header-toggle');
	} else if (window.pageYOffset<200){
		header.classList.remove('header-toggle');
	}
}

window.onscroll= userScroll;


/* Typing Effect */

function type(i, t, ie, oe) {
    var input = document.getElementById(ie).innerHTML;
    var inputOne = document.getElementById(oe);
    document.getElementById(oe).innerHTML += input.charAt(i);
    setTimeout(function(){
        ((i < input.length - 1) ? type(i+1, t, ie, oe) : false);
    }, t);
}

type(0, 75, "typing", "desktop-blank");




var projectData = {
	hotorcold : 'http://asatoburen.com/hot-or-cold-starter/',
	musicdiscovery : 'http://asatoburen.com/last_fm',
	stackoverflow : 'http://asatoburen.com/stackerAJAX',
	startuplandingpage : 'http://asatoburen.comstartup-landing-page-clone',
	streetfighter : 'http://asatoburen.com/jquerystreetfighter1',
	waterquiz: 'http://asatoburen.com/quiz-app',
	youtube_api: 'http://asatoburen.com/youtube_api'
};

