"use strict";
let changeColor = document.querySelector(".changeColorOff");
let button = document.querySelector("button");
let touchTime = document.querySelector(".touchTime");

function turnOff() {
  button.textContent = "TURN OFF";
  let time = localStorage.getItem("timeOff");
  touchTime.innerHTML = `Last turn off: ${formatDate(time)} `;
  touchTime.style.color = "#7068ff";
}

function turnOn() {
  button.textContent = "TURN ON";
  let time = localStorage.getItem("timeOn");
  touchTime.innerHTML = `Last turn on: ${formatDate(time)} `;
  touchTime.style.color = "#121535";
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
  changeColor.classList.toggle("changeColorOff");
  changeColor.classList.toggle("changeColorOn");
});

function formatDate(time) {
  const date = new Date(time);
  
  let DD = date.getDate();
   if (DD <10) { 
    DD = "0"+ DD;
  }

  let MO = date.getMonth() + 1;
  if (MO <10) { 
    MO = "0"+ MO;
  }

  let YYYY= date.getFullYear();
  let HH = date.getHours();
   if (HH <10) { 
    HH = "0"+ HH;
  }

  let MI = date.getMinutes();
   if (MI <10) { 
    MI = "0"+ MI;
  }

  let SS = date.getSeconds();
   if (SS <10) { 
    SS = "0"+ SS;
  }

  let timeEnd = DD + "-" + MO + "-" + YYYY + "  " + HH + ":" + MI + ":" + SS;
  return timeEnd;
}