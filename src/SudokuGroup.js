class SudokuGroup {
    _entries = []
    _minmaxX = [0, 0]
    _minMaxY = [0,0]
    _availableNumbers = [...Array(9).keys()].map(v => v + 1)

    constructor(minmaxX, minmaxY) {
        this._minmaxX = minmaxX
        this._minmaxY = minmaxY
    }

    addEntry(entry) {
        this._entries.push(entry)
    }

    getAvailableNumbers() {
        return this._availableNumbers.filter(number => !this._entries.find(entry => entry.value === number))
    }

    validCoordinates(x, y) {
        return x >= this._minmaxX[0] && x <= this._minmaxX[1] && y >= this._minMaxY[0] && y <= this._minmaxY[1]
    }
}

module.exports = {SudokuGroup}
