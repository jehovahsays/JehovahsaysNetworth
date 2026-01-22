/**
 * MEV SECURE P2P CHAT - ENGINE ONLY
 * Encapsulated to block remote CLI interference.
 */
(function() {
    "use strict";

    let localConnection;
    let dataChannel;

    // Security Gate: Ensure the user came through the gateway
    if (localStorage.getItem('mev_human_verified') !== 'true') {
        return;
    }

    // Handshake Functions
    window.startOffer = async function() {
        localConnection = new RTCPeerConnection();
        dataChannel = localConnection.createDataChannel("chat");
        setupDataChannel();

        const offer = await localConnection.createOffer();
        await localConnection.setLocalDescription(offer);

        const el = document.getElementById("offer");
        if (el) {
            el.value = JSON.stringify(offer);
            document.getElementById("offerBox").style.display = "block";
        }
    };

    window.submitOffer = async function() {
        try {
            const val = document.getElementById("remoteOffer").value;
            const remoteOffer = JSON.parse(val);

            localConnection = new RTCPeerConnection();
            localConnection.ondatachannel = event => {
                dataChannel = event.channel;
                setupDataChannel();
            };

            await localConnection.setRemoteDescription(new RTCSessionDescription(remoteOffer));
            const answer = await localConnection.createAnswer();
            await localConnection.setLocalDescription(answer);

            const el = document.getElementById("answer");
            if (el) {
                el.value = JSON.stringify(answer);
                document.getElementById("answerBox").style.display = "block";
            }
        } catch (e) {
            log("⚠️ System: Invalid handshake data.");
        }
    };

    window.submitAnswer = async function() {
        try {
            const val = document.getElementById("remoteAnswer").value;
            const remoteAnswer = JSON.parse(val);
            await localConnection.setRemoteDescription(new RTCSessionDescription(remoteAnswer));
            log("🔐 Connection Secured.");
        } catch (e) {
            log("⚠️ System: Connection failed.");
        }
    };

    function setupDataChannel() {
        dataChannel.onopen = () => {
            const input = document.getElementById("msgInput");
            const btn = document.getElementById("sendBtn");
            if (input && btn) {
                input.disabled = false;
                btn.disabled = false;
            }
            log("🟢 Peer connected.");
        };

        dataChannel.onmessage = e => {
            log("Peer: " + e.data);
        };
    }

    window.sendMessage = function() {
        const input = document.getElementById("msgInput");
        const msg = input.value.trim();
        if (msg && dataChannel && dataChannel.readyState === "open") {
            dataChannel.send(msg);
            log("You: " + msg);
            input.value = "";
        }
    };

    /**
     * THE PRIMARY SHIELD
     * Using textContent ensures that incoming text can never be executed as code.
     */
    function log(message) {
        const box = document.getElementById("messages");
        if (!box) return;
        
        const div = document.createElement("div");
        div.className = "msg";
        div.textContent = message; // BLOCKING ALL XSS/HTML INJECTION
        
        box.appendChild(div);
        box.scrollTop = box.scrollHeight;
    }

})();
