var showStartUpScreen = true;
var lastKeyPressed_left_or_right = "";
var game = {};
var coordinates = {x:0, y:0};
var showLives = 0;
var showLevels = 0;
var showGameOver = 0;
var mouse_pressed = true;
var collidedWithEnemy = false;
var level = 1;
var showHappiness = 0;
var frame = 0;
var max_frame = 0;
var jumpUp = false;


var Run = new Image();
var RunLeft = new Image();
var RunRight = new Image();
var coin = new Image();
var brick = new Image();
var brick2 = new Image();
var brick3 = new Image();
var enemy = new Image();
//var bg = new Image();

enemy.src = "img/enemy.png";
coin.src = "img/coin.gif";
brick3.src = "img/brick3.jpg";
brick2.src = "img/brick2.png";
brick.src = "img/brick.png";
Run.src = "img/Run.png";
RunRight.src = "img/RunRight.png";
RunLeft.src = "img/RunLeft.png";
//bg.src = "img/bg.jpg";

var jump_on_enemy = []
for(i=0;i<5;i++) {
 jump_on_enemy[i] = new Audio()
 jump_on_enemy[i].src = "Sounds/firework.wav"
}

var gameover_really = new Audio()
gameover_really.src = "Sounds/gameover_really.mp3"
var jump = new Audio()
jump.src = "Sounds/jump.wav"
var gameover_sound = new Audio()
gameover_sound.src = "Sounds/gameover.wav"
var main_music = new Audio()
jump_on_enemy.src = "Sounds/firework.mp3"
main_music.src = "Sounds/main.mp3"

var coin_taken = []
for(i=0;i<10;i++) {
	coin_taken[i] = new Audio()
	coin_taken[i].src = "Sounds/coin.wav"
}

var canvas = document.getElementById("my_game");
var context = canvas.getContext("2d");

game.keyboard = [];

for(var i = 0; i < 256; i++){
	game.keyboard.push(0);
}

window.onkeyup = function(event){
	game.keyboard[getKey(event)]=0;
}
window.onkeydown = function(event) {
	if(event.keyCode == 37) {
		lastKeyPressed_left_or_right = "left";
	}
	if(event.keyCode == 39) {
		lastKeyPressed_left_or_right = "right";
	}
	game.keyboard[getKey(event)] = 1;
}/**
function moveR(){
	lastKeyPressed_left_or_right = "right";
	
	//alert("right");
};
function stop(){
	lastKeyPressed_left_or_right="";
}
function moveL(){
	lastKeyPressed_left_or_right = "left";
	//alert("left");
	
};
window.onmousedown = function() {
	mouse_pressed = true;
}**/

/**window.onmouseup = function() {
	mouse_pressed = false;
}**/

var right = document.getElementById('right');
var left = document.getElementById('left');
var up = document.getElementById('up');

window.addEventListener('load', function(){

	right.addEventListener('touchstart',function(e) {
		lastKeyPressed_left_or_right = "right";
	},false)
	right.addEventListener('touchend', function(e){
		lastKeyPressed_left_or_right="";
        e.preventDefault();
    }, false)



	left.addEventListener('touchstart',function(e) {
		lastKeyPressed_left_or_right = "left";
	},false)
	left.addEventListener('touchend', function(e){
		lastKeyPressed_left_or_right="";
        e.preventDefault();
    }, false)


    up.addEventListener('touchstart',function(e) {
		jumpUp = true;
	},false)
	up.addEventListener('touchend', function(e){
		jumpUp = false;
        e.preventDefault();
    }, false)

 },false)


game.canvas = {}
game.canvas.width = window.innerWidth - 20
game.canvas.height = window.innerHeight - 20
canvas.setAttribute("width", game.canvas.width+"px")
canvas.setAttribute("height", game.canvas.height+"px")

game.player = {}
game.player.collided = false
game.player.collided_direction = ""
game.player.x = 160
game.player.y = 130
game.player.default_width = 30
game.player.default_height = 40
game.player.width = 50
game.player.height = 60
game.player.gravity = 0.06
game.player.velocity_x = 0
game.player.velocity_y = 0
game.player.lives = 3
game.player.coins_taken = 0


function up(){
	game.player.collided_direction = "up";
};
game.player.draw_player = function() {

	if(lastKeyPressed_left_or_right == "left") Run = RunLeft;
	else if(lastKeyPressed_left_or_right=="right") Run = RunRight;
	
	context.drawImage(Run, game.player.x - frame, game.player.y, game.player.width, game.player.height);

}
/**game.player.changeXY = function() {
		
		if(game.player.collided == true && (game.keyboard[38] || game.keyboard[32]) && game.player.collided_direction=="down") {
			jump.play()
			game.player.velocity_y = -3
		}
		if(game.keyboard[37] || lastKeyPressed_left_or_right == "left" && game.player.x > max_frame){
			 game.player.x -=2;  
		}
		if(game.keyboard[39] || lastKeyPressed_left_or_right == "right" && game.player.collided_direction != "right"){
			//if(game.keyboard[39]) game.player.x +=1;
			game.player.x +=2;			
		}
		if(game.player.collided == true && game.player.velocity_y > 0) 
			return;
		game.player.velocity_y += game.player.gravity
		game.player.y += game.player.velocity_y
}**/
game.player.changeXYOnclick = function(){
	if(game.player.collided == true && jumpUp == true && game.player.collided_direction=="down") {
			jump.play()
			game.player.velocity_y = -3
		};
	if(lastKeyPressed_left_or_right == "left"&& game.player.x > max_frame){
		game.player.x -=2; 
		
	};
	if (lastKeyPressed_left_or_right == "right"&& game.player.collided_direction != "right") {
		game.player.x +=2;
	};
	if(game.player.collided == true && game.player.velocity_y > 0) 
		return;
	game.player.velocity_y += game.player.gravity
	game.player.y += game.player.velocity_y
}

game.detectCollision = function(box1, box2) {
	return (box1.x <= box2.x + box2.width && box2.x <= box1.x + box1.width && box1.y <= box2.y + box2.height && box2.y <= box1.y + box1.height)
}

game.detectCollisions = function() {
	var resultforloop = false;
	for(i=0;i<game.platforms[level].length;i++) {

		if(game.detectCollision(game.player, game.platforms[level][i])) {
			resultforloop = true;
			game.player.collided = true;
			
			if(game.player.y + game.player.height - game.platforms[level][i].y < 10) {

				if(game.platforms[level][i].shm == true) {

						if(game.platforms[level][i].shm_info.shm_in == "x") {
						if(game.platforms[level][i].shm_info.moving_positive == true) game.player.x  += 0.5;
						else game.player.x  -= 0.5;		
					}
				}
				game.player.velocity_y = 0
				game.player.collided_direction = "down";
				game.player.y = game.platforms[level][i].y - game.player.height;
				return;
			}
			
			else if(Math.abs(game.player.y - game.platforms[level][i].height - game.platforms[level][i].y) < 5) {
				game.player.collided_direction = "up";
				game.player.y = game.platforms[level][i].y + game.platforms[level][i].height + 1
				game.player.velocity_y = 0
				resultforloop = false;
				game.player.collided = false;
//				return;
			}
			
			
			
			else if(lastKeyPressed_left_or_right == "right") {				
				game.player.collided_direction = "right";
				//alert("Mover R");
				game.player.x = game.platforms[level][i].x - game.player.width - 10;
				game.player.y = game.platforms[level][i].y + game.platforms[level][i].height;
//				game.player.velocity_y = 0;
				return;
			}
			else if(lastKeyPressed_left_or_right == "left") {
				//alert("Move L");
				game.player.collided = false;
				game.player.x = game.platforms[level][i].x + game.platforms[level][i].width + 1
				game.keyboard.collided_direction = "left";
				game.player.y = game.platforms[level][i].y + game.platforms[level][i].height;
//				game.player.velocity_y = 0;
				return;
			}
			
			else if(game.keyboard[38]) game.player.velocity_y = 0;
		
			
			return;
		}	
		
		else {
			if(resultforloop == true) {
				//alert("res");
				return;
			}	
		}
	}
	
	if(resultforloop == false) {
		game.player.collided = false;
		game.player.collided_direction = "up";
		//alert("last")
	}
}



game.draw_enemies = function() {
	for(i=0;i<game.enemies[level].length;i++) {
		if(game.enemies[level][i].alive) {
			context.drawImage(enemy, game.enemies[level][i].x - frame, game.enemies[level][i].y, game.enemies[level][i].width, game.enemies[level][i].height);
		} else {
			if(game.enemies[level][i].height > 0)
				context.drawImage(enemy, game.enemies[level][i].x - frame, game.enemies[level][i].y, game.enemies[level][i].width, game.enemies[level][i].height);
		}
	}
}

game.shm_enemies = function() {
	for(i=0;i<game.enemies[level].length;i++) {
		if(game.enemies[level][i].alive) {
			if(Math.floor(game.enemies[level][i].x) == game.enemies[level][i].shm.min) {
				game.enemies[level][i].x = game.enemies[level][i].shm.min + 1;
				game.enemies[level][i].going_positive = true;
			} else if(Math.floor(game.enemies[level][i].x) == game.enemies[level][i].shm.max) {
				game.enemies[level][i].x = game.enemies[level][i].shm.max - 1;
				game.enemies[level][i].going_positive = false;
			} else {
				if(game.enemies[level][i].going_positive) game.enemies[level][i].x+= game.enemies[level][i].speed;
				else game.enemies[level][i].x-= game.enemies[level][i].speed;
			}
		} else {
			if(game.enemies[level][i].height > 0) {
				jump_on_enemy[i%5].play()
				game.enemies[level][i].y += 0.3
				game.enemies[level][i].height -= 0.3
			}
		}
	}
}

game.shm_platforms = function() {
	for(i=0;i<game.platforms[level].length; i++) {
		if(game.platforms[level][i].shm == true) {
			if(game.platforms[level][i].shm_info.shm_in == "x") {
					if(game.platforms[level][i].x == game.platforms[level][i].shm_info.max_x) game.platforms[level][i].shm_info.moving_positive = false;
					if(game.platforms[level][i].x == game.platforms[level][i].shm_info.min_x) game.platforms[level][i].shm_info.moving_positive = true;
					
					if(game.platforms[level][i].shm_info.moving_positive) game.platforms[level][i].x += 0.5
					else game.platforms[level][i].x -= 0.5
				
			} else {
					if(game.platforms[level][i].y == game.platforms[level][i].shm_info.max_y) game.platforms[level][i].shm_info.moving_positive = false;
					if(game.platforms[level][i].y == game.platforms[level][i].shm_info.min_y) game.platforms[level][i].shm_info.moving_positive = true;
					
					if(game.platforms[level][i].shm_info.moving_positive) game.platforms[level][i].y += 0.5
					else game.platforms[level][i].y -= 0.5
				
		
			}
		}
	}
}

game.draw_platforms = function() {
	for(i=0;i<game.platforms[level].length;i++) {
			var x_start = game.platforms[level][i].x
			var y_start = game.platforms[level][i].y
			var x_number = game.platforms[level][i].width / game.objects[game.platforms[level][i].type].width;
			var y_number = game.platforms[level][i].height / game.objects[game.platforms[level][i].type].height;
			
			
			for(k=0;k<x_number;k++) {
				for(l=0;l<y_number;l++) {
					context.drawImage(game.platforms[level][i].variable, x_start + game.objects[game.platforms[level][i].type].width * k - frame, y_start + game.objects[game.platforms[level][i].type].height * l, game.objects[game.platforms[level][i].type].width, game.objects[game.platforms[level][i].type].height)
				}
			}
	}
}

function moveFrame() {
	frame = Math.max(frame,game.player.x - game.canvas.width/2)
	max_frame = frame
}

function getKey(event) {
	if(event.charCode == 0) return event.keyCode;
	return event.charCode;
}


function draw() {
	
	if(showStartUpScreen == true) {
			
			context.clearRect(0, 0, game.canvas.width, game.canvas.height)
			showBackground()
			game.player.draw_player()
			game.shm_platforms()
			writeToHomeScreen()
			game.draw_platforms()
			game.draw_coins()
			game.shm_enemies()
			game.draw_enemies()

		} else if(showHappiness) {

			decreaseSizeOfPlayer(0.5)
			showHappiness++;
			context.clearRect(0, 0, game.canvas.width, game.canvas.height)
			showBackground()
			drawGates()
			game.shm_platforms()
			game.draw_platforms()
			game.player.draw_player()
			game.draw_coins()
			game.shm_enemies()
			main_music.pause()
			game.draw_enemies()
			jump_on_enemy[Math.floor(Math.random() * 5)].play()
			jump_on_enemy[Math.floor(Math.random() * 5)].play()

			if(showHappiness > 300) {
				showHappiness = 0;
				showLevels = 1;
			}
			
		} else if(showLives)  {
		
			if(gameover_sound.ended) {
				if(showLives == 1) {
					decreaseSizeOfPlayer()
					game.player.lives -=1;
					frame = 0;
					max_frame = 0;
					game.player.x = game.endpoints[level].start.x;
					game.player.y = game.endpoints[level].start.y;
		
					refreshKeyboard()
				}
				context.clearRect(0, 0, game.canvas.width, game.canvas.height)
				showBackground()
				showLivesInText()
				writeCoordinates()
				showLives++;

				if(showLives > 500) showLives = 0;
				
			} else {
				context.clearRect(0, 0, game.canvas.width, game.canvas.height)
				showBackground()
				drawGates()
				decreaseSizeOfPlayer(0.03)
				game.draw_platforms()
				game.player.draw_player()
				game.draw_coins()
				game.draw_enemies()
				
			}
			
		} else if(showGameOver) {
				
				if(showGameOver++ > 700) {
					window.location.href += ""
				}
			
		} else if(showLevels) {

			main_music.pause()
			context.clearRect(0, 0, game.canvas.width, game.canvas.height)
			writeCoordinates()
			showLevels++;

			if(showLevels > 500) {
				showLevels = 0;
				restartLevel()
			}
			
		} else {

			context.clearRect(0, 0, game.canvas.width, game.canvas.height)
			showBackground()
			writeCoordinates()
			drawGates()
			moveFrame()
			game.detectCollisions()
			isLevelCleared()

			if(game.player.collided_direction == "none") game.player.collided = false;
			game.shm_platforms()
			//game.player.changeXY()
			game.player.changeXYOnclick()
			game.draw_platforms()
			game.player.draw_player()
			game.detectCollisionWithCoins()
			game.draw_coins()
			game.shm_enemies()
			main_music.play()
			game.draw_enemies()
			game.detectCollisionWithEnemies()	

			if(gameover()) handleGameOver()
				putScore()
	}
	
  	
}
function gameover() {
//	if(game.player.x < frame - game.player.width) handleGameOver()
//	if(game.player.x < frame) game.player.x = frame;
	if(game.player.y > game.canvas.height) return true;
	if(collidedWithEnemy) {
		collidedWithEnemy = false;
		return true;
	}
}

function handleGameOver() {
	main_music.pause()
	if(game.player.lives > 1) {
		gameover_sound.play()
		showLives = 1;

		
	} else {
		context.drawImage(gameover_image, 200, 200);
		game.player.lives = 0;
		gameover_really.play()
		showGameOver = 1;
	}
}

game.draw_coins  = function() {
	for(i=0;i<game.coins[level].length; i++) {
		if(game.coins[level][i].taken == false) {
			context.drawImage(coin, game.coins[level][i].x - frame, game.coins[level][i].y, game.coins[level][i].width, game.coins[level][i].height);
		}
		if(game.coins[level][i].taken == true && game.coins[level][i].width > 0) {
			game.coins[level][i].width = game.coins[level][i].width - 0.5;
			game.coins[level][i].y = game.coins[level][i].y - 3;
			context.drawImage(coin, game.coins[level][i].x - frame, game.coins[level][i].y, game.coins[level][i].width, game.coins[level][i].height);
		}
	}
}

game.detectCollisionWithCoins = function() {
	for(i=0;i<game.coins[level].length;i++) {
		if(game.coins[level][i].taken == false) {
			if(game.detectCollision(game.player, game.coins[level][i])) {
				coin_taken[i%10].play()
				game.coins[level][i].taken = true;
				game.player.coins_taken++;
			}
		}
	}
}

game.detectCollisionWithEnemies = function() {
	for(i=0;i<game.enemies[level].length;i++) {
		if(game.enemies[level][i].alive) {
			if(game.detectCollision(game.player, game.enemies[level][i]) && ((game.player.y + game.player.height) - game.enemies[level][i].y < 5)) {
				game.player.velocity_y = -2
				game.enemies[level][i].alive = false;
			} else if(game.detectCollision(game.player, game.enemies[level][i])) {
				collidedWithEnemy = true;
			}
		}
	}
}

function putScore() {
	document.getElementById("score_coins").innerHTML = "<center> <strong> Coins taken: " + game.player.coins_taken + "</strong></center>";
}

canvas.onclick = function(event) {
	coordinates.x = (event.clientX - (window.innerWidth - canvas.clientWidth)/2) + 9;
	coordinates.y = event.clientY - 50
} 
function writeToHomeScreen() {
		context.fillStyle = "#000000"
		context.font = "30px Arial"
		context.fillText("Try to past session", 100, 100)
		context.strokeStyle = "#FF0000"
		context.strokeText("Try to past session", 100, 100)
		context.font= "10px Arial"
		try {
			context.fillText("X: "+ coordinates.x +", Y: "+ coordinates.y, 70, 50)
		} catch(e) {
		
		}
		context.lineWidth = 3
		context.strokeStyle = "#00FF00"
		context.fillRect(400, 100, 150, 50);
		context.strokeRect(400, 100, 150, 50);
		context.lineWidth = 1
		context.font = "30px Arial"

		
		if(game.detectCollision) {
			if(mouse_pressed) { 
				showStartUpScreen = false;
			}
		}
				
}

function isLevelCleared() {
	if(game.detectCollision(game.player, game.gates[level]) && game.player.velocity_y == 0) {
		main_music.pause()
//		showLevels = 1;
		showHappiness = 1;
		return true;
	}
}

function refreshKeyboard() {
	for(i=0;i<game.keyboard.length;i++) {
		game.keyboard[i] = 0;
	}
}

function restartLevel() {
	level++;
	decreaseSizeOfPlayer()
	game.player.x = game.endpoints[level].start.x;
	game.player.y = game.endpoints[level].start.y;
	frame = 0;
	max_frame = 0;
}

function drawGates() {
	context.fillRect(game.gates[level].x - frame, game.gates[level].y, game.gates[level].width, game.gates[level].height);
	context.strokeRect(game.gates[level].x - frame, game.gates[level].y, game.gates[level].width, game.gates[level].height);
}

function decreaseSizeOfPlayer(decreaseBy) {
	if(decreaseBy == undefined) {
		game.player.y = game.player.y + game.player.height - game.player.default_height 
		game.player.width = game.player.default_width
		game.player.height = game.player.default_height
		return;
	}
	decreaseByForX = (game.player.width/game.player.height) * decreaseBy;
	if(game.player.width - 2*decreaseByForX < 0 || game.player.height - 2*decreaseBy < 0) return;
	
	
	game.player.x += decreaseByForX;
	game.player.width -= 2*decreaseByForX;
	game.player.y += decreaseBy;
	game.player.height -= 2*decreaseBy;
	
}

function writeCoordinates() {
	var old_font = context.font;
	context.font = "10px Arial";
	context.fillText("X: "+ (frame + coordinates.x) +", Y: "+ coordinates.y, 70, 50)
	context.font = old_font;
}

function showLivesInText() {
	var old_font = context.font;
	context.font = "20px Arial";
	context.fillText("Lives left: x " + game.player.lives, 230, 200);
	context.font = old_font;

}
function showBackground() {
	
}
function pause(){
    document.getElementById('pause').style.display="block";
    document.getElementById('pause').style.position="absolute";
}

function resumeBtn(){
    document.getElementById('pause').style.display="none";
}






























