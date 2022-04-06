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

//queries
let userInput = document.querySelector(".userInput");
let busType = document.querySelector(".busType");
let dataSize = document.querySelector(".dataSize");
let estimate = document.querySelector(".estimate");
let output = document.querySelector(".output");

//Sets Default Values
let currentBus = "1";
let size = "tb";
let data = 0;
let time = 0;
let rate = 0;
let value = 0;

userInput.addEventListener("click",(event)=>
{
    userInput.setAttribute("value","");
});

//Formula
let formula = 0;

//Set Bus Type
busType.addEventListener("change",(event)=>
{
    currentBus = busType.value;
    switch(currentBus)
    {
        case 1:
            rate = megabyte + (megabyte/2);
            console.log(`${currentBus} transfers at ${rate} bytes per second`);
            break;
        case 2: 
            rate = megabyte*  480;
            console.log(`${currentBus} transfers at ${rate} bytes per second`);

            break;
        case 3:
            rate = megabyte * 600;
            console.log(`${currentBus} transfers at ${rate} bytes per second`);

            break;
        case "c":
            rate = gigabyte * 10;
            console.log(`${currentBus} transfers at ${rate} bytes per second`);
            break;
        case "l":
            rate = megabyte*  480;
            console.log(`${currentBus} transfers at ${rate} bytes per second`);
            break;
        case "t":
            rate = gigabyte * 10;
            console.log(`${currentBus} transfers at ${rate} bytes per second`);

            break;
        default:
            console.log(`${currentBus} transfers at ${rate} bytes per second`);
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

//Calculate
estimate.addEventListener("click",(event)=>
{
    value = parseInt(userInput.value);
    console.log(value);
    if(value > 0)
    {
        time = parseInt(data/rate);
        output.textContent = time;
    }
    else
    {
        output.textContent = "Please Input a Value Greater Than 0";
    }
});


//https://revatu.re/StartEvaluation
// 8743a173ee
