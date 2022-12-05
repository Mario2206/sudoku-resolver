const {SudokuEntry} = require("./SudokuEntry");
const {SudokuGroup} = require("./SudokuGroup");


class Sudoku {
    _rows = [
        new SudokuGroup([0,8], [0,0]),
        new SudokuGroup([0,8], [1,1]),
        new SudokuGroup([0,8], [2,2]),
        new SudokuGroup([0,8], [3,3]),
        new SudokuGroup([0,8], [4,4]),
        new SudokuGroup([0,8], [5,5]),
        new SudokuGroup([0,8], [6,6]),
        new SudokuGroup([0,8], [7,7]),
        new SudokuGroup([0,8], [8,8]),
    ]
    _cols = [
        new SudokuGroup([0,0], [0,8]),
        new SudokuGroup([1,1], [0,8]),
        new SudokuGroup([2,2], [0,8]),
        new SudokuGroup([3,3], [0,8]),
        new SudokuGroup([4,4], [0,8]),
        new SudokuGroup([5,5], [0,8]),
        new SudokuGroup([6,6], [0,8]),
        new SudokuGroup([7,7], [0,8]),
        new SudokuGroup([8,8], [0,8]),
    ]
    _squares = [
        new SudokuGroup([0, 2], [0, 2]),
        new SudokuGroup([3, 5], [0, 2]),
        new SudokuGroup([6, 8], [0, 2]),
        new SudokuGroup([0, 2], [3, 5]),
        new SudokuGroup([3, 5], [3, 5]),
        new SudokuGroup([6, 8], [3, 5]),
        new SudokuGroup([0, 2], [6, 8]),
        new SudokuGroup([3, 5], [6, 8]),
        new SudokuGroup([6, 8], [6, 8]),
    ]
    _entries = []

    constructor(entries) {
        this._entries = entries.map((col, x) => {
            return col.map((value, y) => {
                const entry = new SudokuEntry(value)
                entry.row = this._getGroup("_rows", {x, y}, entry)
                entry.col = this._getGroup("_cols", {x, y}, entry)
                entry.square = this._getGroup("_squares", {x, y}, entry)
                entry.setCoordinates(x,y)
                return entry
            })
        })
    }


    solve(simulated = false) {
        const entry = this._findEntryWithLessAvailableNumbers()

        if (!entry) {
            return this._returnEntries()
        }

        this._chooseEntryValue(entry, simulated)

        return this.solve(simulated)
    }

    isValid() {
        return this._returnEntries().every(row => row.every(v => v != 0))
    }

    _chooseEntryValue (entry, simulated = false) {
        const availableNumbers = entry.getAvailableNumbers()
        const availableNumber = availableNumbers.pop()

        entry.value = availableNumber

        if(!availableNumbers.length) {
            return
        }

        // Simulate the rest of the game
        const simulatedSudoku = new Sudoku(this._returnEntries())
        simulatedSudoku.solve(true)
        const isValid = simulatedSudoku.isValid()

        if(!isValid) {
            entry.forbiddenValues.push(entry.value)
            entry.value = 0
            return this._chooseEntryValue(entry)
        }

        this._entries.forEach(row => row.forEach(entry => {
            entry.forbiddenValues = []
        }))


    }

    _findEntryWithLessAvailableNumbers () {
        let valuableEntry = null
        this._entries.forEach(col => col.forEach(entry => {
            if (entry.value || !entry.getAvailableNumbers().length) return

            if ((!valuableEntry && entry.getAvailableNumbers().length) || (valuableEntry && entry.getAvailableNumbers().length < valuableEntry.getAvailableNumbers().length) ) {
                valuableEntry = entry
            }
        }))

        return valuableEntry
    }

    _getGroup(type, {x, y}, entry) {
        const groups = this[type]
        const group = groups.find(group => group.validCoordinates(x, y))
        group.addEntry(entry)
        return group
    }

    _returnEntries () {
        return this._entries.map(row => row.map(entry => entry.value))
    }
}

module.exports = {Sudoku}
