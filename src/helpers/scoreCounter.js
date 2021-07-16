
export const scoreCounter = (board = [], player) => {

    const score = board.map(row => {
        row = row.filter(square => square === player || square === `king-${player}`);
        return row.length;
    });



    return 12 - score.reduce((a, b) => a + b, 0);

}
