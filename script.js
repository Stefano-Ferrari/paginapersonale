$(document).ready(function() {

	
//Scroll
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
  }, 400);
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
	   
	   if(id=="about"){
		   about();
	   }
	   if(id=="portfolio"){
		   portfolio();
	   }
	   if(id=="showcase"){
		   showcase();
	   }
   }
    
});
	
	
	//Animazioni
	function home() {
		$(".textcontainer").removeClass("slidein-bottom");
		$(".fotocontainer").removeClass("slidein-right");
	}
	
	home();
	
	function about() {
		$(".img").removeClass("slidein-left");
		$(".text").removeClass("slidein-right");
		$(".text2").removeClass("slidein-left");
		$(".img2").removeClass("slidein-right");
}
	function portfolio(){
		$("#portfolio-slider").removeClass("slidein-right");
	}
	
	function showcase(){
		$("#showcase-slider").removeClass("slidein-right");
	}
	
//Slideshow
var n = 1; //contatore
var l = 1; //contatore2
var s = 1; //switch
var i = 1; //contatore ciclo for
var max = 0; //numero massimo item
var maxshow = 4;
	
function next(){
	$('.item'+n).removeClass("activeitem");
	
	if(s==1){
		max=11;
	}else if(s==2){
		max=6;
	}else{
		max=9;
	}
	
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

function prev(){	
	$('.item'+n).removeClass("activeitem");
	
	if(s==1){
		max=11;
	}else if(s==2){
		max=6;
	}else{
		max=9;
	}
	
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
    max=11;
	

    if(s==1){
        return null;
    }else{
		$(".slide-container").css("opacity","0");
		setTimeout(function(){
	
    
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
    
    for(i=1; i<=max; i++){
		$('.item'+i).removeClass("hiddenitem");
		$('.item'+i).removeClass("nextitem");
		$('.item'+i).removeClass("previtem");
		$('.item'+i).removeClass("activeitem");
	}
    for(i=3; i<max; i++){
        $('.item'+i).addClass("hiddenitem");
    }
	$('.item1').addClass("activeitem");	
    $('.item'+(max)).addClass("previtem");
	$('.item2').addClass("nextitem");
    n=1;
		setTimeout(function(){
		$(".slide-container").css("opacity", "1");
	},300);
},300);
	
	}
}
    
function switchSketch(){
    max=6;
	

    if(s==2){
        return null;
    }else{
		$(".slide-container").css("opacity","0");
		setTimeout(function(){
    
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
    
    for(i=1; i<=max; i++){
		$('.item'+i).removeClass("hiddenitem");
		$('.item'+i).removeClass("nextitem");
		$('.item'+i).removeClass("previtem");
		$('.item'+i).removeClass("activeitem");
	}
    for(i=3; i<max; i++){
        $('.item'+i).addClass("hiddenitem");
    }
	$('.item1').addClass("activeitem");	
    $('.item'+(max)).addClass("previtem");
	$('.item2').addClass("nextitem");
    n=1;
		setTimeout(function(){
			$(".slide-container").css("opacity", "1");
	},400);
			},300);
	
	}
	
}

function switchOther(){
    max=9;    
	
	
    if(s==3){
        return null;
    }else{
		$(".slide-container").css("opacity","0");
		setTimeout(function(){
    
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
    console.log(max);
	for(i=1; i<=max; i++){
		$('.item'+i).removeClass("hiddenitem");
		$('.item'+i).removeClass("nextitem");
		$('.item'+i).removeClass("previtem");
		$('.item'+i).removeClass("activeitem");
	}
    for(i=3; i<max; i++){
        $('.item'+i).addClass("hiddenitem");
    }
	$('.item1').addClass("activeitem");	
    $('.item'+(max)).addClass("previtem");
	$('.item2').addClass("nextitem");
    n=1;
	setTimeout(function(){
		$(".slide-container").css("opacity", "1");
	},400);
	},300);
	
	}
		
}
    
    
$(".next").on("click", next);
$(".prev").on("click", prev);

$("#photo").on("click", switchPhoto);
$("#sketch").on("click", switchSketch);
$("#other").on("click", switchOther);
	
	function shownext(){	$('.show'+l).removeClass("activeitem");
	if(l!=maxshow){
		if(l!=(maxshow-1)){
            if(l==1){
			$('.show'+(maxshow)).removeClass("previtem");
			$('.show'+l).addClass("previtem");
            $('.show'+(maxshow)).addClass("hiddenitem");
						
			$('.show'+(l+1)).removeClass("nextitem");
			$('.show'+(l+1)).addClass("activeitem");
			
            $('.show'+(l+2)).removeClass("hiddenitem");
			$('.show'+(l+2)).addClass("nextitem");
            }else{
            $('.show'+(l-1)).removeClass("previtem");
			$('.show'+l).addClass("previtem");
            $('.show'+(l-1)).addClass("hiddenitem");
            
			$('.show'+(l+1)).removeClass("nextitem");
			$('.show'+(l+1)).addClass("activeitem");
			
            $('.show'+(l+2)).removeClass("hiddenitem");
			$('.show'+(l+2)).addClass("nextitem");
            }
		} else{
			$('.show'+(l-1)).removeClass("previtem");
			$('.show'+l).addClass("previtem");
            $('.show'+(l-1)).addClass("hiddenitem");
						
			$('.show'+(l+1)).removeClass("nextitem");
			$('.show'+(l+1)).addClass("activeitem");
			
            $('.show1').removeClass("hiddenitem");
			$('.show1').addClass("nextitem");
		}
	}
	else{
		$('.show'+(l-1)).removeClass("previtem");
		$('.show'+l).addClass("previtem");
        $('.show'+(l-1)).addClass("hiddenitem");
			
        $('.show1').removeClass("nextitem");
        $('.show1').addClass("activeitem");
			
        $('.show2').removeClass("hiddenitem");
        $('.show2').addClass("nextitem");
	}
	if(l==maxshow){
	l=1;
	}
	else{
		l++;
	}
}

function showprev(){	$('.show'+l).removeClass("activeitem");
	if(l!=1){
		if(l!=(2)){
            if(l==maxshow){
            $('.show'+(maxshow-1)).removeClass("previtem");
			$('.show'+(maxshow-1)).addClass("activeitem");
            
			$('.show'+(l-2)).removeClass("hiddenitem");
			$('.show'+(l-2)).addClass("previtem");
                
			$('.show1').removeClass("nextitem");
            $('.show'+(maxshow)).addClass("nextitem");
            $('.show1').addClass("hiddenitem");
            }else{
            $('.show'+(l-1)).removeClass("previtem");
			$('.show'+(l-1)).addClass("activeitem");
            
			$('.show'+(l-2)).removeClass("hiddenitem");
			$('.show'+(l-2)).addClass("previtem");
                
			$('.show'+(l+1)).removeClass("nextitem");
            $('.show'+(l)).addClass("nextitem");
            $('.show'+(l+1)).addClass("hiddenitem");
            }
		} else{
			$('.show'+(l-1)).removeClass("previtem");
			$('.show'+(l-1)).addClass("activeitem");
            
			$('.show'+(maxshow)).removeClass("hiddenitem");
			$('.show'+(maxshow)).addClass("previtem");
                
			$('.show'+(l+1)).removeClass("nextitem");
            $('.show'+(l)).addClass("nextitem");
            $('.show'+(l+1)).addClass("hiddenitem");
		}
	}
	else{
		$('.show'+(maxshow)).removeClass("previtem");
			$('.show'+(maxshow)).addClass("activeitem");
            
			$('.show'+(maxshow-1)).removeClass("hiddenitem");
			$('.show'+(maxshow-1)).addClass("previtem");
                
			$('.show'+(l+1)).removeClass("nextitem");
            $('.show'+(l)).addClass("nextitem");
            $('.show'+(l+1)).addClass("hiddenitem");
	}
	if(l==1){
	l=maxshow;
	}
	else{
		l--;
	}
}
	
	$(".shownext").on("click", shownext);
$(".showprev").on("click", showprev);
	

	});