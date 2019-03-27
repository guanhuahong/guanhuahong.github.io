(function(exports) {
    var PrizeDraw = exports.PrizeDraw = function() {
        this._number = 0;
        this.seed = 0;
    }

    PrizeDraw.prototype.setNumber = function(value) { this._number = value; }
    PrizeDraw.prototype.getNumber = function() { return this._number; }

    PrizeDraw.prototype.isRun = function() { return this._run; }

    PrizeDraw.prototype.run = function() { this._run = true; this.update(); }
    PrizeDraw.prototype.stop = function() {
        this._run = false;

        var seed = Math.floor(this._number * Math.random());
        if (seed >= this._number) {
            seed = this._number - 1;
        }

        if (this.onDraw) { 
            this.onDraw(seed)
        }

        if (this.onStop) { 
            this.onStop(seed)
        }

        if (this._number > 0) {
            this._number = this._number - 1;
        }
    }

    PrizeDraw.prototype.update = function() {
        if (!this._run) return;
        if (this._number <= 0) return;
        var seed = Math.floor(this._number * Math.random());
        if (seed >= this._number) {
            seed = this._number - 1;
        }

        if (this.onDraw) { 
            this.onDraw(seed)
        }
        var self = this;

        window.setTimeout(function() {
            self.update()
        }, 1000/60)
    }
}(window))