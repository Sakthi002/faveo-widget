// Check if the device is a mobile device based on the orientation property of the window
var isMobile = window.orientation > -1;

// Create a new div element and assign it to the chatWidget variable
const chatWidget = document.createElement("div");
chatWidget.id = "msv-cb-widget"; // Set the id attribute of the chatWidget div

// Create a new div element and assign it to the adTag variable
const adTag = document.createElement("div");
adTag.id = "msv-ad-tag"; // Set the id attribute of the adTag div
adTag.innerHTML = "Ad"; // Set the inner HTML content of the adTag div
adTag.style.cssText = "position: absolute; top: 0px; left: 55px; font-size: 9px; color: white; cursor: pointer; background: black; width: 16px; text-align: center;"; // Apply CSS styles to the adTag div

// Create a new div element and assign it to the pWidget variable
const pWidget = document.createElement("div");
pWidget.id = "msv-p-widget"; // Set the id attribute of the pWidget div
pWidget.style.cssText = "position: absolute; top: 0px; left: 43px; cursor: pointer; border-right: 2px solid white; width: 11px; height: 55px;"; // Apply CSS styles to the pWidget div

// Create a new div element and assign it to the closeBtn variable
let closeBtn = document.createElement("div");
closeBtn.id = "msv-close-btn"; // Set the id attribute of the closeBtn div

// Create a new div element and assign it to the minBtn variable
let minBtn = document.createElement("div");
minBtn.id = "msv-min-btn"; // Set the id attribute of the minBtn div

// Create a new div element and assign it to the maxBtn variable
let maxBtn = document.createElement("div");
maxBtn.id = "msv-max-btn"; // Set the id attribute of the maxBtn div
maxBtn.style.cssText = "background: url(https://uiresource.ap-south-1.linodeobjects.com/npci/plusbtn.svg); position: absolute; top: -19px; right: -12px; width: 26px; height: 30px; background-size: contain; background-position: 0 0; background-repeat: no-repeat; display: none;"; // Apply CSS styles to the maxBtn div

// Check if the device is mobile and set styles accordingly for minBtn, closeBtn, and chatWidget
isMobile
    ? (
        // If the device is mobile, apply specific styles to minBtn, closeBtn, and chatWidget
        minBtn.style.cssText = "background: url(https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/NPCI/minbtn.svg); position: absolute; top: 0px; right: -9px; width: 15px; height: 18px; background-size: contain; background-position: 0 0; background-repeat: no-repeat;",
            closeBtn.style.cssText = "background: url(https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/NPCI/closebtn.svg); position: absolute; top: 0px; right: -8px; width: 15px; height: 18px; background-size: contain; background-position: 0 0; background-repeat: no-repeat;",
            chatWidget.style.cssText = "width: 55px; height: 88px; position: fixed; bottom: 1px; right: 0px; background-image: url(https://sakthi002.github.io/myscript/images/bot.gif); background-repeat: no-repeat; background-size: contain; background-position: 0 0; transition: transform 0.2s ease 0s; cursor: pointer; transform-origin: 50% 50%; z-index: 9999;"
    )
    : (
        // If the device is not mobile, apply different styles to minBtn, closeBtn, and chatWidget
        minBtn.style.cssText = "background: url(https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/NPCI/minbtn.svg); position: absolute; top: 0px; right: -15px; width: 18px; height: 18px; background-size: contain; background-position: 0 0; background-repeat: no-repeat;",
            closeBtn.style.cssText = "background: url(https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/NPCI/closebtn.svg); position: absolute; top: 0px; right: -8px; width: 18px; height: 18px; background-size: contain; background-position: 0 0; background-repeat: no-repeat;",
            chatWidget.style.cssText = "width: 140px; height: 145px; position: fixed; bottom: 3px; right: 25px; background-image: url(https://sakthi002.github.io/myscript/images/bot.gif); background-repeat: no-repeat; background-size: contain; background-position: 0 0; transition: transform 0.2s ease; cursor: pointer; transform-origin: 50% 50%; z-index: 9999; border-radius: 0px;"
    );

// Create a new div element and assign it to the chatbox variable
const chatbox = document.createElement("div");
chatbox.id = "msv-chatbox"; // Set the id attribute of the chatbox div
chatbox.style.cssText = "font-family: Arial, Helvetica, sans-serif; color: white; z-index: 9999999999; display:none; width: 420px; height: calc(var(--vh, 1vh) * 90); position: fixed; bottom: 0; right: 15px; background: white;"; // Apply CSS styles to the chatbox div

// Create a new div element and assign it to the titleBar variable
let titleBar = document.createElement("div");
titleBar.id = "msv-title-bar"; // Set the id attribute of the titleBar div
titleBar.style.cssText = "background-color: #4266b2; color: white;"; // Apply CSS styles to the titleBar div

// Create a new div element and assign it to the frameBody variable
let frameBody = document.createElement("div");
frameBody.id = "msv-frame-body"; // Set the id attribute of the frameBody div
frameBody.style.cssText = "width: 100%; height: 100%;"; // Apply CSS styles to the frameBody div


// Access the data attribute of the script tag
var scriptTag = document.currentScript;
console.log(scriptTag,'testststststst')
var paramsValue = scriptTag.getAttribute('data-params');
console.log(paramsValue,'pleaseeeeeee'); // This will log 'test' to the console


// Create a new iframe element and assign it to the chatFrame variable
let chatFrame = document.createElement("iframe");
chatFrame.id = "msv-chat-frame"; // Set the id attribute of the chatFrame iframe
chatFrame.src = "https://sakthi002.github.io/faveo-widget/"; // Set the src attribute of the chatFrame iframe
chatFrame.setAttribute("frameborder", "none"); // Set the frameborder attribute of the chatFrame iframe
chatFrame.setAttribute("width", "100%"); // Set the width attribute of the chatFrame iframe
chatFrame.setAttribute("height", "100%"); // Set the height attribute of the chatFrame iframe
chatFrame.setAttribute("allow", "geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor"); // Set the allow attribute of the chatFrame iframe
chatFrame.style.cssText = "box-shadow: rgb(0 0 0 / 50%) 0px -5px 20px; border-radius: 25px 25px 25px 0px;"; // Apply CSS styles to the chatFrame iframe

// Append the chatFrame iframe to the frameBody div
frameBody.appendChild(chatFrame);

// Create a new div element and assign it to the closeCbBtn variable
let closeCbBtn = document.createElement("div");
closeCbBtn.id = "msv-close-cb-btn"; // Set the id attribute of the closeCbBtn div
closeCbBtn.style.cssText = "background-image: url(https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/NPCI/closebtn.svg); background-repeat: no-repeat; background-position: 30px 20px; position: absolute; top: 15px; left: 92%; transform: translateX(-50%); cursor: pointer; background-size: 38px 18px; width: 100px; height: 60px;"; // Apply CSS styles to the closeCbBtn div

// Append the closeCbBtn div to the titleBar div
titleBar.appendChild(closeCbBtn);

let actionTimerFlag = true; // Initialize the actionTimerFlag variable with the value true

// Function to set a timer (not provided in the code)
function setTimer() {
    actionTimerFlag = false;
    actionTimer = setTimeout(function () {
        actionTimerFlag = true;
    }, 10000); // 10000 milliseconds (10 seconds)
}

// Event listener for click on chatWidget div
chatWidget.addEventListener(
    "click",
    function () {
        chatWidget.style.display = "none"; // Hide the chatWidget div
        chatbox.style.display = "block"; // Show the chatbox div
    },
    false
);

// Event listener for click on minBtn div
minBtn.addEventListener(
    "click",
    function (event) {
        event.stopPropagation(); // Prevent event bubbling
        chatWidget.style.zoom = "0.5"; // Zoom out the chatWidget div
        closeBtn.style.display = "none"; // Hide the closeBtn div
        maxBtn.style.display = "block"; // Show the maxBtn div
        this.style.display = "none"; // Hide the minBtn div
    },
    false
);

// Event listener for click on maxBtn div
maxBtn.addEventListener(
    "click",
    function (event) {
        event.stopPropagation(); // Prevent event bubbling
        chatWidget.style.zoom = "normal"; // Reset the zoom of the chatWidget div
        closeBtn.style.display = "block"; // Show the closeBtn div
        minBtn.style.display = "block"; // Show the minBtn div
        this.style.display = "none"; // Hide the maxBtn div
    },
    false
);

// Event listener for click on adTag div
adTag.addEventListener(
    "click",
    function () {
        chatWidget.style.display = "none"; // Hide the chatWidget div
        chatbox.style.display = "block"; // Show the chatbox div
    },
    false
);

// Event listener for click on closeBtn div
closeBtn.addEventListener(
    "click",
    function (event) {
        event.stopPropagation(); // Prevent event bubbling
        chatWidget.style.display = "none"; // Hide the chatWidget div
    },
    false
);

// Event listener for click on closeCbBtn div
closeCbBtn.addEventListener(
    "click",
    function () {
        chatbox.style.display = "none"; // Hide the chatbox div
        chatWidget.style.display = "block"; // Show the chatWidget div
    },
    false
);

// Function to refresh the home ad window (not provided in the code)
function refreshHomeAdWindow() {}

// Function to append the chatWidget to the document body and set its initial image
let appendChatWidget = () => {
    document.body.appendChild(chatWidget); // Append chatWidget div to the document body
    chatWidget.src = "https://uiresource.blob.core.windows.net/chatbot-res/irctc/res/TAX-GURU/AskiRA.png"; // Set the src attribute of the chatWidget div
};

// Set a timeout to append the chatWidget and other elements to the document body
setTimeout(() => {
    appendChatWidget(); // Call the appendChatWidget function
    chatWidget.appendChild(minBtn); // Append minBtn div to the chatWidget div
    chatWidget.appendChild(maxBtn); // Append maxBtn div to the chatWidget div
    chatbox.appendChild(titleBar); // Append titleBar div to the chatbox div
    chatbox.appendChild(frameBody); // Append frameBody div to the chatbox div
    document.body.appendChild(chatbox); // Append chatbox div to the document body
}, 1200); // Wait for 1200 milliseconds (1.2 seconds) before executing the code inside the setTimeout function

// Create a new style element and assign it to the style variable
let style = document.createElement("style");
// Set the innerHTML of the style element with CSS styles for specific media queries and animations
style.innerHTML = `
@media only screen and (max-width:840px) and (orientation:landscape){
  #msv-chatbox{
    height:100%!important;
    height:calc(100% - 20px)!important;
    top:20px!important;
    right:0!important;
  }
}
@media only screen and (max-width:640px) and (orientation:portrait){
  #msv-chatbox{
    width:100%!important;
    height:calc(100% - 20px)!important;
    top:20px!important;
    right:0!important;
    left:0!important;
    bottom:0!important;
  }
}
.msvAvtr {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;
  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
`;
// Append the style element to the document head
document.head.appendChild(style);
