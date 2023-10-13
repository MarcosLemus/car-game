class Ambulance {
    constructor(ctx, canvasW, canvasH, Keys){
		console.log(Keys);
        this.ctx = ctx
        this.canvasW = canvasW
        this.canvasH = canvasH
		this.Keys = Keys

        this.img = new Image()

        this.img.src = 'assets/ambulance.png'

        this.img.frameIndex = 0
		this.img.frames = 3

        this.x = canvasW * 0.23
        this.y = canvasH * 0.75

		this.vx = -1

        this.w = 256
		this.h = 200

		this.setControls()




    }

	setControls() {
		document.addEventListener('keydown', (event) => {

			// if (event.code === this.Keys.RIGHT) {
			// 	this.x += this.vx
			// }else if (event.code === this.Keys.LEFT) {
			// 	this.x -= this.vx
			// }
			switch (event.code) {
				
				case this.keys.RIGHT:

					this.x += this.vx
			// 		// this.jumpSound.play()
			// 		// this.actions.jump = true

			// 		// if (this.y === this.y0) {
			// 		// 	console.log('SI')
			// 		// 	this.y = this.y0 - 1
			// 		// 	this.vy = -10
			// 		// }

					break

				case this.keys.LEFT:
					this.x -= this.vx

					break
			}
		})
	}

    draw(frameCounter) {


        this.ctx.drawImage(
			this.img,
			this.img.frameIndex * (this.img.width / this.img.frames), // sx
			0,
			this.img.width / this.img.frames,
			this.img.height,
			this.x,
			this.y,
			this.w,
			this.h
		)

		this.animateSprite(frameCounter)
        
    }



	animateSprite(frameCounter) {
		if (frameCounter % 6 === 0) {
			this.img.frameIndex++

			if (this.img.frameIndex >= this.img.frames) {
				this.img.frameIndex = 0
			}
		}
	}

	move() {

		this.x += this.vx
		// const gravity = 0.45

		// if (this.y < this.y0) {
		// 	this.vy += gravity
		// } else {
		// 	this.vy = 0
		// 	this.y = this.y0
		// }

		// this.y += this.vy
	}


}