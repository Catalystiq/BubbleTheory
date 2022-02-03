let size = 100
let bubbles = new Array(size)
let width = window.innerWidth
let height = window.innerHeight
let upperRadius = 1
let lowerRadius = 25
let move = 1

function setup() {
  createCanvas(width, height)
  bubbles = bubbles.fill().map(() => new Bubble(random(width), random(height), random(lowerRadius, upperRadius), width, height, '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0'), move, 4))
}

function draw() {
  background(0)
  for (let bubble = 0; bubble < bubbles.length; bubble++) {
    bubbles[bubble].move()
    bubbles[bubble].show()
  }
}

class Bubble {
  constructor(x, y, r, w, h, c, m, s) {
    this.x = x
    this.y = y
    this.r = r
    this.w = w
    this.h = h
    this.c = c
    this.m = m
    this.s = s
    this.dx = x
    this.dy = y
  }

  move() {
    if (this.x <= this.w && this.y <= this.h && this.x >= 0 && this.y >= 0) {
      this.x += random(-this.m, this.m)
      this.y += random(-this.m, this.m)
    } else {
      this.x = this.dx
      this.y = this.dy
    }
  }

  show() {
    stroke(this.c)
    fill(this.c)
    strokeWeight(this.s)
    ellipse(this.x, this.y, this.r * 2)
  }
}