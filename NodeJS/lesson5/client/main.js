const ws = new WebSocket("ws://localhost:8000");

const chatContainer = document.getElementById("chatContainer");
const login = document.getElementById("login");
const startChatBtn = document.getElementById("startChat");
const nicknameInput = document.getElementById("nicknameInput");

const chat = document.getElementById("chat");
const msg = document.getElementById("msg");
const btn = document.getElementById("btn");
const currentUser = document.getElementById("currentUser");

const randomId = () => Math.random().toString(36).substring(2, 14);

let userId = "";
let userName = "";

startChatBtn.onclick = () => {
  const nickname = nicknameInput.value.trim();
  if (!nickname) return alert("Please enter a nickname.");

  userName = nickname;
  userId = randomId();

  currentUser.innerText = `Name: ${userName}`;

  ws.send(JSON.stringify({ type: "join", name: userName }));

  login.style.display = "none";
  chatContainer.style.display = "flex";
};

btn.onclick = () => {
  const value = msg.value.trim();
  if (!value) return;

  ws.send(
    JSON.stringify({
      type: "message",
      id: userId,
      name: userName,
      message: value,
    })
  );
  msg.value = "";
};

msg.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    btn.click();
  }
});

ws.onmessage = (event) => {
  const message = JSON.parse(event.data);

  if (message.type === "join") {
    const joinMessage = `
      <div class="system-message">
        ${message.name} has entered the chat.
      </div>
    `;
    chat.insertAdjacentHTML("beforeend", joinMessage);
    chat.scrollTop = chat.scrollHeight;
  } else if (message.type === "message") {
    const renderedMessage = `
      <div class="${userId == message.id ? "right" : "left"}">
        <div class="avatar">${message.name[0].toUpperCase()}</div>
        <div class="text">
          <div style="font-size: 12px; color: gray; margin-bottom: 3px;">${
            message.name
          }</div>
          ${message.message}
        </div>
      </div>
    `;
    chat.insertAdjacentHTML("beforeend", renderedMessage);
    chat.scrollTop = chat.scrollHeight;
  }
};
