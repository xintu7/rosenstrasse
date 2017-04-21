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
    const resizeHandler = function () {
        if( $(window).width() > 767){
            var height = $("#card-front").height() - $("#card-instr").height() - 20
            console.log()
            $('#card-explain').height(height);
        } 
    };
    $(document).load(resizeHandler);
    $(window).resize(resizeHandler);
});

   //Get text from Json
let newCardInstr = null;
let newCardExplain = null;
$.getJSON("https://api.myjson.com/bins/1hfaan", function (data) {
    newCardInstr = data.map(item => item.instr);
    newCardExplain = data.map(item => item.explain);
});

function changeText(cardIndex) {
  $(".instrp").html(newCardInstr[cardIndex - 1]);  
  $(".explainp").html(newCardExplain[cardIndex - 1]);  
    console.log('Changing explanation portion');
}

//- changeAll(), to functions, change()
//- Grace Guo
//- 20 April 2017
function changeAll(cardIndex) {
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
  $(".left-button").attr('name', prev);
  $(".right-button").attr('name', next);
}

function toPage(index) {

  $(".workshop").hide();
  $(".cards").show();

  changeAll(index);
  changeText(index);
}

function change(card) {
  //Get the index of the new card you want to display
  var cardIndex = card.getAttribute("name");
  console.log(cardIndex);

  //If this is the first or last card, make no change
  if (cardIndex === "0") {
    return;
  } else if (cardIndex === "90") {
    return;
  }
  
  changeAll(cardIndex);
  changeText(cardIndex);
};

