class TicTacToe {
    constructor() {
        this.player = "x";
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.player;   
    }

    nextTurn(rowIndex, colmnIndex) {
        this.rowIndex = rowIndex;
        this.colmnIndex = colmnIndex;
        if(this.getFieldValue(this.rowIndex, this.colmnIndex) === null) {
            this.matrix[this.rowIndex][this.colmnIndex] = this.player;
            if(this.player === "x") {
                this.player = "o";
            }
            else if (this.player === "o"){
                this.player = "x";
            }
        } 
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        if(this.matrix[this.rowIndex][this.colIndex] === null){
            return null;
        }
        
    }
}

module.exports = TicTacToe;