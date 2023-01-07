$(document).ready(function(){

   // menu js
   $('.open_slid_sevice').click(function(){ 
   	$('.menu_service').toggleClass('open_menu_slide'); 
   	$('.open_slid_sevice_icon').toggleClass('fa-times fa-bars');
   });   

   $('.main_menu li').click(function(){
   	$('.main_menu li').removeClass('active');
   	$(this).addClass('active');
   });

  // Nice Select
  $('select').niceSelect();

  //owl-carousel 
  $('#product_slider').owlCarousel({
  	navText: ["<i class='fa-solid fa-chevron-right'></i>","<i class='fa-solid fa-chevron-left'></i>"],    
  	loop:true,
  	margin:10,
  	nav:true,
  	responsive:{
  		0:{
  			items:1
  		},
  		600:{
  			items:1
  		},
  		1000:{
  			items:1
  		}
  	}
  });

  $('#out_ofstock').owlCarousel({
  	navText: ["<i class='fa-solid fa-chevron-right'></i>","<i class='fa-solid fa-chevron-left'></i>"],    
  	loop:true,
  	margin:10,
  	nav:true,
  	responsive:{
  		0:{
  			items:1
  		},
  		600:{
  			items:1
  		},
  		1000:{
  			items:1
  		}
  	}
  });

  $('#product_slider_2').owlCarousel({
  	navText: ["<i class='fa-solid fa-chevron-right'></i>","<i class='fa-solid fa-chevron-left'></i>"],    
  	loop:true,
  	margin:10,
  	nav:true,
  	responsive:{
  		0:{
  			items:1
  		},
  		600:{
  			items:1
  		},
  		1000:{
  			items:1
  		}
  	}
  });

  $('#product_slider_3').owlCarousel({
  	navText: ["<i class='fa-solid fa-chevron-right'></i>","<i class='fa-solid fa-chevron-left'></i>"],    
  	loop:true,
  	margin:10,
  	nav:true,
  	responsive:{
  		0:{
  			items:1
  		},
  		600:{
  			items:1
  		},
  		1000:{
  			items:1
  		}
  	}
  });


  $('.icon_toggle').click(function(){
  	$(this).addClass('active');
  	$(this).siblings().removeClass('active');
  })
  $('.grid_icon_action').click(function(){
  	$('.list_action').addClass('grid_action');
  	$('.owl-carousel').trigger('refresh.owl.carousel');

  });
  $('.list_icon_action').click(function(){
  	$('.list_action').removeClass('grid_action');
  	$('.owl-carousel').trigger('refresh.owl.carousel');
  });

});
