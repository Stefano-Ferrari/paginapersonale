//Scroll
// https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll
// http://jsfiddle.net/mekwall/up4nu/
// Cache selectors
var lastId,
    topMenu = $("#sidebar"),
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });
    
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top+1;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
    var fromTop = $(this).scrollTop();
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top-100< fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems.removeClass("active");
         $("[href='#"+id+"']").addClass("active");
   }
    
});



/*
//parallax 
// http://www.shinyface.com/2010/09/04/simple-parallax-with-jquery/
// https://greensock.com/forums/topic/17320-background-parallax-effect-on-mouse-move/
jQuery(document).ready(function($){
	$("#fotocontainer").mousemove(
        
		function(e){
			// Work out mouse position
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			// Get percentage positions
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);
			var mouseYPercent = Math.round(yPos / $(this).height() * 100);
            
			// Position Each Layer
			$(this).children("fotohome").each(
				function(){
					var diffX = $("#fotocontainer").width() - $(this).width();
					var diffY = $("#fotocontainer").height() - $(this).height();

					var myX = diffX * (mouseXPercent / 100); //) / 100) / 2;

                    
					var myY = diffY * (mouseYPercent / 100);
                    
                    

					var cssObj = {
						'left': myX + 'px',
						'top': myY + 'px'
					}
					//$(this).css(cssObj);
					$(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});

				}
			);

		}
	);
});

*/
$(document).ready(function() {
//Slideshow
var n = 1;
var s = 1;
var i = 1;
var max = 4;

function next(){	$('.item'+n).removeClass("activeitem");
	if(n!=max){
		if(n!=(max-1)){
            if(n==1){
			$('.item'+(max)).removeClass("previtem");
			$('.item'+n).addClass("previtem");
            $('.item'+(max)).addClass("hiddenitem");
						
			$('.item'+(n+1)).removeClass("nextitem");
			$('.item'+(n+1)).addClass("activeitem");
			
            $('.item'+(n+2)).removeClass("hiddenitem");
			$('.item'+(n+2)).addClass("nextitem");
            }else{
            $('.item'+(n-1)).removeClass("previtem");
			$('.item'+n).addClass("previtem");
            $('.item'+(n-1)).addClass("hiddenitem");
            
			$('.item'+(n+1)).removeClass("nextitem");
			$('.item'+(n+1)).addClass("activeitem");
			
            $('.item'+(n+2)).removeClass("hiddenitem");
			$('.item'+(n+2)).addClass("nextitem");
            }
		} else{
			$('.item'+(n-1)).removeClass("previtem");
			$('.item'+n).addClass("previtem");
            $('.item'+(n-1)).addClass("hiddenitem");
						
			$('.item'+(n+1)).removeClass("nextitem");
			$('.item'+(n+1)).addClass("activeitem");
			
            $('.item1').removeClass("hiddenitem");
			$('.item1').addClass("nextitem");
		}
	}
	else{
		$('.item'+(n-1)).removeClass("previtem");
		$('.item'+n).addClass("previtem");
        $('.item'+(n-1)).addClass("hiddenitem");
			
        $('.item1').removeClass("nextitem");
        $('.item1').addClass("activeitem");
			
        $('.item2').removeClass("hiddenitem");
        $('.item2').addClass("nextitem");
	}
	if(n==max){
	n=1;
	}
	else{
		n++;
	}
}

function prev(){	$('.item'+n).removeClass("activeitem");
	if(n!=1){
		if(n!=(2)){
            if(n==max){
            $('.item'+(max-1)).removeClass("previtem");
			$('.item'+(max-1)).addClass("activeitem");
            
			$('.item'+(n-2)).removeClass("hiddenitem");
			$('.item'+(n-2)).addClass("previtem");
                
			$('.item1').removeClass("nextitem");
            $('.item'+(max)).addClass("nextitem");
            $('.item1').addClass("hiddenitem");
            }else{
            $('.item'+(n-1)).removeClass("previtem");
			$('.item'+(n-1)).addClass("activeitem");
            
			$('.item'+(n-2)).removeClass("hiddenitem");
			$('.item'+(n-2)).addClass("previtem");
                
			$('.item'+(n+1)).removeClass("nextitem");
            $('.item'+(n)).addClass("nextitem");
            $('.item'+(n+1)).addClass("hiddenitem");
            }
		} else{
			$('.item'+(n-1)).removeClass("previtem");
			$('.item'+(n-1)).addClass("activeitem");
            
			$('.item'+(max)).removeClass("hiddenitem");
			$('.item'+(max)).addClass("previtem");
                
			$('.item'+(n+1)).removeClass("nextitem");
            $('.item'+(n)).addClass("nextitem");
            $('.item'+(n+1)).addClass("hiddenitem");
		}
	}
	else{
		$('.item'+(max)).removeClass("previtem");
			$('.item'+(max)).addClass("activeitem");
            
			$('.item'+(max-1)).removeClass("hiddenitem");
			$('.item'+(max-1)).addClass("previtem");
                
			$('.item'+(n+1)).removeClass("nextitem");
            $('.item'+(n)).addClass("nextitem");
            $('.item'+(n+1)).addClass("hiddenitem");
	}
	if(n==1){
	n=max;
	}
	else{
		n--;
	}
}
    
function switchPhoto(){
    
    if(s==1){
        return null;
    };
    
    if(s==2){
    $("#slide-sketch").removeClass("slide-active");
    $("#slide-sketch").addClass("slide-hidden");
    $("#slide-photo").removeClass("slide-hidden");
    $("#slide-photo").addClass("slide-active");
    }
    
    if(s==3){
    $("#slide-other").removeClass("slide-active");
    $("#slide-other").addClass("slide-hidden");
    $("#slide-photo").removeClass("slide-hidden");
    $("#slide-photo").addClass("slide-active");
    }
    
    s=1;
    
    if(n==1){
        $('.item'+max).removeClass("previtem");
    }else{
        $('.item'+(n-1)).removeClass("previtem");
    }
    $('.item'+n).removeClass("activeitem");
    if(n==max){
        $('.item1').removeClass("nextitem");
    }else{
	   $('.item'+(n+1)).removeClass("nextitem");
    }
    for(i=3; i<max; i++){
        $('.item'+i).addClass("hiddenitem");
    }
    $('.item1').removeClass("hiddenitem");
	$('.item1').addClass("activeitem");	
    $('.item'+(max)).removeClass("hiddenitem");
    $('.item'+(max)).addClass("previtem");
    $('.item2').removeClass("hiddenitem");
	$('.item2').addClass("nextitem");
    n=1;
}
    
function switchSketch(){
    
    if(s==2){
        return null;
    };
    
    if(s==1){
    $("#slide-photo").removeClass("slide-active");
    $("#slide-photo").addClass("slide-hidden");
    $("#slide-sketch").removeClass("slide-hidden");
        $("#slide-sketch").addClass("slide-active");
    }
    
    if(s==3){
    $("#slide-other").removeClass("slide-active");
    $("#slide-sketch").removeClass("slide-hidden");
    $("#slide-other").addClass("slide-hidden");
    $("#slide-sketch").addClass("slide-active");
    }

    s=2;
    
    if(n==1){
        $('.item'+max).removeClass("previtem");
    }else{
        $('.item'+(n-1)).removeClass("previtem");
    }
    $('.item'+n).removeClass("activeitem");
    if(n==max){
        $('.item1').removeClass("nextitem");
    }else{
	   $('.item'+(n+1)).removeClass("nextitem");
    }
    for(i=3; i<max; i++){
        $('.item'+i).addClass("hiddenitem");
    }
    $('.item1').removeClass("hiddenitem");
	$('.item1').addClass("activeitem");	
    $('.item'+(max)).removeClass("hiddenitem");
    $('.item'+(max)).addClass("previtem");
    $('.item2').removeClass("hiddenitem");
	$('.item2').addClass("nextitem");
    n=1;
}

function switchOther(){
    
    
    if(s==3){
        return null;
    };
    
    if(s==1){
    $("#slide-sketch").removeClass("slide-active");
    $("#slide-sketch").addClass("slide-hidden");
    $("#slide-other").removeClass("slide-hidden");
    $("#slide-other").addClass("slide-active");
    }
    
    if(s==2){
    $("#slide-sketch").removeClass("slide-active");
    $("#slide-sketch").addClass("slide-hidden");
    $("#slide-other").removeClass("slide-hidden");
    $("#slide-other").addClass("slide-active");
    }
    
    s=3;
    
    if(n==1){
        $('.item'+max).removeClass("previtem");
    }else{
        $('.item'+(n-1)).removeClass("previtem");
    }
    $('.item'+n).removeClass("activeitem");
    if(n==max){
        $('.item1').removeClass("nextitem");
    }else{
	   $('.item'+(n+1)).removeClass("nextitem");
    }
    for(i=3; i<max; i++){
        $('.item'+i).addClass("hiddenitem");
    }
    $('.item1').removeClass("hiddenitem");
	$('.item1').addClass("activeitem");	
    $('.item'+(max)).removeClass("hiddenitem");
    $('.item'+(max)).addClass("previtem");
    $('.item2').removeClass("hiddenitem");
	$('.item2').addClass("nextitem");
    n=1;
}
    
    
$(".next").on("click", next);
$(".prev").on("click", prev);

$("#photo").on("click", switchPhoto);
$("#sketch").on("click", switchSketch);
$("#other").on("click", switchOther);
	
	});