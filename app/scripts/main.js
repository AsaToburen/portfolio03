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

