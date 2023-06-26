const eventDiv = document.createElement("div");
eventDiv.classList.add("square");
eventDiv.style.margin = "0px 10px 0px";
eventDiv.style.height = "80px";
eventDiv.style.width = document.getElementById("mon").style.width;

const infoDiv = document.createElement("div");
const name = document.createElement("p");
const timeP = document.createElement("p");
const content = document.createTextNode("Shay Harris");
const time = document.createTextNode("9am - 10am");

name.appendChild(content);
timeP.appendChild(time);
infoDiv.appendChild(name);
infoDiv.appendChild(timeP);
eventDiv.appendChild(infoDiv)
document.getElementById("mon").appendChild(eventDiv);

const eventDiv2 = document.createElement("div");
eventDiv2.classList.add("square");
eventDiv2.style.margin = "40px 10px 0px";
eventDiv2.style.height = "40px";
eventDiv2.style.width = document.getElementById("mon").style.width;
document.getElementById("mon").appendChild(eventDiv2);