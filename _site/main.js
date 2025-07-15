
$(document).ready(function() {
	//make sure the page is ready befor running the scripts
	// This is the hamburger menu
	$(".hamburger").click(function(){

	  $(this).toggleClass('active');
	  $(".mobile-menu").fadeToggle();
		});

// put class of exit on elements to make them navigate back to page-nav
			$(".exit").click(function(){

				$(this).toggleClass('active');
				$(".page-nav").fadeToggle();
			});

			// end hamburger menu

			$(document).ready(function(){
					$('.one-time').slick({
			dots: true,
			infinite: true,
			draggable: true,
			speed: 1000,
			slidesToShow: 1,
			autoplay: false,
			adaptiveHeight: true
			});
			});
			});

			$('.variable-width').slick({
				dots: false,
				infinite: true,
				arrows: false,
				speed: 1000,
				slidesToShow: 4,
				autoplay: true,
				centerMode: true,
				variableWidth: true
			  });

			
			// on scroll
			function reveal() {
			let reveals = document.querySelectorAll(".reveal");

			for (let i = 0; i < reveals.length; i++) {
			let windowHeight = window.innerHeight;
			let elementTop = reveals[i].getBoundingClientRect().top;
			let elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
			reveals[i].classList.add("active");
			} else {
			}
			}
			}

			window.addEventListener("scroll", reveal);

			

			
			$('[data-fancybox="gallery"]').fancybox({
			  loop: true,
			  buttons: [
				"zoom",
				"slideShow",
				"thumbs",
				"close"
				],
				animationEffect: "zoom",
				transitionEffect: "zoom-in-out",
			});

			$(".read-more-button").click(function(){
				$(this).toggleClass("active")
				var target = $(this).attr("data-target");
			   $(".read-more-section").each(function(){
				 if($(this).attr("data-section") == target){
				   $(this).slideToggle();
				 }});
			});

			$(".accordion1").click(function(){

				$(this).toggleClass('active');
				$(".panel1").slideToggle();
				})

			$(".accordion2").click(function(){

				$(this).toggleClass('active');
				$(".panel2").slideToggle();
				})

			$(".accordion3").click(function(){

				$(this).toggleClass('active');
				$(".panel3").slideToggle();
				})

			$(".accordion4").click(function(){

				$(this).toggleClass('active');
				$(".panel4").slideToggle();
				})

			$(".accordion5").click(function(){

				$(this).toggleClass('active');
				$(".panel5").slideToggle();
				})

			$(".accordion6").click(function(){

				$(this).toggleClass('active');
				$(".panel6").slideToggle();
				})

			$(".accordion7").click(function(){

				$(this).toggleClass('active');
				$(".panel7").slideToggle();
				})

			$(".accordion8").click(function(){

				$(this).toggleClass('active');
				$(".panel8").slideToggle();
				})
				
				

