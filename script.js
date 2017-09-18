$(document).ready(function()
{
	$(".ArticlePanel").css("position", "relative")
	$("#header").css("position", "relative")
	$("#back2 .pageContent .ArticlePanel").animate({left: 1435},1);
	$("#back3 .pageContent .ArticlePanel").animate({left: -1435},1);
	$("#back4 .pageContent .ArticlePanel").animate({left: 1435},1);
	console.log($(window).scrollTop())
	
	
	
	scroller = $(window).scrollTop();
	$( window ).scroll(function()
	{
		console.log($(window).scrollTop())
		$("#back2 .pageContent .ArticlePanel").animate({left: 1425 - scroller*2.391},1);
		$("#back3 .pageContent .ArticlePanel").animate({left: -1425 + scroller*1.025},1);
		$("#back4 .pageContent .ArticlePanel").animate({left: 1425 - scroller*0.727},1);
		
		if($(window).scrollTop() < 300)
			$("#header").animate({top: 0},1);
		
		scroller = $(window).scrollTop();
	});
	
	$( "#LGallery" ).click(function(event)
	{
		event.preventDefault();
		console.log($(window).scrollTop())
		$('html, body').animate(
			{
				scrollTop: 600
			}, 1000, function(){$("#header").animate({top: scroller+100},1);});
	});
	
	$( "#LInfo" ).click(function(event)
	{
		event.preventDefault();
		console.log($(window).scrollTop())
		$('html, body').animate(
			{
				scrollTop: 1400
			}, 1000, function(){$("#header").animate({top: scroller + 20},1);});
	});
	
	$( "#LContactUs" ).click(function(event)
	{
		event.preventDefault();
		console.log($(window).scrollTop())
		$('html, body').animate(
			{
				scrollTop: 1960
			}, 1000, function(){$("#header").animate({top: scroller+170},1);});
	});
	
	$( "#LOverview" ).click(function(event)
	{
		event.preventDefault();
		console.log($(window).scrollTop())
		$('html, body').animate(
			{
				scrollTop: 0
			}, 1000, function(){$("#header").animate({top: scroller},1);});
	});
	
	
});


