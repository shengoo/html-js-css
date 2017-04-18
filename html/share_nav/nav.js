function loadNavigation(activeIndex) {
	$('nav').load('nav.html');
	$('nav li:eq(' + activeIndex + ')').addClass('active')
}