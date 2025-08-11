const enddate = "12 august 2025 10:00 PM"

document.getElementById("end-date").innerText = enddate;
const inputs = document.querySelectorAll("input");
function clock() {
    const end = new Date(enddate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) {
        inputs[0].value = "00";
        inputs[1].value = "00";
        inputs[2].value = "00";
        inputs[3].value = "00";
        return;
    }

    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff / 3600) % 24;
    const minutes = Math.floor(diff / 60) % 60;
    const seconds = Math.floor(diff) % 60;

    inputs[0].value = days < 10 ? "0" + days : days;
    inputs[1].value = hours < 10 ? "0" + hours : hours;
    inputs[2].value = minutes < 10 ? "0" + minutes : minutes;
    inputs[3].value = seconds < 10 ? "0" + seconds : seconds;
}
setInterval(clock, 1000);
clock();


