$(function(){
	$('.top div:first-child').addClass('bian')
	$('.ones').click(function(){
		$('.one').show();
		$('.ones').addClass('bian');
		$('.twos').removeClass('bian');
		$('.mesage').removeClass('bian');
		$('.threes').removeClass('bian');
		$('.fours').removeClass('bian');
		$('.bot1').removeClass('bian');
		$('.second').hide();
		$('.seconds').hide();
		$('.two').hide();
		$('.three').hide();
		$('.bots').hide();
		$('.meg').hide();
	});
	$('.twos').click(function(){
		$('.second').show();
		$('.ones').removeClass('bian');
		$('.threes').removeClass('bian');
		$('.mesage').removeClass('bian');
		$('.twos').addClass('bian');
		$('.fours').removeClass('bian');
		$('.bot1').removeClass('bian');
		$('.seconds').hide();
		$('.two').show();
		$('.one').hide();
		$('.three').hide();
		$('.bots').hide();
		$('.meg').hide();
	});
	$('.threes').click(function(){
		$('.three').show();
		$('.ones').removeClass('bian');
		$('.twos').removeClass('bian');
		$('.mesage').removeClass('bian');
		$('.threes').addClass('bian');
		$('.fours').removeClass('bian');
		$('.bot1').removeClass('bian');
		$('.one').hide();
		$('.seconds').hide();
		$('.two').hide();
		$('.bots').hide();
		$('.meg').hide();
	});
	$('.fours').click(function(){
		$('.ones').removeClass('bian');
		$('.twos').removeClass('bian');
		$('.threes').removeClass('bian');
		$('.mesage').removeClass('bian');
		$('.fours').addClass('bian');
		$('.three').hide();
		$('.bot1').removeClass('bian');
		$('.one').hide();
		$('.seconds').show();
		$('.two').hide();
		$('.bots').hide();
		$('.meg').hide();
	});
	$('.bot1').click(function(){
		$('.ones').removeClass('bian');
		$('.twos').removeClass('bian');
		$('.mesage').removeClass('bian');
		$('.threes').removeClass('bian');
		$('.fours').removeClass('bian');
		$('.bot1').addClass('bian');
		$('.three').hide();
		$('.one').hide();
		$('.seconds').hide();
		$('.two').hide();
		$('.bots').show();
		$('.meg').hide();
	});
	$('.mesage').click(function(){
		$('.ones').removeClass('bian');
		$('.twos').removeClass('bian');
		$('.mesage').addClass('bian');
		$('.threes').removeClass('bian');
		$('.fours').removeClass('bian');
		$('.bot1').removeClass('bian');
		$('.three').hide();
		$('.one').hide();
		$('.seconds').hide();
		$('.two').hide();
		$('.bots').hide();
		$('.meg').show();
	});
})