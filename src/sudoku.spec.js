const {Sudoku} = require("./Sudoku")
const {Timer} = require("./Timer");

describe("Solve sudoku", () => {
    let timer;

    beforeEach(() => {
        timer = new Timer()
        timer.start()
    })

    afterEach(() => {
        timer.end()
        console.log(`Duration : ${timer.getDuration()}ms`)
    })

    it("should solve an easy sudoku", () => {
        const entries = [
            [0, 0, 0, 5, 6, 1, 0, 0, 0],
            [0, 0, 2, 8, 9, 3, 1, 0, 0],
            [0, 6, 8, 0, 7, 0, 3, 5, 0],
            [0, 1, 9, 0, 0, 0, 7, 8, 0],
            [0, 0, 0, 6, 5, 7, 0, 0, 0],
            [0, 4, 0, 0, 8, 0, 0, 6, 0],
            [0, 5, 7, 0, 3, 0, 6, 9, 0],
            [2, 0, 6, 0, 1, 0, 4, 0, 8],
            [3, 0, 1, 0, 0, 0, 5, 0, 2],
        ];
        const solvedEntries = [
            [9, 3, 4, 5, 6, 1, 8, 2, 7],
            [5, 7, 2, 8, 9, 3, 1, 4, 6],
            [1, 6, 8, 4, 7, 2, 3, 5, 9],
            [6, 1, 9, 3, 2, 4, 7, 8, 5],
            [8, 2, 3, 6, 5, 7, 9, 1, 4],
            [7, 4, 5, 1, 8, 9, 2, 6, 3],
            [4, 5, 7, 2, 3, 8, 6, 9, 1],
            [2, 9, 6, 7, 1, 5, 4, 3, 8],
            [3, 8, 1, 9, 4, 6, 5, 7, 2],
        ];

        const sudoku = new Sudoku(entries)

        const expectedEntries = sudoku.solve()

        expect(expectedEntries).toEqual(solvedEntries)

    })

    it("should solve a hard sudoku", () => {
        const entries = [
            [0, 0, 7, 2, 0, 0, 0, 0, 0],
            [0, 0, 8, 0, 0, 9, 6, 0, 5],
            [0, 4, 0, 0, 0, 6, 0, 0, 1],
            [4, 0, 2, 9, 0, 3, 0, 0, 8],
            [0, 5, 0, 0, 0, 0, 0, 6, 0],
            [7, 0, 0, 6, 0, 5, 1, 0, 2],
            [8, 0, 0, 4, 0, 0, 0, 3, 0],
            [2, 0, 6, 5, 0, 0, 8, 0, 0],
            [0, 0, 0, 0, 0, 8, 2, 0, 0]
        ];
        const solvedEntries = [
            [6, 1, 7, 2, 5, 4, 3, 8, 9],
            [3, 2, 8, 1, 7, 9, 6, 4, 5],
            [5, 4, 9, 8, 3, 6, 7, 2, 1],
            [4, 6, 2, 9, 1, 3, 5, 7, 8],
            [9, 5, 1, 7, 8, 2, 4, 6, 3],
            [7, 8, 3, 6, 4, 5, 1, 9, 2],
            [8, 7, 5, 4, 2, 1, 9, 3, 6],
            [2, 3, 6, 5, 9, 7, 8, 1, 4],
            [1, 9, 4, 3, 6, 8, 2, 5, 7]

        ];

        const sudoku = new Sudoku(entries)

        const expectedEntries = sudoku.solve()

        expect(expectedEntries).toEqual(solvedEntries)

    })

    it("should solve a very hard sudoku", () => {
        const entries = [
            [0, 0, 0, 0, 0, 0, 5, 0, 0],
            [0, 0, 0, 0, 0, 9, 0, 0, 0],
            [0, 0, 1, 0, 4, 0, 0, 2, 0],
            [0, 0, 0, 5, 0, 0, 0, 0, 0],
            [0, 0, 2, 0, 0, 0, 0, 1, 4],
            [0, 3, 0, 7, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1, 0, 0, 0, 0],
            [0, 8, 0, 0, 0, 0, 7, 0, 0],
            [0, 5, 0, 0, 0, 0, 3, 0, 9]
        ]

        const solvedEntries = [
            [9, 2, 3, 1, 6, 7, 5, 4, 8],
            [8, 4, 5, 2, 3, 9, 1, 7, 6],
            [7, 6, 1, 8, 4, 5, 9, 2, 3],
            [6, 1, 9, 5, 8, 4, 2, 3, 7],
            [5, 7, 2, 3, 9, 6, 8, 1, 4],
            [4, 3, 8, 7, 2, 1, 6, 9, 5],
            [3, 9, 7, 6, 1, 8, 4, 5, 2],
            [2, 8, 4, 9, 5, 3, 7, 6, 1],
            [1, 5, 6, 4, 7, 2, 3, 8, 9]
        ]

        const sudoku = new Sudoku(entries)

        const expectedEntries = sudoku.solve()

        console.log(JSON.stringify(expectedEntries))

        expect(expectedEntries).toEqual(solvedEntries)

    })

})
