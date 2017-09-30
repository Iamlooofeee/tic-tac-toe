class TicTacToe {
    constructor() {
        this.player = "x";
        this.matrix = [];
        for (var i = 0; i < 3; i++) {
            this.matrix[i] = [];
            for (var j = 0; j < 3; j++) {
                this.matrix[i][j] = null;
            }
        }
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
        if(this.getWinner() === 'x' || this.getWinner() === 'o' || this.isDraw() === true) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {

    //////
        var winner = 0;
        var p = 0;
        var symbol = 'x';
        while(p!=2) {
                                for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 3; j++) {
                            if(this.matrix[i][j] === symbol) {
                                winner++;
                                if(winner === 3){
                                    return symbol;
                                }
                        }
                    }
                    winner = 0;
                    }
                    winner = 0;


                    for (var i = 0; i < 3; i++) {
                        for (var j = 0; j < 3; j++) {
                            if(this.matrix[j][i] === symbol) {
                                winner++;
                                if(winner === 3){
                                    return symbol;
                                }
                        }
                    }
                    winner = 0;
                    }
                    winner = 0;

                    for (var i = 0; i < 3; i++) {
                        var j = i;
                        if(this.matrix[j][i] === symbol) {
                                winner++;
                                if(winner === 3){
                                    return symbol;
                                }
                        }
                    }
                    winner = 0;
                    
                    for (var i = 0; i < 3; i++) {
                        var j = 2 - i;
                        if(this.matrix[j][i] === symbol) {
                                winner++;
                                if(winner === 3){
                                    return symbol;
                                }
                        }
                    }
                    winner =0;
                    symbol = 'o';
                p++;
        }
        return null;
                ///
    }

    noMoreTurns() {
        var score = 0;
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(this.matrix[i][j] !== null){
                    score++;
                } ;
            } ;
        } ;
        if(score === 9) {
            return true;
        } else {
            return false;
        }
    }

    isDraw() {
        if(this.noMoreTurns() === true && this.getWinner() === null) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        if(this.matrix[this.rowIndex][this.colIndex] === null){
            return null;
        } else {
            return this.matrix[this.rowIndex][this.colIndex];
        }
        
    }
}

module.exports = TicTacToe;