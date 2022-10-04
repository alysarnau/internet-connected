const displayMessage = document.querySelector(".status")
const displayImage = document.querySelector("#image")
const backgroundColor = document.querySelector(".container")

function setColor() {
    backgroundColor.classList.add("online")
}

// see if we can fetch an image from external server - this will be our success cond.
async function checkConnectionStatus() {
    try {
        const fetchResult = await fetch("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Australian_Shepherd_red_bi.JPG/1280px-Australian_Shepherd_red_bi.JPG?time=" + (new Date()).getTime());
        displayImage.src = "./images/internet.png"
        setColor();
        // checks for success
        return (fetchResult.status >= 200 && fetchResult.status < 300);
    }
    catch(error) {
        console.log(error)
        displayMessage.textContent = "Uh-oh, you're offline!";
        displayImage.src = "./images/no-internet.png"
        backgroundColor.classList.remove("online")
    }
}

// Monitor Connection
setInterval(async () => {
    const result = await checkConnectionStatus();
    if (result) {
        displayMessage.textContent = "You're connected!"
        setColor();
    } else {
        displayMessage.textContent = "Uh-oh, you're offline!"
        backgroundColor.classList.remove("online")
    }
}, 5000);

// check connection on pageload
window.addEventListener("load", async (e) => {
    if (checkConnectionStatus()) {
        displayMessage.textContent = "You're connected!"
    } else {
        displayMessage.textContent = "Uh-oh, you're offline!"
    }
})


