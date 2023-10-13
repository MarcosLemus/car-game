class Background {

    constructor(ctx, canvasW, canvasH) {
     this.ctx = ctx
     this.canvasW = canvasW
     this.canvasH = canvasH


     this.y = 0
     this.x = 0


     this.img = new Image()

     this.img.src = 'assets/road.png'
    
    }


    draw() {
       
        this.ctx.drawImage(this.img, this.x, this.y, this.canvasW, this.canvasH)
        
    
    }

    
}