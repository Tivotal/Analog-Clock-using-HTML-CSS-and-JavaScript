/* Created by Tivotal */

let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".min");
let secHand = document.querySelector(".sec");

setInterval(() => {
  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hourTodeg = (hour / 12) * 360;
  let minTodeg = (min / 60) * 360;
  let secTodeg = (sec / 60) * 360;

  hourHand.style.transform = `rotate(${hourTodeg}deg)`;
  minHand.style.transform = `rotate(${minTodeg}deg)`;
  secHand.style.transform = `rotate(${secTodeg}deg)`;
}, 1000);
