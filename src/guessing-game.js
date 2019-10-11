class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.solution = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.solution = Math.round((this.min + this.max)/2);
        return this.solution;
    }

    lower() {
        this.max = this.solution;
    }

    greater() {
        this.min = this.solution;
    }
}

module.exports = GuessingGame;
