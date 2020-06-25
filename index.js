const circle = document.querySelector('circle');
const input = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);
circle.setAttribute('stroke-dashoffset', 0);

let duration;
const timer = new Timer(input, startButton, pauseButton, {
	onStart(total) {
		duration = total;
	},
	onTick(timeLeft) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeLeft / duration - perimeter);
	},
	onComplete() {
		console.log('fin');
	}
});
