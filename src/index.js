const sum = require("./sum");
import { sum2 } from "./sum2";
import style from "./css/index.scss";
import Icon from "./assets/img/proba.png";

console.log("Hello Worlds");
console.log(sum.sum(1,2));
console.log(sum2(1,2));

// let heading = document.querySelector(".wrapper #demo2");
let heading = document.getElementById("demo");
let sumValue = sum2(1,2);

heading.innerText = `1+20 = ${sumValue}`;


// let myIcon = new Image();
// myIcon.src = Icon;
// document.getElementById("obrazek").appendChild(myIcon);
