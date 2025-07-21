#splash {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#splash-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  z-index: 1;
  object-fit: contain;
}

.blur-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: black center center / cover no-repeat;
  filter: blur(20px);
  z-index: 0;
  transform: scale(1.1);
}
.logo-box {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
#splash-video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100vw;
  max-height: 100vh;
  object-fit: contain;
  z-index: 2;
  background: #000;
}
