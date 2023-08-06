class EngageChatPawn {

	template() {
		return `
        <div style="position: absolute;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 8px;
            padding: 10px;
            top: 10px;
            left: 65%;
            "class="engage-chat">
            <div>
                <button
                    id="join-btn"
                    style="background-color: green;
                        border: none;
                        padding: 10px;
                        color: #fff;
                    "
                >
                    Join voice chat
                </button>
                <button id="leave-btn"
                    style="display: none;
                        background-color: red;
                        border: none;
                        padding: 10px;
                        color: #fff;
                    "
                >
                    Leave voice chat
                </button>
                <button id="toggle-mute"
                    style="display: none;
                        background-color: green;
                        border: none;
                        padding: 10px;
                        color: #fff;
                    "
                >
                    Mute
                </button>
            </div>
            <div style="font-size: 14px;">
                People in chat:
                <span id="user-count">-</span>
            </div>
        </div>
        `
	}

	async setup() {
		this.addEventListener("pointerTap", "turnMusicOn");
		if (!window.EngageClient) {
			await new Promise(resolve => {
				const script = document.createElement("script")
				script.setAttribute("src", "lib/atmoky-engage-client.js")
				script.onload = resolve
				document.body.appendChild(script)
			})
		}

		// console.log(this.actor.service("PlayerManager").players.values().value);
		//
		this.avatar = this.getMyAvatar().actor;

		this.space = new window.EngageClient.Space({
			audioContext: new AudioContext(),
			numberOfAudioObjects: 10,
			numberOfDistanceModels: 10
		})
		// await this.space.spatialAudioInitializedPromise;




		setTimeout(() => {
			this.dmShort = this.space.distanceModels[0];

			this.dmShort.name = "short";
			this.dmShort.setDataPoints(
				{ distance: 0.05, gainInDecibels: 0 }, // point A
				{ distance: 0.1, gainInDecibels: -6 }, // point B
				{ distance: 1, gainInDecibels: -30 }, // point C
				1.5 // max distance
			);

			this.dmLong = this.space.distanceModels[1];
			this.dmLong.name = "long";
			this.dmLong.setDataPoints(
				{ distance: 1, gainInDecibels: 0 }, // point A
				{ distance: 10, gainInDecibels: -6 }, // point B
				{ distance: 20, gainInDecibels: -30 }, // point C
				25 // max distance
			);



			this.audioObject = this.space.createAudioObject();
			this.audioFile = new window.EngageClient.AudioFile(this.space.spatialAudio.audioContext);
			this.audioObject.setDistanceModel(this.dmLong);
			this.audioObject.setReverbDistanceModel(this.dmLong);
			// translation: [56.24178261604912, -0.411112061042908, -0.8298624303773007],
			this.audioObject.setPosition(61.531688949683414, -0.7, -5.537432209037485);
			this.audioFile
				.load("assets/sound/haiti.mp4", true)
				.then(() => console.log("Audio file loaded"));
			this.audioFile.setLoop(true);
			this.audioObject.setInput(this.audioFile);
		},2000)

		// await this.init();
		// await this.initAudioObject();
		await this.joinVoiceChat();

		this.rootDiv = document.createElement("div");
		document.body.appendChild(this.rootDiv);
		this.rootDiv.innerHTML = this.template();

		this.joinButton = this.rootDiv.querySelector("#join-btn");
		this.leaveButton = this.rootDiv.querySelector("#leave-btn");
		this.userCount = this.rootDiv.querySelector("#user-count");
		this.toggleMuteButton = this.rootDiv.querySelector("#toggle-mute");

		this.joinButton.addEventListener("click", async () => this.joinVoiceChat());
		this.leaveButton.addEventListener("click", async () => this.leaveVoiceChat());
		this.toggleMuteButton.addEventListener("click", async () => this.toggleMute());
		this.player = this.getMyAvatar();
		this.subscribe("playerManager", "enter", "playerEnter");
		this.subscribe("playerManager", "leave", "playerLeave");
		// this.subscribe(this.player.playerId, "view-exit", this.youLeave);

		this.room = null;
		this.userCountSize = 0;
		this.space.on("roomConnected", (room) => {
			// this.initAudioObject();
			// const devices = await window.EngageClient.DeviceManager.getInstance().getDevices('audioinput');
			// navigator.mediaDevices.enumerateDevices().then(this.gotDevices).catch(error => error);
			// console.log(devices);
			this.room = room;
			console.log(this.room.localParticipant);
			// this.room.localParticipant.setPositionMode(this.dmShort);
			this.updateUserCount(room.participants.size + 1);
			console.log(`Connected to room ${room.name}. Publishing microphone...`);
			this.room.localParticipant.setMicrophoneEnabled(true, {echoCancellation: true}).then(() => {
				console.log("Microphone published.");
				console.log(this.room.localParticipant);
				this.subscribeToTranslation(this.room.localParticipant.identity);
				this.subscribeToRotation(this.room.localParticipant.identity);
				if (this.room.participants.size !== 0) {
					this.room.participants.forEach((participant) => {
						this.setParticipantSubscribe(participant.identity);
					});
				}

				this.leaveButton.disabled = false;
				this.toggleMuteButton.style.display = "initial";
			});

			this.room.on("participantConnected", (participant) => {
				this.updateUserCount(this.userCountSize + 1);
				this.setParticipantSubscribe(participant.identity);
			});

			this.room.on("participantDisconnected", (participant) => {
				this.updateUserCount(this.userCountSize !== 1 ? this.userCountSize - 1 : "-");
			});

			this.room.on("activeSpeakersChanged", (participants) => {
				console.log(participants);
				console.log("wqewqeqweqweq");
			});
		})
	}

	async init() {
		// this.space = new window.EngageClient.Space({
		// 	audioContext: new AudioContext(),
		// 	numberOfAudioObjects: 1,
		// 	numberOfDistanceModels: 2
		// })
		// await this.space.spatialAudioInitializedPromise;
		// this.dmShort = this.space.distanceModels[0];
		//
		// this.dmShort.name = "short";
		// this.dmShort.setDataPoints(
		// 	{ distance: 0.05, gainInDecibels: 0 }, // point A
		// 	{ distance: 0.1, gainInDecibels: -6 }, // point B
		// 	{ distance: 1, gainInDecibels: -30 }, // point C
		// 	1.5 // max distance
		// );
		//
		// this.dmLong = this.space.distanceModels[1];
		// this.dmLong.name = "long";
		// this.dmLong.setDataPoints(
		// 	{ distance: 0.1, gainInDecibels: 0 }, // point A
		// 	{ distance: 0.2, gainInDecibels: -6 }, // point B
		// 	{ distance: 2, gainInDecibels: -30 }, // point C
		// 	2.5 // max distance
		// );
	}

	async initAudioObject() {
		// this.audioObject = this.space.createAudioObject();
		// this.audioFile = new window.EngageClient.AudioFile(this.space.spatialAudio.audioContext);
		// this.audioObject.setPosition(0, 0, 0);
		// this.audioObject.setDistanceModel(this.dmShort);
		// this.audioObject.setReverbDistanceModel(this.dmLong);
		// this.audioObject.setReverbSendDecibels(-10);
		// this.audioObject.setOcclusion(0.1);
		// this.audioFile.load("assets/sound/Britney.mp4", true).then(() => console.log("Sound Loaded"));
		// this.audioObject.setInput(this.audioFile);
		// console.log(this.audioObject);
	}

	turnMusicOn() {
		if (this.audioFile.isPlaying()) {
			this.audioFile.pause();
		} else {
			this.audioFile.play();
		}
	}
	gotDevices(deviceInfos) {
		console.log(deviceInfos.filter(device => device.kind === "audioinput"));
	}

	teardown() {
		this.space.removeAllAudioObjects();
		this.space.leaveAllRooms();
	}
	youLeave(p) {
		// console.log(p);
	}

	setParticipantSubscribe(id) {
		this.subscribe(id, "translateTo", this.remoteParticipantTranslate);
	}

	remoteParticipantTranslate() {
		this.actor.service("PlayerManager").players.forEach(player => {
			const [x, y, z] = player._translation;
			if (this.player._actor.id !== player.id) {
				const remoteParticipant = this.room.getParticipantByIdentity(player.id);
				remoteParticipant.setPosition(x, y, z);
			}
		})
	}

	subscribeToTranslation(id) {
		this.subscribe(id, "translateTo", this.setTranslation);
	}

	setTranslation(data) {
		console.log(data);
		const [x, y, z] = data;
		this.space.audioListener.setPosition(x, y, z);
	}

	subscribeToRotation(id) {
		this.subscribe(id, "rotateTo", this.setRotation);
	}

	setRotation(data) {
		console.log(data);
		const [x, y, z, w] = data;
		this.space.audioListener.setRotationQuaternion(w, x, y, z);
	}

	updateUserCount(numParticipants) {
		this.userCountSize = numParticipants;
		this.userCount.innerText = numParticipants;
	}
	playerEnter(p) {
		// console.log(p);
	}

	playerLeave(p) {
		// console.log(p);
		// this.room.leave();
		// this.updateUserCount(this.userCountSize !== 0 ? this.userCountSize - 1 : "-");
	}

	async joinVoiceChat () {
		this.space.resumeAudio();
		const { token } = await this.getToken();
		const url = "https://causeverse-6fxnof34.livekit.cloud/";

		this.room = this.space.joinRoom(url, token);
	}

	async getToken() {
		const participantName = this.avatar.id;
		const response = await fetch("https://api.8base.com/clidfgh5000ma08mmeduqevky/webhook/engage/token",{
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				roomName: "test-1",
				participantName
			})
		});
		return await response.json();
	}

	async leaveVoiceChat () {
		await this.room.localParticipant.setMicrophoneEnabled(true, {echoCancellation: true});
		this.room.leave();
		this.joinButton.style.display = "initial";
		this.leaveButton.style.display = "none";
		this.toggleMuteButton.style.display = "none";
		this.toggleMuteButton.style.background = "green";
		this.toggleMuteButton.innerHTML = "Mute";
		this.updateUserCount("-");
	}

	async toggleMute() {
		if (this.room.localParticipant.isMicrophoneEnabled) {
			this.toggleMuteButton.style.background = "red";
			this.toggleMuteButton.innerHTML = "Unmute";
			await this.room.localParticipant.setMicrophoneEnabled(false, {echoCancellation: true});
		} else {
			this.toggleMuteButton.style.background = "green";
			this.toggleMuteButton.innerHTML = "Mute";
			await this.room.localParticipant.setMicrophoneEnabled(true, {echoCancellation: true});
		}
	}
}

export default {
	modules: [
		{
			name: "EngageChat",
			pawnBehaviors: [EngageChatPawn],
		},
	]
}
