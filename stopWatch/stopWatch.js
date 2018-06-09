function stopWatch() {
    let diff, started, duration = 0;

    this.start = () => {
        if( started !== 0 )
            throw new Error('Stopwatch already started!')
        diff = Date.now();
        started = 1;

    }

    this.stop = () => {
        if( started !== 1 )
            throw new Error('Stopwatch not started!')
        duration = (Date.now() - diff)/1000;
        started = 0;
    }

    this.reset = () => {
        diff , started, duration = 0;
    }

    Object.defineProperty(this, 'duration', () => {
        return duration;
    })
}


let sw = new stopWatch()