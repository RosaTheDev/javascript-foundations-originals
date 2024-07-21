class Roadrace {
    constructor(race) {
        this.name = race.title;
        this.location = race.city;
        this.participants = [];
    }

    setDistance(distance) {
        this.distance = distance;
        return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
    }

    registerParticipants(racer) {
        this.participants.push(racer);
    }

    completeRace() {
        for(var i = 0; i < this.participants.length; i++) {
            this.participants[i].completeRaces.push(this.name);
            this.participants[i].milesRun = this.distance;
        }

    }
}

module.exports = Roadrace;