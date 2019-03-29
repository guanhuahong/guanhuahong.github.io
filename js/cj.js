(function(exports) {
    var PrizeDraw = exports.PrizeDraw = function() {
        this._number = 0;
        this.seed = 0;
        this.same = 1;
    }

    PrizeDraw.prototype.setNumber = function(value) { this._number = value; }
    PrizeDraw.prototype.getNumber = function() { return this._number; }

    PrizeDraw.prototype.setSame = function(value) { this._same = value; }
    PrizeDraw.prototype.getSame = function() { return this._same; }

    PrizeDraw.prototype.isRun = function() { return this._run; }

    PrizeDraw.prototype.run = function() { this._run = true; this.update(); }
    PrizeDraw.prototype.stop = function() {
        this._run = false;

        var seed = newSeed(this._number, this._same);

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

    function newSeed(n, s) {
        s = s > 1 ? s : 1
        var seed;
        if (s === 1) {
            seed = Math.floor(n * Math.random());
            if (seed >= n) {
                seed = n - 1;
            }
        } else {
            var seed = [];
            while(s > 0) {
                r = Math.floor(n * Math.random());

                if (seed.indexOf(r) <= -1) {
                    if (r >= n) {
                        r = n - 1
                    }
                    seed.push(r)
                    s = s - 1;
                }
            }
        }
        

        return seed
    }

    PrizeDraw.prototype.update = function() {
        if (!this._run) return;
        if (this._number <= 0) return;
        var seed = newSeed(this._number, this._same);

        if (this.onDraw) { 
            this.onDraw(seed)
        }
        var self = this;

        window.setTimeout(function() {
            self.update()
        }, 1000/60)
    }
}(window))
