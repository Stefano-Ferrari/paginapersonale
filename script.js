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
     if ($(this).offset().top-10 < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .removeClass("active")
         $("[href='#"+id+"']").addClass("active")
   }
    
});




//parallax 
// http://www.shinyface.com/2010/09/04/simple-parallax-with-jquery/
// https://greensock.com/forums/topic/17320-background-parallax-effect-on-mouse-move/
jQuery(document).ready(function($){
	$("#fotocontainer").mousemove(
        
		function(e){
			/* Work out mouse position */
			var offset = $(this).offset();
			var xPos = e.pageX - offset.left;
			var yPos = e.pageY - offset.top;

			/* Get percentage positions */
			var mouseXPercent = Math.round(xPos / $(this).width() * 100);
			var mouseYPercent = Math.round(yPos / $(this).height() * 100);
            
			/* Position Each Layer */
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