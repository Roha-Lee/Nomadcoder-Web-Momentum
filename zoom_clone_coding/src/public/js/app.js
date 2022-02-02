const messageList = document.querySelector('ul');
const messageForm = document.querySelector('form');

const socket = new WebSocket(`ws://${window.location.host}`);
socket.addEventListener('open', () => {
  console.log('Connected to Server.');
});

socket.addEventListener('message', async (event) => {
  console.log(`New message: ${await event.data.text()}`);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from server.');
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector('input');
  socket.send(input.value);
  input.value = '';
}
messageForm.addEventListener('submit', handleSubmit);
