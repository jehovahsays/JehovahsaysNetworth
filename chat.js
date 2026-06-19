let localConnection;
let dataChannel;

// Step 1: Create Offer
async function startOffer() {
  localConnection = new RTCPeerConnection();

  dataChannel = localConnection.createDataChannel("chat");
  setupDataChannel();

  const offer = await localConnection.createOffer();
  await localConnection.setLocalDescription(offer);

  document.getElementById("offer").value = JSON.stringify(offer);
  document.getElementById("offerBox").style.display = "block";
}

// Step 2: Paste remote offer, create answer
async function submitOffer() {
  const remoteOffer = JSON.parse(document.getElementById("remoteOffer").value);

  localConnection = new RTCPeerConnection();

  localConnection.ondatachannel = event => {
    dataChannel = event.channel;
    setupDataChannel();
  };

  await localConnection.setRemoteDescription(new RTCSessionDescription(remoteOffer));

  const answer = await localConnection.createAnswer();
  await localConnection.setLocalDescription(answer);

  document.getElementById("answer").value = JSON.stringify(answer);
  document.getElementById("answerBox").style.display = "block";
}

// Step 3: Paste remote answer and finish handshake
async function submitAnswer() {
  const remoteAnswer = JSON.parse(document.getElementById("remoteAnswer").value);
  await localConnection.setRemoteDescription(new RTCSessionDescription(remoteAnswer));
  log("🔐 Secure connection established.");
}

// Handle sending and receiving messages
function setupDataChannel() {
  dataChannel.onopen = () => {
    document.getElementById("msgInput").disabled = false;
    document.getElementById("sendBtn").disabled = false;
    log("🟢 Data channel is open");
  };

  dataChannel.onmessage = e => {
    log("👤 " + e.data);
  };
}

function sendMessage() {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (msg && dataChannel && dataChannel.readyState === "open") {
    dataChannel.send(msg);
    log("🧠 You: " + msg);
    input.value = "";
  }
}

function log(message) {
  const box = document.getElementById("messages");
  const div = document.createElement("div");
  div.textContent = message;
  div.className = "msg";
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}