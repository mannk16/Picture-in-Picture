"use strict";

const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onLoadmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async () => {
  // Disable the button

  button.disabled = true;
  //start picture in picture

  await videoElement.requestPictureInPicture();

  //reset button:
  button.disabled = "false";
});
selectMediaStream();
