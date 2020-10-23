$(window).on("load", function(){
	$(".loader .inner").fadeOut(300, function(){
		$(".loader").fadeOut(550);
	});
})





$(document).ready(function(){
	//activate the superslide code
	$('#slides').superslides({
		animation: 'fade',
		play: 5000
	});

	var type = new Typed(".typed", {
		strings: ["Aspiring Software Developer", "Java Developer", 
		"Web Developer", "Back-end"],

		typeSpeed: 70,
		startDelay: 1000,
		showCursor: false,
		loop: true,
	});

	//Owl Carousel
	$('.owl-carousel').owlCarousel({
	    autoplay:true,
	    loop:true,
	    items:4,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        480:{
	            items:2
	        },
	        768:{
	            items:3
	        },
	        938:{
	            items:4
	        }
	    }
	});



	var skillsToOffset = $(".skillsSection").offset().top;


	$(window).scroll(function(){

		if (window.pageYOffset > skillsToOffset - $(window).height() + 500){
			$('.chart').easyPieChart({
			    easing: 'easeInOut',
				barColor: '#e67e22',
				trackColor: false,
				size:152,
			
				onStep: function(from, to, percent){
					$(this.el).find('.percent').text(Math.round(percent));
				} 
			});
		}

	});
	

});

