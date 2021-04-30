let hours = document.getElementById('hours');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

const fullday = 24 * 3600e3;
const tzdiff = new Date().getTimezoneOffset() * 60e3;

let timer = () => {
    // До полуночи в UTC
    // let diff = fullday - Date.now() % fullday; 

    // До полуночи в часовом поясе клиента
    let diff = fullday - (Date.now() - tzdiff) % fullday

    if (diff <= 0) return clearInterval(i); // Конец

    diff /= 1e3; // мс -> с

    hours.innerText = [
        diff / 3600 % 24 | 0, // hours
    ].map(d => d < 10 ? '0' + d : d).join(':');

    min.innerText = [
        diff / 60 % 60 | 0, // minutes
    ].map(d => d < 10 ? '0' + d : d).join(':');

    sec.innerText = [
        diff / 1 % 60 | 0  // seconds
    ].map(d => d < 10 ? '0' + d : d).join(':');
};

let i = setInterval(timer, 450);
timer();

