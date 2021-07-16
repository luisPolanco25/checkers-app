

export const kingMaker = (kingPlayer, kingComputer, board = []) => {

    if (kingPlayer >= 0) {
        board[0][kingPlayer] = 'king-player';
    }

    if (kingComputer >= 0) {
        board[7][kingComputer] = 'king-computer';
    }

} 