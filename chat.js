var chat = chat || {};

chat.Main = function () {
};

chat.Main.prototype = function () {

	//private members
	var	showBtn = function (selBtn) {
		if (selBtn === 0) {
			document.getElementById('primeraPart').style.display = 'flex';
			document.getElementById('primeraPart').style.flexDirection = 'column';
		}else if (selBtn === 1) {
			document.getElementById('segonaPart').style.display = 'flex';
			document.getElementById('segonaPart').style.flexDirection = 'column';
		}else if (selBtn === 2) {
			document.getElementById('terceraPart').style.display = 'flex';
			document.getElementById('terceraPart').style.flexDirection = 'column';
		}else if (selBtn === 3){
			document.getElementById('quartaPart').style.display = 'flex';
			document.getElementById('quartaPart').style.flexDirection = 'column';
		}else{
			document.getElementById('primeraPart').style.display = 'none';
			document.getElementById('segonaPart').style.display = 'none';
			document.getElementById('terceraPart').style.display = 'none';
			document.getElementById('quartaPart').style.display = 'none';
		}
		
		if ($(window).width() < 1024) $('#iconM').click();
		
	};

	//public members
	return {
		showBtn: showBtn
	};

}();			