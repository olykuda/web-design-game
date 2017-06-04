var M = 10;
var N = 6;

(function(n){
	var but_style =	'margin-right: 20px; width: 70px; height: 70px;border-radius: 0;border: none;background: #696969;color: white;font-size: 2em';
	var buttons = document.getElementById('buttons');
	for (i = 1; i <= n; i++){
		var but = document.createElement('BUTTON');
		var id = 'but' + i;
		but.setAttribute('id', id);
		but.setAttribute('style', but_style);
		but.innerHTML = i;
		buttons.appendChild(but);
	}

})(N);

var counterModule = (function (m,n) {
	var count = 0,current_number;
	var getCurNumb = function(){
		var min = 1;
		var max = n + 1;
		var current_number = Math.random()*(max - min) + min;
		current_number = Math.floor(current_number);
		return current_number;
	};
	
	var game = function(j) {
		if (j == 0) {
			return;
		}
		var clickcount = 0;
		if (current_number != undefined){
			document.getElementById('but' + current_number).onclick = function(){
			console.log('CLICK');
			if (clickcount++ == 0){
			count++;
			};
			}
		}
		console.log('CURR ' + current_number);
		setTimeout(function() {
			if (current_number != undefined){
			document.getElementById('but' + current_number).onclick = function(){console.log("WrongButton");} 	;
			}
			current_number = getCurNumb();
			document.getElementById('box').innerHTML = current_number;
			document.getElementById('result').innerHTML = 'TOTAL :   ' + count;
			game(j -= 1);
			},2000);
		};
	game(m);
})(M, N);