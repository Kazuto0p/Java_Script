function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours + minutes / 60) * 30;
    const minuteDeg = (minutes + seconds / 60) * 6;
    const secondDeg = seconds * 6;

    document.getElementById("h").style.transform = `translate(-50%) rotate(${hourDeg}deg)`;
    document.getElementById("m").style.transform = `translate(-50%) rotate(${minuteDeg}deg)`;
    document.getElementById("s").style.transform = `translate(-50%) rotate(${secondDeg}deg)`;
}
setInterval(updateClock, 1000);
updateClock();