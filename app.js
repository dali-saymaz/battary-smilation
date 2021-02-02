let batteryLevel = 0;
const batteryOne = document.querySelector("#batteryOne");
const batteryTwo = document.querySelector("#batteryTwo");
const batteryThree = document.querySelector("#batteryThree");
const batteryShow = document.querySelector("#batteryShow");

// document.getElementById("raise").addEventListener("click",(event)=>
// {console.log(event.target)
//     document.querySelector(`#${event.target.id}`).style.background = "black"

//     full();
// }


// );
document.getElementById("raise").addEventListener("click", full);
document.getElementById("minus").addEventListener("click", empty);


// document.getElementById("minus").addEventListener("click",(event)=>
// {
// batteryColor();
// batteryText();

// } );