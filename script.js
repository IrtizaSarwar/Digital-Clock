document.addEventListener("DOMContentLoaded", () => {
    const clockElement = document.getElementById("clock");
    const dateElement = document.getElementById("date");

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        const amPM = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        clockElement.textContent = `${String(hours).padStart(2, "0")}:${minutes}:${seconds} ${amPM}`;
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, "0");
        const day = String(now.getDate()).padStart(2, "0");
        dateElement.textContent = `${year}-${month}-${day}`;
    }

    setInterval(updateClock, 1000);
    updateClock();
});