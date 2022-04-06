//Check
console.log("...script loaded!");

// Megabyte = 1000000 bytes
// Gigabyte = 1000 megabytes
//USB 1.0 = 1.5Mbps, USB 2.0 = 480Mbps, USB 3.0 480*10, 10gbps,

let bit = 1
let byte = bit * 8;
let kilobyte = byte * 1000;
let megabyte = kilobyte * 1000;
let gigabyte = megabyte * 1000;
let terabyte = gigabyte * 1000;
let sec = 1;
let min = sec * 60;
let hour = min * min;
let day = hour * 24;
let year = day * 365;
let accuracy = "seconds";

//queries
let userInput = document.querySelector(".userInput");
let busType = document.querySelector(".busType");
let dataSize = document.querySelector(".dataSize");
let estimate = document.querySelector(".estimate");
let output = document.querySelector(".output");

//Sets Default Values
let currentBus = "1";
let size = terabyte;
let userData = 0;
let time = 0;
let rate = megabyte + (megabyte/2);
let value = 1;

userInput.addEventListener("click",(event)=>
{
    userInput.setAttribute("value","");
});





//Set Bus Type
busType.addEventListener("change",(event)=>
{
    currentBus = busType.value;
    switch(currentBus)
    {
        case "1":
            rate = megabyte + (megabyte/2);
            console.log(rate);
            console.log(`${currentBus} transfers at ${rate} bits per second`);
            break;
        case "2": 
            rate = megabyte*  480;
            console.log(`${currentBus} transfers at ${rate} bits per second`);

            break;
        case "3":
            rate = megabyte * 600;
            console.log(`${currentBus} transfers at ${rate} bits per second`);

            break;
        case "c":
            rate = gigabyte * 10;
            console.log(`${currentBus} transfers at ${rate} bits per second`);
            break;
        case "l":
            rate = megabyte*  480;
            console.log(`${currentBus} transfers at ${rate} bits per second`);
            break;
        case "t":
            rate = gigabyte * 10;
            console.log(`${currentBus} transfers at ${rate} bits per second`);

            break;
        default:
            console.log(`${currentBus} transfers at ${rate} bits per second`);
            break;
    }
});

//Set Data Size
dataSize.addEventListener("change",(event)=>
{
    size = dataSize.value;
    console.log(size);
    switch(size)
    {
        case "tb":
            size = terabyte;
            console.log(size);
            break;
        case "gb":
            size = gigabyte;
            console.log(size);
            break;
        case "mb":
            size = megabyte;
            console.log(size);
            break;
        case "kb":
            size = kilobyte;
            console.log(size);
            break;
    }
});

//get userInput

function getInput()
{
    userData = userInput.value;
    console.log(userData);
}

//formula
function formula(userData, size,rate)
{
    time = (userData * size) / rate;
}

//proportion
function proportion(time)
{

    if(time >= 31540001)
    {
        time = ((((time / year) / day) / hour) / min);
        accuracy = "years";
    }
    else if (time <= 31540000 && time >= 86401)
    {
        time = (((time / day) / hour) / min)
        accuracy = "days";
    }
    else if (time <= 86400 && time >= 3601)
    {
        time = ((time / day) /  hour);
        accuracy = "hours";
    }
    else if (time <= 3600 && time >= 60)
    {
        time = time / hour;
        accuracy = "minutes";
    }
    else
    {
        accuracy = "seconds";
    }
    console.log(time);
}

//Calculate
estimate.addEventListener("click",(event)=>
{
    getInput();
    formula(userData, size, rate);
    proportion(time);
    
    

    if(userData > 0 && userData != NaN)
    {
        console.log("value greater than 0");
        output.textContent = `The data will completely transfer in approximately ${time} ${accuracy}`;
    }
    else
    {
        output.textContent = "Please Input a Number Value Greater Than 0";
    }
});


//https://revatu.re/StartEvaluation
// 8743a173ee

console.log(rate);
console.log(size);
console.log(userData);