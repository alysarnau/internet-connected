let displayMessage = document.querySelector(".status")
// displayMessage.innerHTML = 'Text!'
let connection = true

function detectConnection() {
    //check connection
    return (connection ? displayMessage.innerHTML = "You're connected!" : "Uh-oh, you're not connected!")
}


document.onload(detectConnection())