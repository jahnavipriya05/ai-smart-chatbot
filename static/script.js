async function sendChat() {


const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const message = input.value.trim();

if(message === ""){
    return;
}

// User Message
const userDiv = document.createElement("div");
userDiv.classList.add("user-message");
userDiv.textContent = message;
chatBox.appendChild(userDiv);

// Clear Input
input.value = "";

// Scroll Down
chatBox.scrollTop = chatBox.scrollHeight;

// Typing Indicator
const loadingDiv = document.createElement("div");
loadingDiv.classList.add("bot-message");
loadingDiv.textContent = "AI is typing...";
chatBox.appendChild(loadingDiv);

try {

    const response = await fetch("/chat",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            message:message
        })
    });

    const data = await response.json();

    // Remove Loading Message
    loadingDiv.remove();

    // Bot Reply
    const botDiv = document.createElement("div");
    botDiv.classList.add("bot-message");
    botDiv.textContent = data.reply;
    chatBox.appendChild(botDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

}
catch(error){

    loadingDiv.remove();

    const errorDiv = document.createElement("div");
    errorDiv.classList.add("bot-message");
    errorDiv.textContent = "Something went wrong!";
    chatBox.appendChild(errorDiv);

    console.error(error);
}

}

// Enter Key Support
document.getElementById("user-input")
.addEventListener("keypress", function(event){

if(event.key === "Enter"){
    sendChat();
}


});
