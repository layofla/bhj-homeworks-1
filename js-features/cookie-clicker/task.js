const cookie = document.getElementById("cookie");
let cookieClick = document.getElementById("clicker__counter");
let cookieSpeedClick = document.getElementById("clicker__speed__counter");
let Time = Date.now();
let previousClicks = 0;

cookie.onclick = function () {
 cookie.classList.contains('clicker__cookie') ? cookie.className = 'new__clicker__cookie' : cookie.className = 'clicker__cookie';
 let currentClicks = parseInt(cookieClick.textContent);
 cookieClick.textContent = currentClicks + 1;
 cookieSpeedClick.textContent = (((Date.now() - Time) / 1000) / (currentClicks - previousClicks)).toFixed(2);
 previousClicks = currentClicks;
};