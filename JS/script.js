$(function() {
	//alert('Hello');
	//$('.thing').fadeOut();
	//$('h1').css("color","blue");
	//$('button').click(function(){
		//$('#box').fadeOut(1000);
	//});

	//$('h2,h3,h4').css("border","solid 1px red");
	//$('div#container').css("border","solid 1px red");
	//$('p.lead').css("border","solid 1px red");
	//$('li:first').css("border","solid 1px red");
	//$('div em').css("border","solid 1px red");
	//$(":header").css("border","solid 1px red");
	//$('div:contains("Brad")').css("border","solid 1px red");

	$('#box').click(function(){
		alert('you clicked didnt you my niggaaaaa hahhahahah smd you frickin don0ght');
	})
	$('input').blur(function(){
		if($(this).val()==""){
			$(this).css("border","solid 1px red");
			$('#box').text("a niggggg forgot summmm?? 	");

		}
	});


	$('input').keydown(function(){
		if($(this).val()!=""){
			$(this).css('border','solid 1px #777');
			$('#box').text('you good nigga')
		}
	});

	$('#box').hover(function(){
		$('#box').text("you hovered in");
		},function(){
		$('#box').text("you hovered out");
		});




	$('.notification-bar').delay(1000).slideDown().delay(1000).fadeOut();




	//$('h1').hide();
	//$('div.hidden').show();
	//$('div.hidden').fadeIn(1000);
	$('#box1').click(function(){
		$(this).fadeTo(1000,0.15,function(){
			$(this).slideUp();
		});
	});

	$('div.hidden').slideDown();
	$('button').click(function(){
		$('#box1').animate({
			width: 'toggle'
		});
	});


	$('#left').click(function(){
		$('.box').animate({
			left: "-=40px",
			fontSize: "-=2px"
		});
	});

	$('#right').click(function(){
		$('.box').animate({
			left: "+=40px",
			fontSize: "+=2px"
		});
	});

	$('#up').click(function(){
		$('.box').animate({
			top: "-=40px",
			opacity: "-=0.1"
		});
	});

	$('#down').click(function(){
		$('.box').animate({
			top: "+=40px",
			opacity: "+=0.1"
		});
	});


	$('#circle2').css({
		'background':'#8a8d22',
		'display':'inline-block',
		'color':'white',
		'text-align':'center',
		'line-height':'140px',
		'height':'140px',
		'width':'140px'
		
	}).addClass('circleShape');




	$('#go').click(function(){
		//alert('yoooo');
		var trackWidth1=$(window).width()-$('#car1').width();

		var raceTime1=Math.floor((Math.random()*5000)+1);
		var raceTime2=Math.floor( (Math.random()*5000) + 1);

		win=false;
		place="first";

		function checkWin(){
			if(win==false){
				win=true;
			}
			else{
				place="second"
			}	

		}

		$('#car1').animate({
			left:trackWidth1
		}, raceTime1, function(){
			checkWin();
			$('#raceInfo1 span').text('Came in at ' + place +' position and clocked in at ' + raceTime1 + ' milliseconds');
		});

		$('#car2').animate({
			left:trackWidth1
		}, raceTime2, function(){
			checkWin();
			$('#raceInfo2 span').text('Came in at ' + place +' position and clocked in at ' + raceTime2 + ' milliseconds');
		});
	});


	$('#reset').click(function(){	
		$('#car1').animate({
			left:"0"
		},function(){
			$('#raceInfo1 span').text('');
		});

		$('#car2').animate({
			left:"0"
		},function(){
			$('#raceInfo2 span').text('');
		});

	})
});