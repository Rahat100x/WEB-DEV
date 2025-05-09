function updateClock() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");

    const now = new Date();
    const hours = now.getHours() % 12 || 12;
    const minutues = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    timeElement.textContent = `${hours}:${minutues}:${seconds}:${ampm}`;

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    dateElement.textContent = now.toLocaleDateString(undefined,options);
}

setInterval(updateClock,1000);
updateClock();