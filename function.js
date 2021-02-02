function full() {
    if (batteryLevel < 3) {
        batteryLevel++;
    }
    batteryColor();
    batteryText();
}

function empty() {
    if (batteryLevel > 0) {
        batteryLevel--;
    }
    batteryColor();
    batteryText();
}

// Bu function bataryanin doluluk durumuna gore renk degisimini saglamaktadir
function batteryColor() {
    if (batteryLevel === 0) {
        document.querySelector("#batteryOne").style.background = "white";
        // batteryOne.setAttribute('style', 'background-color: white');
        batteryTwo.setAttribute('style', 'background-color: white');
        batteryThree.setAttribute('style', 'background-color: white');
    } else if (batteryLevel === 1) {
        batteryOne.setAttribute('style', 'background-color: red');
        batteryTwo.setAttribute('style', 'background-color: white');
        batteryThree.setAttribute('style', 'background-color: white');
    } else if (batteryLevel === 2) {
        batteryOne.setAttribute('style', 'background-color: orange');
        batteryTwo.setAttribute('style', 'background-color: orange');
        batteryThree.setAttribute('style', 'background-color: white');
    } else if (batteryLevel === 3) {
        batteryOne.setAttribute('style', 'background-color: green');
        batteryTwo.setAttribute('style', 'background-color: green');
        batteryThree.setAttribute('style', 'background-color: green');
    }

}
// Bu function batarzanin durumunu yuzdelik oranda gostermek icindir
function batteryText() {
    if (batteryLevel === 0) {
        batteryShow.innerHTML = "Batary: %0";
    } else if (batteryLevel === 1) {
        batteryShow.innerHTML = "Batary: %33";
    } else if (batteryLevel === 2) {
        batteryShow.innerHTML = "Batary: %66";
    } else if (batteryLevel === 3) {
        batteryShow.innerHTML = "Batary: %100";
    }
}