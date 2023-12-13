function calculateDays() {
    const elements = document.getElementsByClassName("change-display");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = "none";
}

    const today = new Date()
    const date =  new Date(document.getElementById('trip-date').value)

    const timeDiff = date.getTime() - today.getTime()
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    console.log(timeDiff)

    document.getElementById('result').innerHTML = daysRemaining;
    document.getElementById('sentence').style.display = "block";
}

