'use strict'

var boxContainer = document.querySelector('.box-container')
var boxWidth
var numberOfItems = 4
var total
var images = [
	'http://lorempixel.com/500/500/cats/1/',
	'http://lorempixel.com/500/500/cats/2/',
	'http://lorempixel.com/500/500/cats/3/',
	'http://lorempixel.com/500/500/cats/4/',
	'http://lorempixel.com/500/500/cats/5/',
	'http://lorempixel.com/500/500/cats/6/',
	'http://lorempixel.com/500/500/cats/7/',
	'http://lorempixel.com/500/500/cats/8/',
	'http://lorempixel.com/500/500/cats/9/',
	'http://lorempixel.com/500/500/cats/10/',
	'http://lorempixel.com/500/500/people/1/',
	'http://lorempixel.com/500/500/people/2/',
	'http://lorempixel.com/500/500/people/3/',
	'http://lorempixel.com/500/500/people/4/'
]

function turnImage () {
	var item = Math.floor(Math.random() * total)
	var box = document.querySelector(`.box:nth-child(${item})`)

	box.classList.add('turn')

	setTimeout(function () {
		var front = box.querySelector('.front')
		var back = box.querySelector('.back')

		var aux = front.src
		front.src = back.src
		back.src = images[ Math.floor(Math.random() * images.length) ]
		box.classList.remove('turn')
	}, 1000)

	setTimeout(turnImage, 2000)
}

function fixScreen () {
	boxWidth = (window.innerHeight / numberOfItems)
	var boxSize =  boxWidth + 'px'

	var diff = window.innerWidth - (Math.floor(window.innerWidth / boxWidth) * boxWidth)

	boxContainer.style.width = window.innerWidth + boxWidth + 'px'
	boxContainer.style.marginLeft = -(boxWidth - diff) / 2 + 'px'
}

function Box (size, images) {
	return `
		<div class="box" style="height: ${size}px; width: ${size}px">
			<img class="front" src="${images.front}" alt=""/>
			<img class="back" src="${images.back}" alt=""/>
		</div>
	`
}

function Boxes (size) {
	var boxes = []
	total = Math.ceil( (window.innerWidth / size) * (numberOfItems + 1))

	for (let i = total; i >= 0; i--) {
		boxes.push( Box(size, frontAndBack()) )
	}

	console.log(size)

	return boxes.join('')
}

function frontAndBack () {
	return {
		front: images[ Math.floor(Math.random() * images.length) ],
		back: images[ Math.floor(Math.random() * images.length) ]
	}
}

function renderBoxes (boxes) {
	console.log(boxes)

	boxContainer.innerHTML = boxes
}

fixScreen()
renderBoxes( Boxes() )

window.addEventListener('resize', fixScreen)