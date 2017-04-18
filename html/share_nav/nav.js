function loadNavigation(activeIndex) {
	$('nav').load('nav.html',null,function(){
		$('nav li:eq(' + activeIndex + ')').addClass('active');
	});
}