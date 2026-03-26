// LOGIN
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Invalid login!";
  }
}

function logout() {
  window.location.href = "index.html";
}

// CHATBOT
function sendMessage() {
  const input = document.getElementById("chat-input");
  const chatBox = document.getElementById("chat-box");

  const msg = input.value;
  if (!msg) return;

  chatBox.innerHTML += `<div><b>You:</b> ${msg}</div>`;

  let reply = "I'm your assistant 🤖";
  if (msg.includes("course")) reply = "Courses: AI, Web Dev, Data Science";

  chatBox.innerHTML += `<div><b>Bot:</b> ${reply}</div>`;
  input.value = "";
}

// NOTES
function saveNote() {
  const note = document.getElementById("note-input").value;
  const list = document.getElementById("notes-list");

  if (!note) return;

  const div = document.createElement("div");
  div.textContent = note;
  list.appendChild(div);

  document.getElementById("note-input").value = "";
}

// EVENTS
function addEvent() {
  const name = document.getElementById("event-input").value;
  const date = document.getElementById("event-date").value;
  const list = document.getElementById("event-list");

  if (!name || !date) return;

  const li = document.createElement("li");
  li.textContent = `${name} - ${date}`;
  list.appendChild(li);

  document.getElementById("event-input").value = "";
}