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

windows.onresize=resizeImage;

function resizeImage{
    document.getElementById('card-explain').style.height=document.querySelector('card-front').offsetHeight-querySelector('card-instr').offsetHeight+'px';
    }

