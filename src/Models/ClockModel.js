import nanoid from 'nanoid';

class ClockModel {
    constructor(name, timezone = 0, id = nanoid(3)) {
        this.name = name;
        this.timezone = timezone;
        this.id = id;
    }
}

export default ClockModel