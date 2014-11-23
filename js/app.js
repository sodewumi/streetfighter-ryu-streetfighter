$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show(); 
	})
	.mouseleave(function() {
		$('.ryu-still').show();
		$('.ryu-ready').hide();
	})
	.mousedown(function() {
		//playHadouken();
		//bring out ryu throwing the hadouken
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		//play sound
		//show hadouken and animate it
		$('.hadouken').finish().show().animate(
								{'left' : '300px'}, 500,
								//callback function
								function() {
									$(this).hide();
									$(this).css('left', '-175px');
								});
	})
	.mouseup(function() {
		//ryu returns to ready
		$('.ryu-ready').show();
		$('.ryu-throwing').hide();	
	});

  //when you press the x key, ryu should transition to his "cool pose"
	$(document).keydown(function(e) {
	   if (e.keyCode == 88) {
	     $('.ryu-ready').hide();
	     $('.ryu-still').hide();
	     $('.ryu-cools').show();
	    }   
	    }).keyup(function(e) {
	    if (e.keyCode == 88) {
	     //how about if your cursor is on ryu and he's not moving?
	     $('.ryu-cools').hide();
	     $('.ryu-still').show();
	    }
	});

	// function playHadouken() {
	// 	$('#hadouken-sound')[0].volume() = 0.5;
 //  		$('#hadouken-sound')[0].load();
 //  		$('#hadouken-sound')[0].lay();
	// }
});



