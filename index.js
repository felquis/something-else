var boxes = document.querySelectorAll('.box')
var boxContainer = document.querySelector('.box-container')

var boxCount = boxes.length
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

Array.prototype.slice.call(boxes).forEach(function (item, i) {
	var front = item.querySelector('.front')
	var back = item.querySelector('.back')

	front.src = images[ Math.floor(Math.random() * images.length) ]
	back.src = images[ Math.floor(Math.random() * images.length) ]
})

turnImage()

setInterval(turnImage, 2000)

function turnImage () {
	var item = Math.floor(Math.random() * boxCount)
	var box = boxes[item]

	box.classList.add('turn')

	setTimeout(function () {
		var front = box.querySelector('.front')
		var back = box.querySelector('.back')

		var aux = front.src
		front.src = back.src
		back.src = images[ Math.floor(Math.random() * images.length) ]
		box.classList.remove('turn')
	}, 1000)
}

fixScreen()
window.addEventListener('resize', fixScreen)

function fixScreen() {
	var boxWidth = (window.innerHeight / 5)
	var boxSize =  boxWidth + 'px'

	Array.prototype.slice.call(boxes).forEach(function (element) {
		element.style.height = boxSize
		element.style.width  = boxSize
	})

	var diff = window.innerWidth - (Math.floor(window.innerWidth / boxWidth) * boxWidth)

	boxContainer.style.width = window.innerWidth + boxWidth + 'px'
	boxContainer.style.marginLeft = -(boxWidth - diff) / 2 + 'px'
}