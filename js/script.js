//Navbar Box Shadow on Scroll 
$(function(){
    var navbar = $('.navbar');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 10){
       		navbar.css('box-shadow', 'none');
        } else {
          navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)'); 
        }
    });
});

$(function () {
    $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});


$(window).resize(function(){
    if( $(window).width() > 767){
        var height = $("#card-front").height() - $("#card-instr").height() - 20
        $('#card-explain').height(height);
    }
})
$(window).resize();



