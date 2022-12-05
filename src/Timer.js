class Timer {
    _start = 0
    _end  = 0

    start() {
        this._start = Date.now()
    }

    end() {
        this._end = Date.now()
    }

    getDuration() {
        return this._end - this._start
    }
}

module.exports = {Timer}
