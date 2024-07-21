class Runner {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.milesRun = 0;
        this.fitness = 25;
        this.completedRaces = []
    }

    runSomeMiles(miles) {
        if(miles >= 1){
            this.milesRun += miles;
            this.fitness = this.fitness + miles;
        }
    }

    stretch() {
        this.fitness = this.fitness + 0.5;
    }

    runRace(raceNumber, distance) {
        this.completedRaces.push(raceName);
        this.runSomeMiles(distance);
    }
}

module.exports = Runner;