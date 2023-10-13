const Game = {	
	ctx: undefined,
	canvasW: undefined,
	canvasH: undefined,
	fps: 60,
	Keys: {
		RIGHT: 'ArrowRight',
		LEFT: 'ArrowLeft',
	},


	init: function () {
		const canvas = document.querySelector('canvas')
		this.ctx = canvas.getContext('2d')

		this.canvasW = canvas.width 
		this.canvasH = canvas.height 
		
		console.log('Test')

		this.reset()
	},

	reset: function(){
		console.log('RESET');

		
		this.background = new Background(this.ctx, this.canvasW, this.canvasH)






		this.background.draw()

		this.player = new Ambulance(this.ctx, this.canvasW, this.canvasH, this.Keys)
		console.log(this.player);

		this.player.draw();


		console.log(this.background);

		this.start()

	},

	start: function () {
		// loop de render

		let frameCounter = 0

		this.intervalId = setInterval(() => {
			frameCounter++
			this.ctx.clearRect(0, 0, this.canvasW, this.canvasH)

			// if (frameCounter % 50 === 0) {
			// 	this.generateObstacle()
			// }

			this.background.draw()
		

			// this.obstacles.forEach((obstacle) => {
			// 	obstacle.draw()
			// 	obstacle.move()
			// })

			// if (this.isCollision()) {
			// 	this.gameOver()
			// }

			this.player.draw(frameCounter)
			this.player.move()
			
		}, 1000 / this.fps)
	},

	gameOver: function () {
		// para el intervalo que implementa el loop de animación
		clearInterval(this.intervalId)

		if (confirm('GAME OVER! ¿Volver a jugar?')) {
			this.reset()
		}
	},



}
