canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, onloading essa variável
	backgroundImgTag.src = backgroundImage;   // carregue a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova image
	roverImgTag.onload = uploadrover; // ajustando uma função, onloading essa variável
	roverImgTag.src = roverImage;   // carregue a imagem
}

function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keypressed = e.keyCode;
	console.log(keypressed)

	if(keypressed == "38"){
		console.log("cima")
		up()
}
if(keypressed == "39"){
	console.log("direita")
	right()
}
if(keypressed == "37"){
	console.log("esquerda")
	left()
}
if(keypressed == "40"){
	console.log("baixo")
	down()
}



	
		//Fim da Atividade Adicional
}
//Coberto na C85. 
function up()
{
	if(roverY >= 0)

		roverY= roverY - 10
		uploadBackground();
		uploadrover();
		
	}
	

function down()
{
	if(roverY >=0){
		roverY = roverY + 10;
		uploadBackground()
		uploadrover();
	}
	
}											
function left()
{
	if(roverX <= 0){
		roverX = roverX - 10;
		uploadBackground();
		uploadrover();


	}

	
}
function right()
{
	if(roverX <= 600){
		roverX = roverX + 10;
		uploadBackground();
		uploadrover();


	}
	




}
	