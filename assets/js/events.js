class CalEvent {
    constructor(id = 1 , name = "Me", day = "mon", time_begin = "", time_end = "") {
        this.id = id;
        this.name = name;
        this.day = day;
        this.time_begin = time_begin;
        this.time_end = time_end;
    }
    addEvent() {
        const eventDiv = document.createElement("div");
        eventDiv.classList.add("square rounded p-5");
        eventDiv.style.margin = "41px 0px"
        document.getElementById(this.day).append(eventDiv);
    }

}