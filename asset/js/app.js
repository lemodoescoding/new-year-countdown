const dayEl = document.querySelector('span#days'),
	hourEl = document.querySelector('span#hour'),
	minEl = document.querySelector('span#minute'),
	secEl = document.querySelector('span#second'),
	yearEl = document.querySelector('p#year');

const newYear = new Date().getFullYear() + 1;
const countDate = (new Date(newYear, 0, 1)).getTime();

yearEl.textContent = newYear;

setInterval(function(){
	const now = new Date().getTime();
	let gap = countDate - now;

	let sec = 1000;
	let min = sec * 60;
	let hrs = min * 60;
	let dys = hrs * 24;

	let days = Math.floor(gap / dys);
	let hours = Math.floor((gap % dys) / hrs);
	let minutes = Math.floor((gap % hrs) / min);
	let seconds = Math.floor((gap % min) / sec);

	dayEl.textContent = (days < 10) ? `0${days}` : days;
	hourEl.textContent = (hours < 10) ? `0${hours}` : hours;
	minEl.textContent = (minutes < 10) ? `0${minutes}` : minutes;
	secEl.textContent = (seconds < 10) ? `0${seconds}` : seconds;
}, 200);
