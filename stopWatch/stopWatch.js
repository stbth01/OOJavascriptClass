function stopWatch() {
    this.diff = 0;
    this.duration = 0;
    this.started = 0;

    // Object.defineProperty(this, 'duration', {
    //     get: () => {return this.duration;}
    // })
}

stopWatch.prototype.start = function() {
    if( this.started !== 0 )
        throw new Error('Stopwatch already started!')
    this.diff = Date.now();
    this.started = 1;
}

stopWatch.prototype.stop = function() {
    if( this.started !== 1 )
        throw new Error('Stopwatch not started!')
    this.duration += (Date.now() - this.diff)/1000;
    this.started = 0;
}
stopWatch.prototype.reset = function() {
    this.diff=0;
    this.started=0;
    this.duration = 0;
}


let sw = new stopWatch()