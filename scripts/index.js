$(document).ready(function(){
    $('.tempUnhide').click(function() {
		$('#about').toggle("slide");
		$('#promoVid').toggle("slide");
		$('#desProc').toggle("slide");
		$('#footer').toggle("slide");
    });
});

/*__________________________________________________________*/
var vh = window.innerHeight * 0.01;

/*var vidSrc = [
	{name: "vidBlank", class: "vidBlank", src: ""}, 
	{name: "animatic1", class: "animatic", src: "media/animatic01.mp4"},
	{name: "animatic2", class: "animatic", src: "media/animatic02.mp4"},
	{name: "animatic3", class: "animatic", src: "media/animatic03.mp4"}
];*/

var vidSrc = ["media/temp.mp4", "media/animatic-01.mp4", "media/animatic-02.mp4", "media/animatic-03.mp4", ""];

function openNav() {
	document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
	document.getElementById("myNav").style.height = "0%";
}

function openVid0() {
	$('#vidAnimatic video source').attr('src', vidSrc[3]);
	$("#vidAnimatic video")[0].load();
		document.getElementById("vidOverlay").style.height = "100%";
}

function openVid1() {
	$('#vidAnimatic video source').attr('src', vidSrc[4]);
	$("#vidAnimatic video")[0].load();
		document.getElementById("vidOverlay").style.height = "100%";
}

function openVid2() {
	$('#vidAnimatic video source').attr('src', vidSrc[2]);
	$("#vidAnimatic video")[0].load();
		document.getElementById("vidOverlay").style.height = "100%";
}

function openVid3() {
	$('#vidAnimatic video source').attr('src', vidSrc[4]);
	$("#vidAnimatic video")[0].load();
		document.getElementById("vidOverlay").style.height = "100%";
}

function openVid4() {
	$('#vidAnimatic video source').attr('src', vidSrc[1]);
	$("#vidAnimatic video")[0].load();
		document.getElementById("vidOverlay").style.height = "100%";
}

function closeVid() {
	document.getElementById("vidOverlay").style.height = "0%";
	$('video').trigger('pause');
}


$(document).ready(function(){
    $('.btn').click(function() {
		$('#about').toggle("slide");
		$('#promoVid').toggle("slide");
		$('#desProc').toggle("slide");
		$('#footer').toggle("slide");
		// $('#mainJourney').scrollTop($('#mainJourney')[0].scrollHeight - $('#mainJourney')[0].clientHeight);
		// $("#mainJourney").animate({scrollTop: $('#mainJourney')[0].scrollHeight - $('#mainJourney')[0].clientHeight}, 1000);
    });

	$('.btn').click(function(e){
		e.preventDefault();
		// $('#about').slideToggle();
		$('html, body').animate({
			scrollTop: 5000
		}, 2000);
	});

	var controller;

	controller = new ScrollMagic.Controller();

	var sceneMap = new ScrollMagic.Scene({
		triggerElement: '#scrlTrigger',
		triggerHook: 0.7,
		duration: 3000*vh
	})
	.setPin('#pin1', {
		pushFollowers: false
	})
	// .setTween(tween1)
	.addTo(controller)
	// .addIndicators();

	var slides = document.querySelectorAll("header, section.pages");

	// create scene for every slide
	for (var i=0; i<slides.length; i++) {
		new ScrollMagic.Scene({
			triggerElement: slides[i],
			triggerHook: 'onLeave'
		})
		.setPin(slides[i], {
			pushFollowers: false
		})
		// .addIndicators() // add indicators (requires plugin)
		.addTo(controller);
	}
	
// DEL
	/*$("#dvid").hide(); //hide your div initially
    var showScr = $("#about").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() < showScr) { //scrolled past the other div?
            $("#about").show(); //reached the desired point -- show div
        }*/
        // else{
        //     $("#dvid").hide(); //else above the desired point -- hide div
        // }
    // });
// DEL

    window.pageYOffset === window.scrollY;

	var x = window.scrollY;

	if (x = 0) {
        $('#about').show();
	}

});
	