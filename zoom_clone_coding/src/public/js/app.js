const messageList = document.querySelector('ul');
const messageForm = document.querySelector('#message');
const nicknameForm = document.querySelector('#nickname');
const socket = new WebSocket(`ws://${window.location.host}`);

function makeMessage(type, payload) {
  const msg = { type, payload };
  return JSON.stringify(msg);
}

socket.addEventListener('open', () => {
  console.log('Connected to Server.');
});

socket.addEventListener('message', async (msg) => {
  const li = document.createElement('li');
  li.innerText = msg.data;
  messageList.appendChild(li);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from server.');
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector('input');
  socket.send(makeMessage('new_message', input.value));
  input.value = '';
}

function handleNicknameSubmit(event) {
  event.preventDefault();
  const input = nicknameForm.querySelector('input');
  socket.send(makeMessage('nickname', input.value));
  input.value = '';
}

messageForm.addEventListener('submit', handleSubmit);
nicknameForm.addEventListener('submit', handleNicknameSubmit);
