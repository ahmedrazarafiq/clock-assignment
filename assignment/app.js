// Function to update the clock display
function updateClock() {
    var now = new Date();

    // Time
    var hours = formatTimeUnit(now.getHours());
    var minutes = formatTimeUnit(now.getMinutes());
    var seconds = formatTimeUnit(now.getSeconds());

    // Date
    var day = formatTimeUnit(now.getDate());
    var month = formatTimeUnit(now.getMonth() + 1); // Months are zero-based
    var year = now.getFullYear();

    // Update the text content of the elements with the current time
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;

    // Update the text content of the elements with the current date
    document.getElementById('day').innerText = day;
    document.getElementById('month').innerText = month;
    document.getElementById('year').innerText = year;
}

// Call updateClock function every second using setInterval
setInterval(updateClock, 1000);

// Initial call to updateClock to display the clock immediately
updateClock();

// Function to format time units to ensure double digits
function formatTimeUnit(unit) {
    return unit < 10 ? "0" + unit : unit;
}
