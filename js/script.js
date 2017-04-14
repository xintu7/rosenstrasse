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



$(window).ready(function(){
    if( $(window).width() > 767){
        var height = $("#card-front").height() - $("#card-instr").height() - 20
        $('#card-explain').height(height);
    }
    $(window).resize(function() {
     if( $(window).width() > 767){
        var height = $("#card-front").height() - $("#card-instr").height() - 20
        $('#card-explain').height(height);
    }
    });$(window).resize();
});



   //Get text from Json
var newCardinstr = $.getJSON("https://raw.githubusercontent.com/xintu7/rosenstrasse/master/js/text.json", function(cardInstr) {
    var newCardinstr = cardInstr[1].instr;
    console.log(newCardinstr);
   });


function change(card) {
  //Get the index of the new card you want to display
  var cardIndex = card.getAttribute("id");
 
  //Get the file link to the new left and right images
  var newCardLeft = "images/cards/l"+cardIndex+".png";
  var newCardRight = "images/cards/r"+cardIndex+".png";
    
  //text//
    
  //Find the card back image element and change image src
  var cardBack = $(".back");
  cardBack.attr('src', newCardLeft);
 
  //Find the card front image element and change image src
  var cardFront = $(".front");
  cardFront.attr('src', newCardRight);
    
  //Update the index of the left and right arrows
  var index = parseInt(cardIndex);
  var prev = index-1;
  var next = index+1;
  $(".left-button").attr('id', prev);
  $(".right-button").attr('id', next);
};
