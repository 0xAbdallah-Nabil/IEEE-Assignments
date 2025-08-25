let now = new Date();
function receiveNewTime() {
    now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds(); 

    convertedHours = (hours % 12 || 12).toString();
    minutes = minutes.toString();
    seconds = seconds.toString();

    document.getElementById('hours').textContent = convertedHours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('ampm').textContent = hours >= 12 ? 'PM' : 'AM';
}
receiveNewTime();
setInterval(receiveNewTime, 1000);