

// jQuery(".menu-btn-page").on("click", function(){
//     jQuery(this).toggleClass("active");
//     jQuery("body").toggleClass("no-scroll");
//     jQuery(".side-block-mobile").toggleClass("active");
//   });
jQuery(".close-sidemenu-mobile").on("click", function(){
    jQuery(".side-block-mobile").removeClass("active");
  jQuery(".menu-btn-page").removeClass("active");
});
// $(".recommned-text").text(function(index, currentText) {
//     return currentText.substr(0, 40);
// });
$(".btn-custom").text(function(index, currentText) {
  return currentText.substr(0, 40);
});

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});




$(document).ready(function(){

    
  $('.Service-box a').click(function (e) {
    let tab = $(this).data('tab_id'); 
    $('.nav-tab').removeClass('active');
    $('#'+tab).toggleClass('active');
    $('.Service-box a:not(#'+tab+')').removeClass('active');
    $('#service').modal('toggle'); 
    
  });
  $(".modal").click(function(){
  $(".Service-box a").removeClass("active");
 
  })
});

$(window).resize(function(){

  if ($(window).width() <= 767) {  

         $('.modal').css("display", "none");
         $('.modal-backdrop').css("display", "none");
         $('.modal-open').css("overflow", "visible");
               

  }; 
});



var value;

// jQuery(".menu-btn").on("click touch", function(e){
//   value = $(this).attr('href');
//   jQuery(".side-page").addClass("active");
// });



$(document).ready(function() {
  $('.menu-btn').on('click touch', function(e) {
     value = $(this).attr('href');
     $(this).toggleClass('cross-icon');

       console.log(value);
    $(".side-page").toggleClass("active");
  });
});

$(document).ready(function() {
 
  $('.menu-btn-page').on('click touch', function(e) {
     value = $(this).attr('href');
     var tab = $(this).attr('data-trigger');
     $(".side-inner-block").removeClass("active");
      $(".side-inner-block").addClass("active");
      $( '#' + tab +'' ).show();
      $('.side-inner-block:not(#'+tab+')').hide();
      
    
      //  console.log(value);
    $(".side-block-mobile").addClass("active");
  });
});
 
// geri butonunu yakalama
window.onhashchange = function(e) {
  var oldURL = e.oldURL.split('#')[1];
  var newURL = e.newURL.split('#')[1];
  //var hash = location.hash.replace(value, '');
  value = value.replace('#','');
//console.log('old: '+ oldURL+ ' ' +  value);
  if (oldURL == value) {
    
    jQuery(".side-block-mobile").removeClass("active");
    jQuery(".side-page").removeClass("active");
    $(".menu-btn").removeClass('cross-icon');
    e.preventDefault();
    return false;
  }
  //console.log('old:'+oldURL+' new:'+newURL);
}

