class SudokuEntry {
    coordinates = {
        x: 0,
        y: 0
    }
    col
    row
    square
    value
    forbiddenValues = []

    constructor(value) {
        this.value = value
    }

    getAvailableNumbers () {
        const colNumbers = this.col.getAvailableNumbers()
        const rowNumbers = this.row.getAvailableNumbers()
        const squareNumbers = this.square.getAvailableNumbers()
        return colNumbers
            .filter(number => rowNumbers.includes(number) && squareNumbers.includes(number))
            .filter(number => !this.forbiddenValues.includes(number))
    }

    setCoordinates(x, y) {
        this.coordinates = { x, y }
    }
}

module.exports = {SudokuEntry}
