var boxes = document.querySelectorAll('.box')
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
		// box.classList.add('turned')
		box.classList.remove('turn')
	}, 1000)
}

// var time

// box.addEventListener('click', function (event) {
// 	var target = event.currentTarget

// 	target.classList.toggle('turn')

// 	clearTimeout(time)

// 	time = setTimeout(function(){ 
// 		var front = target.querySelector('.front')
// 		var back = target.querySelector('.back')

// 		target.classList.remove('turn')

// 		front.classList.add('back')
// 		front.classList.remove('front')

// 		back.classList.add('front')
// 		back.classList.remove('back')
// 	}, 1000);
// })
