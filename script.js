/* --------------------
PAGE NAVIGATION
--------------------- */

function nextPage(pageNumber){

document
.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});

document
.getElementById("page"+pageNumber)
.classList.add("active");

spawnHearts(15);

window.scrollTo(0,0);

}

/* --------------------
POPUP MESSAGE
--------------------- */

function showAnswer(message){

const popup =
document.getElementById("popupMessage");

popup.innerHTML = message;

popup.style.display = "block";

spawnHearts(12);

setTimeout(()=>{
popup.style.display = "none";
},2500);

}

/* --------------------
COUNTDOWN
--------------------- */

/*
CHANGE YEAR IF NEEDED
*/

const targetDate =
new Date("June 19, 2026 10:00:00").getTime();

function updateCountdown(){

const now =
new Date().getTime();

const distance =
targetDate - now;

if(distance < 0){

document.getElementById("days").innerHTML="00";
document.getElementById("hours").innerHTML="00";
document.getElementById("minutes").innerHTML="00";
document.getElementById("seconds").innerHTML="00";

return;
}

const days =
Math.floor(
distance / (1000*60*60*24)
);

const hours =
Math.floor(
(distance % (1000*60*60*24))
/
(1000*60*60)
);

const minutes =
Math.floor(
(distance % (1000*60*60))
/
(1000*60)
);

const seconds =
Math.floor(
(distance % (1000*60))
/
1000
);

const d =
document.getElementById("days");

const h =
document.getElementById("hours");

const m =
document.getElementById("minutes");

const s =
document.getElementById("seconds");

if(d) d.innerHTML = days;
if(h) h.innerHTML = hours;
if(m) m.innerHTML = minutes;
if(s) s.innerHTML = seconds;

}

setInterval(updateCountdown,1000);
updateCountdown();

/* --------------------
HEARTS
--------------------- */

function spawnHearts(count){

const container =
document.getElementById(
"hearts-container"
);

for(let i=0;i<count;i++){

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML =
["❤️","💕","💖","💗","💘"]
[Math.floor(Math.random()*5)];

heart.style.left =
Math.random()*100 + "vw";

heart.style.animationDuration =
(3 + Math.random()*4)+"s";

heart.style.fontSize =
(18 + Math.random()*18)+"px";

container.appendChild(heart);

setTimeout(()=>{
heart.remove();
},7000);

}

}

/* --------------------
AUTO HEARTS
--------------------- */

setInterval(()=>{
spawnHearts(2);
},2000);

/* --------------------
NO BUTTON ESCAPE
--------------------- */

const noMessages = [

"Really? 😭",
"Think Again 😭",
"Cutiepie Please 🥺",
"System Error 😂",
"Wrong Answer 😌",
"Still No? 😭",
"Pleaseeeee ❤️",
"Don't Break My Heart 💔",
"Last Chance 😏",
"Just Press YES ❤️"

];

let noCounter = 0;

setTimeout(()=>{

const noBtn =
document.getElementById("noBtn");

if(!noBtn) return;

function moveNoButton(){

if(noCounter < noMessages.length){

noBtn.innerHTML =
noMessages[noCounter];

}

const maxX =
window.innerWidth - 150;

const maxY =
window.innerHeight - 100;

const randomX =
Math.random()*maxX;

const randomY =
Math.random()*maxY;

noBtn.style.left =
randomX + "px";

noBtn.style.top =
randomY + "px";

noBtn.style.transform =
"rotate("+
(Math.random()*40-20)
+"deg)";

noCounter++;

if(noCounter===10){

noBtn.innerHTML =
"Okay Fine 😂";

}

if(noCounter>12){

noBtn.style.display="none";

showAnswer(
"Okay okay ❤️ I think we both know the answer 😌"
);

}

}

noBtn.addEventListener(
"mouseover",
moveNoButton
);

noBtn.addEventListener(
"click",
moveNoButton
);

},500);

/* --------------------
YES BUTTON
--------------------- */

function acceptLove(){

spawnHearts(60);

setTimeout(()=>{

nextPage(11);

},1000);

}

/* --------------------
CELEBRATION
--------------------- */

function celebrate(){

spawnHearts(120);

const popup =
document.getElementById(
"popupMessage"
);

popup.style.display =
"block";

popup.innerHTML =

`

<h2>
I LOVE YOU CUTIEPIE ❤️
</h2>

<p>
Can't wait for tomorrow ❤️
</p>
`;

setTimeout(()=>{

popup.innerHTML =

`

<h2>
See You Tomorrow ❤️
</h2>
`;

},3000);

}

/* --------------------
TOUCH SUPPORT
--------------------- */

document.addEventListener(
"touchstart",
()=>{
spawnHearts(4);
}
);

/* --------------------
EXTRA LOVE EFFECT
--------------------- */

document.addEventListener(
"click",
(e)=>{

const heart =
document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left =
e.clientX + "px";

heart.style.top =
e.clientY + "px";

document.body.appendChild(
heart
);

setTimeout(()=>{
heart.remove();
},5000);

}
);

/* --------------------
STARTUP EFFECT
--------------------- */

window.onload = ()=>{

spawnHearts(20);

};
