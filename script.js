$(document).ready(function()
{
	$(".ArticlePanel").css("position", "relative");
	$("#header").css("position", "relative");
	$("#guitarImg img").css("position", "relative");
	$("#back2 .pageContent .ArticlePanel").animate({left: 1435},1);
	$("#back3 .pageContent .ArticlePanel").animate({left: -1435},1);
	$("#guitarImg img").animate({left: -1435},1);
	$("#back4 .pageContent .ArticlePanel").animate({left: 1435},1);
	console.log($(window).scrollTop())
	
	
	
	scroller = $(window).scrollTop();
	$( window ).scroll(function()
	{
		console.log($(window).scrollTop())
		$("#back2 .pageContent .ArticlePanel").animate({left: 2439 - scroller*3.04875},1);
		$("#back3 .pageContent .ArticlePanel").animate({left: -2439 + scroller*1.4781818181818181818181818181818},1);
		$("#guitarImg img").animate({left: -2439 + scroller*3.04875},1);
		
		if( (screen.availHeight || screen.height-30) <= window.innerHeight)
		{
			$("#back4 .pageContent .ArticlePanel").animate({left: 2331 - scroller},1);
			
			// browser is fullscreen
		}
		else
		{
			$("#back4 .pageContent .ArticlePanel").animate({left: 2439 - scroller},1);
			
		}
		
		
		if($(window).scrollTop() < 300)
			$("#header").animate({top: 0},1);
		
		scroller = $(window).scrollTop();
	});
	
	$( "#LGallery" ).click(function(event)
	{
		event.preventDefault();
		console.log(document.querySelector("body").scrollHeight)
		$('html, body').animate(
			{
				scrollTop: 800
			}, 1000, function(){$("#header").animate({top: scroller+10},1);});
	});
	
	$( "#LInfo" ).click(function(event)
	{
		event.preventDefault();
		console.log($(window).scrollTop())
		$('html, body').animate(
			{
				scrollTop: 1650
			}, 1000, function(){$("#header").animate({top: scroller + 20},1);});
	});
	
	$( "#LContactUs" ).click(function(event)
	{
		event.preventDefault();
		console.log($(window).scrollTop())
		$('html, body').animate(
			{
				scrollTop: 2439
			}, 1000, function(){$("#header").animate({top: scroller+100},1);});
	});
	
	$( "#LOverview" ).click(function(event)
	{
		event.preventDefault();
		console.log($(window).scrollTop())
		$('html, body').animate(
			{
				scrollTop: 0
			}, 1000, function(){$("#header").animate({top: 0},1);});
	});

	$('.cntrl').tilt({
	    scale: 1.1
	})
	
	///////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	$( ".carouselImg" ).click(function(event)
	{
		event.preventDefault();
		var box = new lightBoxAction(this.id, this.id);
		box.action();
		
	});
	
});

function lightBoxAction(_id, _page)							
{													
	this.id = "#"+_id;									
	this.page = _page;
}


lightBoxAction.prototype.positionLightboxImage = function()
{
	var top = ($(window).height() - $('#lightbox').height()) /5; 
		var left = ($(window).width() - $('#lightbox').width()) / 1.8; 
		$('#lightbox') 
			.css({ 
				'top': top + $(document).scrollTop(), 
				'left': left
			}) 
			.fadeIn(); 
			
		
				//process text file line by line
				$('#lightbox').html("<img src=images/" +this.page+".png />");
}

lightBoxAction.prototype.removeLightbox = function()
	{ 
		$('#overlay, #lightbox') 
			.fadeOut('slow', function() { 
				$(this).remove(); 
				$('body').css('overflow-y', 'auto'); // show scrollbars
				
			}); 
	}

lightBoxAction.prototype.action = function()
{	
	var pg = this;
	
	
	
	//$(String(this.id)).click(function()
	{
		console.log(pg)
		$('body').css('overflow-y', 'hidden'); 
		//Creating the overay div for the lightbox
		$('<div id="overlay"></div>') 
			.css('top', $(document).scrollTop()) 
			.css('opacity', '0') .animate({'opacity': '0.8'}, 'slow') .appendTo('body'); 
						
		$('<div id="lightbox"></div>') 
			.hide() 
			.appendTo('body');
		
		pg.positionLightboxImage();
			
		
		$('#overlay').click(function(page) 
			{ 
					pg.removeLightbox(); 
			}) ;	
	}//);
}

