class Timer {
	constructor(input, startButton, pauseButton, callbacks) {
		this.input = input;
		this.startButton = startButton;
		this.pauseButton = pauseButton;

		//Optional callback functions
		if (callbacks) {
			({ onStart: this.onStart, onComplete: this.onComplete, onTick: this.onTick } = callbacks);
		}

		this.startButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		if (this.onStart) {
			this.onStart(this.timeLeft);
		}

		this.tick();
		this.id = setInterval(this.tick, 20);
	};

	pause = () => {
		clearInterval(this.id);
	};

	tick = () => {
		if (this.timeLeft <= 0) {
			this.pause();
			if (this.onComplete) {
				this.onComplete();
			}
		} else {
			this.timeLeft = this.timeLeft - 0.02;
			if (this.onTick) {
				this.onTick(this.timeLeft);
			}
		}
	};

	get timeLeft() {
		return parseFloat(this.input.value);
	}

	set timeLeft(value) {
		this.input.value = value.toFixed(2);
	}
}
