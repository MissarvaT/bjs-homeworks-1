class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            console.error('Alarm ID is undefined!')
            return;
        } else if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error('Alarm with such ID already exists!');
            return;
        };

        this.alarmCollection.push({time, id, callback});
    }

    removeClock(id) {
        this.alarmCollection =  this.alarmCollection.filter(alarm => alarm.id !== id);
        return;
    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();

        if (hours < 10) {
            hours = '0' + hours;
            return hours;
        }

        if (minutes < 10) {
            minutes = '0' + minutes;
            return minutes;
        }

        let time = hours + ':' +minutes;
        return time;
    }

    start() {
        let time = this.getCurrentFormattedTime();
        let checkClock = alarm => {
            if (alarm.time === time) {
                return alarm.callback();
            }
         };
           if (this.timerId === null) {  
               let interval = () => this.alarmCollection.forEach(alarm => checkClock(alarm));
               return this.timerId = setInterval(interval, 5000);
        };
    }

    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach(alarm => console.log(`Alarm ${alarm.id} is set on ${alarm.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmsCollection = [];
    }
};

function testCase() {
    let alarm1 = new AlarmClock();
    alarm1.addClock('16:13', () => console.log("Вставай!"), 1)

    alarm1.addClock('16:14', () => {console.log("Поднимайся!"), this.removeClock(2)}, 2);

    alarm1.addClock('16:16', () => {console.log("Поднимайся уже!"), this.printAlarms(), this.stop()}, 3)

    alarm1.printAlarms();

    console.log(alarm1.getCurrentFormattedTime())
    
    alarm1.start();

};

testCase();
    

