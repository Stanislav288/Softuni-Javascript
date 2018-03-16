function exercise() {
    class Player {
        constructor(nickname) {
            this.nickname = nickname;
            this.scores = [];
        }

        get scoreCount() {
            return this.scores.length;
        }

        get highestScore() {
            return this.scores[0];
        }

        get topFiveScore() {
            return this.scores.slice(0, 5);
        }

        addScore(score) {
            if(!isNaN(score) && score !== null){
                this.scores.push(+score);
                this.scores.sort((a,b) => b-a);
            }

            return this;
        }

        toString() {
            return `${this.nickname}: [${this.scores.join(',')}]`;
        }
    }
}

exercise();