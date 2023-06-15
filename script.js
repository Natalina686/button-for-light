"use strict";
let background = document.querySelector(".backgroundOff");
let button = document.querySelector("button");
let lastTime = document.querySelector(".lastTime");

function turnOff() {
  button.textContent = "TURN OFF";
  let time = localStorage.getItem("timeOff");
  lastTime.innerHTML = `Last turn off: ${formatDate(time)} `;
  lastTime.style.color = "#7068ff";
}

function turnOn() {
  button.textContent = "TURN ON";
  let time = localStorage.getItem("timeOn");
  lastTime.innerHTML = `Last turn on: ${formatDate(time)} `;
  lastTime.style.color = "#121535";
}

if (localStorage.getItem("timeOff") !== null) {
  turnOff();
}
if (localStorage.getItem("timeOn") !== null) {
  turnOn();
}

button.addEventListener("click", () => {
  if (button.textContent === "TURN OFF") {
    localStorage.setItem("timeOn", new Date());
    localStorage.removeItem("timeOff");
    turnOn();
  } else {
    localStorage.setItem("timeOff", new Date());
    localStorage.removeItem("timeOn");
    turnOff();
  }
  button.classList.toggle("btnOff");
  button.classList.toggle("btnOn");
  background.classList.toggle("backgroundOff");
  background.classList.toggle("backgroundOn");
});

function formatDate(time) {
  const date = new Date(time);
  
  let day = date.getDate();
   if (day <10) { 
    day = "0"+ day;
  }

  let month = date.getMonth() + 1;
  if (month <10) { 
    month = "0"+ month;
  }

  let year= date.getFullYear();

  let hour = date.getHours();
   if (hour <10) { 
    hour = "0"+ hour;
  }

  let minute = date.getMinutes();
   if (minute <10) { 
    minute = "0"+ minute;
  }

  let second = date.getSeconds();
   if (second <10) { 
    second = "0"+ second;
  }

  return `${day} - ${month} -${year}  ${hour} : ${minute} : ${second}`;
  
}