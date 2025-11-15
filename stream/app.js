const video = document.getElementById("camera");
const canvas = document.getElementById("snapshot");
const snapBtn = document.getElementById("snapBtn");
const recordBtn = document.getElementById("recordBtn");
const streamBtn = document.getElementById("streamBtn");
const liveIndicator = document.getElementById("live-indicator");

let mediaRecorder = null;
let chunks = [];
let isRecording = false;
let isStreaming = false;

async function loadConfig() {
  try {
    const res = await fetch('./config.json');
    return await res.json();
  } catch (err) {
    console.warn('Could not load config.json, using default values.');
    return null;
  }
}

async function startCamera() {
  const config = await loadConfig();

  let constraints = { video: true, audio: true };

  if (config && config.resolution && config.fps) {
    const [width, height] = config.resolution.split('x').map(Number);
    constraints = {
      video: {
        width,
        height,
        frameRate: config.fps
      },
      audio: true
    };
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
    window.localStream = stream;
  } catch (e) {
    alert("Camera error: " + e.message);
  }
}

snapBtn.addEventListener("click", () => {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  canvas.toBlob(blob => {
    console.log("📸 Photo captured:", blob);
    alert("Photo captured (check console).");
  }, "image/jpeg");
});

recordBtn.addEventListener("click", () => {
  if (!isRecording) {
    try {
      mediaRecorder = new MediaRecorder(video.srcObject);
      chunks = [];

      mediaRecorder.ondataavailable = e => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: "video/webm" });
        console.log("🎥 Video recorded:", blob);
        alert("Video recorded (check console).");
      };

      mediaRecorder.start();
      isRecording = true;
      recordBtn.textContent = "⏹️ Stop Recording";
    } catch (e) {
      alert("Recording not supported: " + e.message);
    }
  } else {
    mediaRecorder.stop();
    isRecording = false;
    recordBtn.textContent = "⏺️ Start Recording";
  }
});

streamBtn.addEventListener("click", () => {
  isStreaming = !isStreaming;
  liveIndicator.classList.toggle("hidden", !isStreaming);
  streamBtn.textContent = isStreaming ? "🛑 Stop Streaming" : "🔴 Stream to Self";
});

window.addEventListener("load", startCamera);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log("SW registered:", reg.scope))
    .catch(err => console.error("SW registration failed:", err));
}