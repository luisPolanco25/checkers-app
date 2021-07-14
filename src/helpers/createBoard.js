
export const createBoard = (board = []) => {
    const row = [null, null, null, null, null, null, null, null];

    const fillBoard = (board) => {

        if (board.length === 8) {
            return board;
        } else {
            board.push(row);
            return fillBoard(board);
        }
    }

    fillBoard(board);

    return board;

}
