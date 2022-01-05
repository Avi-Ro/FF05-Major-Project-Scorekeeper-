var Player1point=0;
var Player2point=0;
var Reset = document.getElementById("reset")

function add(a){
	if(a==1){
		Player1point = Player1point + 1;
		document.getElementById("Player1point").innerHTML = Player1point;
	}else{
		Player2point = Player2point + 1;
		document.getElementById("Player2point").innerHTML = Player2point;
	}
}
function deduct(a){
	if(a==1){
		Player1point = Player1point - 1;
		document.getElementById("Player1point").innerHTML = Player1point;
	}else{
		Player2point = Player2point - 1;
		document.getElementById("Player2point").innerHTML = Player2point;
	}
}
Reset.addEventListener("click", function()
{
	reset();
   });

	function reset()
	{
		Player1point = 0;
		Player2point = 0;
		window.location.href="http://127.0.0.1:5500/index.html";
	}
