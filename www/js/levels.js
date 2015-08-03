

game.objects = {}
game.objects.brick = {width: 10, height: 10}
game.objects.brick2 = {width: 5, height: 5}
game.objects.brick3 = {width: 5, height: 5}


game.platforms = []
game.coins = []
game.enemies = []
game.endpoints = []
game.gates = []


game.platforms[1] = [

	
	
	{x: 20, y: 470, width: 350, height: 5, type: "brick", variable: brick, shm: false},	
    {x: 20, y: 500, width: 4650, height: 5, type: "brick", variable: brick, shm: false},	
		
		
		
	{x: 550, y: 330, width: 50, height: 10, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 550, min_y: 120, moving_positive: true} },
	{x: 650, y: 380, width: 50, height: 10, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 490, min_y: 120, moving_positive: false} },
	{x: 750, y: 440, width: 50, height: 10, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 450, min_y: 320, moving_positive: true} },

	{x: 790, y: 130, width: 300, height: 10, type: "brick", variable: brick, shm: false},


	{x: 1000, y: 397, width: 150, height: 20, type: "brick", variable: brick, shm: false },

	{x: 1180, y: 190, width: 500, height: 20, type: "brick", variable: brick, shm: false},
	{x: 1180, y: 210, width: 500, height: 20, type: "brick", variable: brick, shm: false},
				
	{x: 1300, y: 397, width: 150, height: 20, type: "brick", variable: brick, shm: false },

	{x: 1600, y: 397, width: 150, height: 20, type: "brick", variable: brick, shm: false },

	{x: 1800, y: 170, width: 40, height: 20, type: "brick", variable: brick, shm: false },


	{x: 1950, y: 400, width: 300, height: 20, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 490, min_y: 120, moving_positive: true} },

	{x: 2400, y: 100, width: 150, height: 20, type: "brick", variable: brick, shm: false },
	{x: 2400, y: 250, width: 150, height: 20, type: "brick", variable: brick, shm: false },
	{x: 2400, y: 400, width: 150, height: 20, type: "brick", variable: brick, shm: false },

	{x: 2560, y: 210, width: 50, height: 20, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 403, min_y: 97, moving_positive: true}},

	{x: 2620, y: 100, width: 150, height: 20, type: "brick", variable: brick, shm: false },
	{x: 2620, y: 250, width: 150, height: 20, type: "brick", variable: brick, shm: false },
	{x: 2620, y: 400, width: 150, height: 20, type: "brick", variable: brick, shm: false },

	{x: 2820, y: 210, width: 70, height: 20, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "y", max_y: 530, min_y: 250, moving_positive: true}},

	{x: 2997, y: 400, width: 100, height: 20, type: "brick", variable: brick, shm: false },
	{x: 3210, y: 400, width: 20, height: 20, type: "brick2", variable: brick, shm: false },
	//{x: 3370, y: 400, width: 20, height: 20, type: "brick3", variable: brick, shm: false },
	{x: 3445, y: 400, width: 20, height: 20, type: "brick", variable: brick, shm: false },
	{x: 3620, y: 400, width: 20, height: 20, type: "brick", variable: brick, shm: false },
	//{x: 3720, y: 400, width: 20, height: 20, type: "brick2", variable: brick, shm: false },
	{x: 3840, y: 400, width: 70, height: 20, type: "brick3", variable: brick, shm: false },
	


];

game.coins[1] = [
	{x: 380, y: 380, width: 20, height: 20, taken: false},
	{x: 430, y: 380, width: 20, height: 20, taken: false},
	{x: 480, y: 380, width: 20, height: 20, taken: false},
	{x: 530, y: 380, width: 20, height: 20, taken: false},
	{x: 580, y: 380, width: 20, height: 20, taken: false},
	{x: 630, y: 380, width: 20, height: 20, taken: false},
	{x: 680, y: 380, width: 20, height: 20, taken: false},

	{x: 780, y: 70, width: 20, height: 20, taken: false},
	{x: 820, y: 70, width: 20, height: 20, taken: false},
	{x: 860, y: 70, width: 20, height: 20, taken: false},
	{x: 900, y: 70, width: 20, height: 20, taken: false},
	{x: 940, y: 70, width: 20, height: 20, taken: false},
	{x: 980, y: 70, width: 20, height: 20, taken: false},

	{x: 980, y: 350, width: 20, height: 20, taken: false},
	{x: 950, y: 350, width: 20, height: 20, taken: false},

	{x: 1100, y: 350, width: 20, height: 20, taken: false},
	{x: 1030, y: 350, width: 20, height: 20, taken: false},
	{x: 1060, y: 350, width: 20, height: 20, taken: false},

	{x: 2030, y: 300, width: 20, height: 20, taken: false},
	{x: 2060, y: 300, width: 20, height: 20, taken: false},

	
	{x: 1200, y: 120, width: 20, height: 20, taken: false},
	{x: 1230, y: 120, width: 20, height: 20, taken: false},
	{x: 1260, y: 120, width: 20, height: 20, taken: false},
	{x: 1290, y: 120, width: 20, height: 20, taken: false},
	{x: 1320, y: 120, width: 20, height: 20, taken: false},
	{x: 1350, y: 120, width: 20, height: 20, taken: false},
	{x: 1380, y: 120, width: 20, height: 20, taken: false},
	{x: 1410, y: 120, width: 20, height: 20, taken: false},

	{x: 1970, y: 300, width: 20, height: 20, taken: false},
	{x: 2030, y: 300, width: 20, height: 20, taken: false},	
	{x: 2090, y: 300, width: 20, height: 20, taken: false},

	{x: 2410, y: 350, width: 20, height: 20, taken: false},
	{x: 2440, y: 350, width: 20, height: 20, taken: false},
	{x: 2470, y: 350, width: 20, height: 20, taken: false},

	{x: 2410, y: 200, width: 20, height: 20, taken: false},
	{x: 2440, y: 200, width: 20, height: 20, taken: false},
	{x: 2470, y: 200, width: 20, height: 20, taken: false},

	{x: 2410, y: 50, width: 20, height: 20, taken: false},
	{x: 2440, y: 50, width: 20, height: 20, taken: false},
	{x: 2470, y: 50, width: 20, height: 20, taken: false},

	{x: 2410, y: 350, width: 20, height: 20, taken: false},
	{x: 2440, y: 350, width: 20, height: 20, taken: false},
	{x: 2470, y: 350, width: 20, height: 20, taken: false},

	{x: 2410, y: 200, width: 20, height: 20, taken: false},
	{x: 2440, y: 200, width: 20, height: 20, taken: false},
	{x: 2470, y: 200, width: 20, height: 20, taken: false},

	{x: 2630, y: 50, width: 20, height: 20, taken: false},
	{x: 2660, y: 50, width: 20, height: 20, taken: false},
	{x: 2690, y: 50, width: 20, height: 20, taken: false},

	{x: 2630, y: 200, width: 20, height: 20, taken: false},
	{x: 2660, y: 200, width: 20, height: 20, taken: false},
	{x: 2690, y: 200, width: 20, height: 20, taken: false},


	{x: 2630, y: 350, width: 20, height: 20, taken: false},
	{x: 2660, y: 350, width: 20, height: 20, taken: false},
	{x: 2690, y: 350, width: 20, height: 20, taken: false},
];


game.enemies[1] = [
	
	{x: 800, y: 90, width:40, height:40, shm:{max:1050, min:800}, alive: true, going_positive: true,  speed: 0.7},
	{x: 840, y: 90, width:40, height:40, shm:{max:950, min:840}, alive: true, going_positive: true,  speed: 0.8},
	{x: 880, y: 90, width:40, height:40, shm:{max:1050, min:800}, alive: true, going_positive: true,  speed: 0.6},
	{x: 900, y: 90, width:40, height:40, shm:{max:1050, min:890}, alive: true, going_positive: true,  speed: 0.9},

	{x: 1180, y: 160, width:40, height:40, shm:{max:1656, min:1180}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1280, y: 160, width:40, height:40, shm:{max:1656, min:1180}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1380, y: 160, width:40, height:40, shm:{max:1656, min:1180}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1480, y: 160, width:40, height:40, shm:{max:1656, min:1180}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1580, y: 160, width:40, height:40, shm:{max:1656, min:1180}, alive: true, going_positive: true,  speed: 0.7},


	{x: 1000, y: 367, width:30, height:30, shm:{max:1110, min:1000}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1390, y: 367, width:30, height:30, shm:{max:1438, min:1313}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1430, y: 367, width:30, height:30, shm:{max:1438, min:1313}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1650, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1690, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0.7},

	{x: 2400, y: 70, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.9}, 
	{x: 2400, y: 70, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.7},
	{x: 2400, y: 70, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.8},

	{x: 2620, y: 70, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.5}, 
	{x: 2620, y: 70, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.7},
	{x: 2620, y: 70, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.4},
	
	{x: 2400, y: 220, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.6}, 
	{x: 2400, y: 220, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.8},
	{x: 2400, y: 220, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.7},

	{x: 2620, y: 220, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.5}, 
	{x: 2620, y: 220, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.7},
	{x: 2620, y: 220, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.9},
	
	{x: 2400, y: 370, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.9},
	{x: 2490, y: 370, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: false, speed: 0.5},
	{x: 2450, y: 370, width:30, height:30, shm:{max:2530, min:2400}, alive: true, going_positive: true,  speed: 0.7},

	{x: 2620, y: 370, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.5}, 
	{x: 2620, y: 370, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.7},
	{x: 2620, y: 370, width:30, height:30, shm:{max:2750, min:2620}, alive: true, going_positive: true,  speed: 0.3},

	{x: 3846, y: 370, width:30, height:30, shm:{max:3850, min:3850}, alive: true, going_positive: true,  speed: 0},

]

game.gates[1] = {x:3917, y: 250, width: 200, height: 200,type:"brick"}
game.endpoints[1] = {start: {x: 50, y:200} }




game.platforms[2] = [
	{x: 50, y: 460, width: 1350, height: 50, type: "brick", variable: brick, shm: false},

	{x: 50, y: 100, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 250, y: 100, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 350, y: 100, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 550, y: 180, width: 100, height: 10, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "x", max_x: 800, min_x: 530, moving_positive: true} },
	
];

game.coins[2] = [
	{x: 105, y: 225, width: 20, height: 20, taken: false},
	{x: 130, y: 225, width: 20, height: 20, taken: false},
	{x: 155, y: 225, width: 20, height: 20, taken: false},
	{x: 180, y: 225, width: 20, height: 20, taken: false},
	{x: 205, y: 225, width: 20, height: 20, taken: false},
];


game.enemies[2] = [
	{x: 1000, y: 367, width:30, height:30, shm:{max:1110, min:974}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1390, y: 367, width:30, height:30, shm:{max:1438, min:1313}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1430, y: 367, width:30, height:30, shm:{max:1438, min:1313}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1650, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0.7},
	{x: 1690, y: 367, width:30, height:30, shm:{max:1740, min:1609}, alive: true, going_positive: true,  speed: 0.7},
]

game.gates[2] = {x: 800, y:300, width: 200, height: 200}
game.endpoints[2] = {start: {x: 50, y:300}}



game.platforms[3] = [

	{x: 50, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 250, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 350, y: 350, width: 40, height: 50, type: "brick", variable: brick, shm: false},
	{x: 550, y: 380, width: 100, height: 10, type: "brick3", variable: brick3, shm: true, shm_info: {shm_in: "x", max_x: 800, min_x: 530, moving_positive: true} },
	
];

game.coins[3] = [
	{x: 105, y: 225, width: 20, height: 20, taken: false},
	{x: 130, y: 225, width: 20, height: 20, taken: false},
	{x: 155, y: 225, width: 20, height: 20, taken: false},
	{x: 180, y: 225, width: 20, height: 20, taken: false},
	{x: 205, y: 225, width: 20, height: 20, taken: false},
];


game.enemies[3] = [
	{x: 350, y: 322, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0.1},
	{x: 400, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 440, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 480, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 520, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 560, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 600, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
	{x: 640, y: 350, width:30, height:30, shm:{max:360, min:340}, alive: true, going_positive: true,  speed: 0},
]

game.gates[3] = {x: 1000, y:300, width: 200, height: 200}
game.endpoints[3] = {start: {x: 50, y:300}}





game.player.x = game.endpoints[level].start.x
game.player.y = game.endpoints[level].start.y