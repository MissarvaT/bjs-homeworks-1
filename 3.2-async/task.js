class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = undefined
    }

    addClock(time, callback, id) {
        if (id === undefined) {
            console.error('Alarm ID is undefined!')
            return;
        } else if (this.alarmCollection.some(alarm => alarm.id === id)) {
            console.error('Alarm with such ID already exists!');
            return;
        };
        let alarmUnit = {'time': time, 'id': id, 'callback': callback};
        this.alarmCollection.push(alarmUnit);
    }

    removeClock(id) {
        const matchingAlarms = this.alarmCollection.filter(alarm => alarm.id === id);
        this.alarmCollection = matchingAlarms.forEach(alarm => {alarmCollection.slice(alarm, 1);
            return 'Alarm succesfully removed!';
        });
    }

    getCurrentFormattedTime() {
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let time = hours + ':' +minutes;
        return time;
    }

    start() {
        let time = this.getCurrentFormattedTime();
        function checkClock(alarm) {
            this.alarmCollection.forEach(alarm => {
            if (alarm.time === time) {
                return alarm.callback();
            }
        });
         };
           if (this.timerId === undefined) {
             function setInterval() {    
               let interval = this.alarmCollection.forEach(alarm => checkClock(alarm));
               return interval;
             };
             return this.timerId = setInterval();
        };
    }

    stop() {
        function clearInterval() {
            return this.timerId = undefined;
        }
        if (this.timerId !== undefined) {
            clearInterval();
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
    let now = new Date;
    let alarm1 = new AlarmClock();
    alarm1.addClock('11:51', () => console.log("Вставай!"), 1)

    alarm1.addClock('11:48', () => {console.log("Поднимайся!"), this.removeClock(2)}, 2);

    alarm1.addClock('11:49', () => {console.log("Поднимайся уже!"), this.printAlarms(), this.stop()}, 3)

    alarm1.printAlarms();

    console.log(alarm1.getCurrentFormattedTime())
    

};

testCase();
    
