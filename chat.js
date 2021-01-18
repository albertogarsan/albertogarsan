var chat = chat || {};

chat.Main = function () {
};

chat.Main.prototype = function () {

	//private members
	var	load = function(){
		document.getElementById('primeraPart').style.display = 'none';
		document.getElementById('segonaPart').style.display = 'none';
		document.getElementById('terceraPart').style.display = 'none';
		document.getElementById('quartaPart').style.display = 'none';
		document.getElementById('hi').innerHTML = "Hi there! My name is <span>Alberto Garsan</span>. <br>I am a Valencia-based <span>UI/UX Designer and Front-end developer.</span>";
		document.getElementById('text1').innerHTML = "Exploring the limits between visual design and technology through <span>code drives me nuts!</span>";

		$('#default').find('.contingut__hora--resposta').text(composeTime())


		$('#menuTxt').html('Try to say...');
		$('#btn1').html('More about!');
		$('#btn2').html('Where did you study?');
		$('#btn3').html('Experience');
		$('#btn4').html('Contact us!');
		$('#btn5').html('Hi, again!');
	},

	showBtn = function (selBtn) {
		if (selBtn === 0) {
			document.getElementById('primeraPart').style.display = 'flex';
			document.getElementById('primeraPart').style.flexDirection = 'column';
		
			
			$('#part1_1').html('More about!');
			$('#part1_2').html('For sure!');
			$('#part1_3').html('I absolutely love creating <span>minimal style</span> and I am really <span>interested in AR Environment</span>, using and involving visual experiences in each project by focussing on <span>creative ideas</span> that make people have <span>goosebumps</span> 😃');
			$('#part1_4').html('I’ll tell you a secret: I love exercising, playing clarinet, my laptop, my camera, good company and a good landscape to share with cool people 😎');
			

			$('#primeraPart').find('.contingut__hora').text(composeTime())
			$('#primeraPart').find('.contingut__hora--resposta').text(composeTime())


			if ($(window).width() < 1024) $('.menu__wrap').slideToggle();


			$('#primeraPart').scrollIntoView({ block: "start", behavior: "smooth" });
			
		}else if (selBtn === 1) {
			document.getElementById('segonaPart').style.display = 'flex';
			document.getElementById('segonaPart').style.flexDirection = 'column';
			

			$('#part2_1').html('Where did you study?');
			$('#part2_2').html('I studied <span>Interactive Digital Development Design at ESAT Valencia</span>  (2020-2021) and <span> Audiovisual Communication at the Polytechnic University of Valencia</span> (2014-2018).');
			$('#part2_3').html('One thing that characterizes my learning is that it has been a very <span>self-taught train</span>. My knowledge has increase thanks to every book, course, lecture and article.');
			$('#part2_4').html('<span>‘Never stop learning’</span>  could be my late motiv.');
			

			$('#segonaPart').find('.contingut__hora').text(composeTime())
			$('#segonaPart').find('.contingut__hora--resposta').text(composeTime())


			if ($(window).width() < 1024) $('.menu__wrap').slideToggle();


			$('#segonaPart').scrollIntoView({ block: "start", behavior: "smooth" });
			
		}else if (selBtn === 2) {
			document.getElementById('terceraPart').style.display = 'flex';
			document.getElementById('terceraPart').style.flexDirection = 'column';
			

			$('#part3_1').html('Experience?');
			$('#part3_2').html('Despite of the fact that I started my career as a comunicator and designer, I have been able to take place in diferent projects with social responsability');
			$('#part3_3').html('<span>A diabetic in the Dakar: <a href="https://www.undiabeticoeneldakar.org" target="_blank">undiabeticoeneldakar.org</a></span>');
			$('#part3_4').html('<span>The website of the village of Potries: <a href="https://www.potries.org" target="_blank">potries.org</a> | <a href="http://www.turisme.potries.org" target="_blank">turisme.potries.org</a> | <a href="http://musicfest.potries.org" target="_blank">musicfest.potries.org</a></span>');
			$('#part3_5').html('To conclude, this page has been designed and coded by my very self.');
			

			$('#terceraPart').find('.contingut__hora').text(composeTime())
			$('#terceraPart').find('.contingut__hora--resposta').text(composeTime())


			if ($(window).width() < 1024) $('.menu__wrap').slideToggle();


			$('#terceraPart').scrollIntoView({ block: "start", behavior: "smooth" });
			
		}else if (selBtn === 3){
			document.getElementById('quartaPart').style.display = 'flex';
			document.getElementById('quartaPart').style.flexDirection = 'column';
			
			
			$('#part4_1').html('Contact us!');
			$('#part4_2').html('<span>Join in</span> my vision of understanding life and feel free to talk to me for in-depht contact.');
			$('#part4_3').html('Here is my social media platforms: <span><a href="https://www.instagram.com/albertogarsan_" target="_blank">instagram</a>, <a href="https://www.linkedin.com/in/albertogarciasan/" target="_blank">linkedin</a></span>');
			$('#part4_4').html('<span><a href="mailto:albertogarsan@outlook.com" target="_blank">Mail me</a></span> and see my <span><a href="albertogarsan-cv.pdf" target="_blank">CV!</a></span>');
			

			$('#quartaPart').find('.contingut__hora').text(composeTime())
			$('#quartaPart').find('.contingut__hora--resposta').text(composeTime())


			if ($(window).width() < 1024) $('.menu__wrap').slideToggle();


			$('#quartaPart').scrollIntoView({ block: "start", behavior: "smooth" });
		}else{
			document.getElementById('primeraPart').style.display = 'none';
			document.getElementById('segonaPart').style.display = 'none';
			document.getElementById('terceraPart').style.display = 'none';
			document.getElementById('quartaPart').style.display = 'none';
			

			$('#default').find('.contingut__hora--resposta').text(composeTime())

			
			if ($(window).width() < 1024) $('.menu__wrap').slideToggle();
		}
		
	},

	menu = function(){
	$(".menu__wrap").slideToggle();
    $(window).resize(function(){
		  if($(window).width() > 1024){
			  $("ul").removeAttr('style');
		  }
    });
	},

	darkMode = function(){
		const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

		if (prefersDarkScheme.matches) {
    			document.body.classList.toggle("light-theme");
  		}else {
    		document.body.classList.toggle("dark-theme");
  		}
    },

	composeTime = function(){
		let date = new Date();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		
    if(minutes < 10) {
			minutes = '0' + minutes;
		}
    
		return hours + ':' + minutes;
	};
	
	//public members
	return {
		load: load,
		showBtn: showBtn,
		darkMode: darkMode,
		menu: menu
	};

}();			
