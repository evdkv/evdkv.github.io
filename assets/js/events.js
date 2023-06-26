// var moment = require('moment');

class CalEvent {
    constructor(id = 1 , name = "Me", day = "mon", time_begin = "", time_end = "") {
        this.id = id;
        this.name = name;
        this.day = day;
        this.time_begin = moment(time_begin, "hh:mma")
        this.time_end = moment(time_end, "hh:mma")
    }
    addEvent(previous) {

        const eventDiv = document.createElement("div");
        eventDiv.classList.add("square");
        eventDiv.style.margin = this.setMargin(previous) + " 10px 0px";
        eventDiv.style.height = this.getBoxHeight();
        eventDiv.style.width = document.getElementById(this.day).style.width;

        const infoDiv = document.createElement("div");
        const nameP = document.createElement("p");
        const timeP = document.createElement("p");
        const content = document.createTextNode(this.name);
        const time = document.createTextNode(this.time_begin.format("h:mma") + " - " + this.time_end.format("h:mma"));

        nameP.appendChild(content);
        timeP.appendChild(time);
        infoDiv.appendChild(nameP);
        infoDiv.appendChild(timeP);
        eventDiv.appendChild(infoDiv)
        document.getElementById(this.day).appendChild(eventDiv);
    }

    addEvent() {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("square");
        eventDiv.style.margin = this.setMarginFirst() + " 10px 0px";
        eventDiv.style.height = this.getBoxHeight();
        eventDiv.style.width = document.getElementById(this.day).style.width;

        const infoDiv = document.createElement("div");
        const nameP = document.createElement("p");
        const timeP = document.createElement("p");
        const content = document.createTextNode(this.name);
        const time = document.createTextNode(this.time_begin.format("h:mma") + " - " + this.time_end.format("h:mma"));

        nameP.appendChild(content);
        timeP.appendChild(time);
        infoDiv.appendChild(nameP);
        infoDiv.appendChild(timeP);
        eventDiv.appendChild(infoDiv)
        document.getElementById(this.day).appendChild(eventDiv);
    }
    
    getBoxHeight() {
        let diff = this.time_end.subtract(this.time_begin).valueOf() / 36000;
        let truncated = Math[diff < 0 ? 'ceil' : 'floor'](diff) / 100;
        return (truncated * 40) + "px";
    }

    setMargin(previous) {
        let diff = this.time_begin.subtract(previous.time_end).valueOf() / 36000;
        let truncated = Math[diff < 0 ? 'ceil' : 'floor'](diff) / 100;
        return (truncated * 40) + "px"
    }

    setMarginFirst() {
        return "0px"
    }

    test() {
        console.log(this.time_begin.format("h:mma") + " - " + this.time_end.format("h:mma"));
    }
}