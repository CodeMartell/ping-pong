const canvasEl = document.querySelector("canvas")
const canvasCtx = canvasEl.getContext("2d")
gapX = 10
const lineWidth = 15

const field = {
    w: window.innerWidth,
    h: window.innerHeight,
    draw: function () {
        canvasCtx.fillStyle = "black"
        canvasCtx.fillRect(0, 0, this.w, this.h)
    },
}

const line = {
    w: 15,
    h: field.h,
    draw: function () {
        canvasCtx.fillStyle = "#ffffff"
        const x = field.w / 2 - this.w / 2
        const y = 0
        const w = this.w
        const h = this.h
        canvasCtx.fillRect(x, y, w, h)
    },
}

const leftPaddle = {
    x: gapX,
    y: 100,
    w: line.w,
    h: 200,
    draw: function() {
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    },

}

const rightPaddle = {
    x: field.w-line.w-gapX,
    y: 100,
    w: line.w,
    h: 200,
    draw: function() {
        canvasCtx.fillStyle = "ffffff"
        canvasCtx.fillRect(this.x, this.y, this.w, this.h)
    },
}

const score = {
    human: 1,
    computer: 2,
    draw: function() {
        canvasCtx.font = "bold 72px Arial"
        canvasCtx.textAlign = "center"
        canvasCtx.textBaseline = "top"
        canvasCtx.fillStyle = "#ffffff"
        canvasCtx.fillText(this.human, field.w / 4, 50)
        canvasCtx.fillText(this.computer, field.w / 4 + field.w / 2, 50)
    
    }
}


const ball = {
    x: 370,
    y: 120,
    r: 20,
    draw: function() {
        canvasCtx.fillStyle = "ffffff"
        canvasCtx.beginPath()
        canvasCtx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
        canvasCtx.fill()
    }
}




function setup() {
    canvasEl.width = field.w
    canvasCtx.width = field.w
    canvasEl.height = field.h
    canvasCtx.height = field.h
}
function draw() {
    // Desenho do campo
    field.draw()
    line.draw()
    leftPaddle.draw()
    rightPaddle.draw()
    score.draw()
    ball.draw()
}

setup()
draw()