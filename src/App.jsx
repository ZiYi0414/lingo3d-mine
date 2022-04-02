import {
  AreaLight,
  DirectionalLight,
  Cube,
  FirstPersonCamera,
  ThirdPersonCamera,
  AmbientLight,
  OrbitCamera,
  Joystick,
  Model,
  Skybox,
  useKeyboard,
  useLoop,
  usePreload,
  useWindowSize,
  World,
  Editor,
  SkyLight,
  useMouse,
} from "lingo3d-react";
import { useRef, useState, useEffect } from "react";
import { animationsGirl1, animationsGirl2, animationsGirl3 } from "./model";
import "./App.css";

let pose = "idleAnimation";
const Game = () => {
  const windowSize = useWindowSize();
  const fov = windowSize.width > windowSize.height ? 75 : 100;
  const [joystick, setJoystick] = useState({ x: 0, y: 0, angle: 0 });
  const key = useKeyboard();
  const characterRef = useRef();
  const [characterRotationY, setCharacterRotationY] = useState(0);
  const [pose, setPose] = useState("idleAnimation");

  const characterState = (key) => {
    console.log(key);
    switch (key) {
      case "w": {
        setCharacterRotationY(0);
        setPose("walkingAnimation");
        break;
      }
      case "s": {
        // setCharacterRotationY(180);
        setPose("backRunning");
        break;
      }
      case "a": {
        // setCharacterRotationY(90);
        setPose("leftRunning");
        break;
      }
      case "d": {
        // setCharacterRotationY(270);
        setPose("rightRunning");
        break;
      }
      case "v": {
        setPose("Dancing");
        break;
      }
      case "w Shift": {
        setPose("runningAnimation");
        break;
      }
      case "Shift w": {
        setPose("runningAnimation");
        break;
      }
    }
  };

  useLoop(() => {
    characterRef.current?.moveForward(-4);
  }, pose === "runningAnimation");
  useLoop(() => {
    characterRef.current?.moveForward(-2);
  }, pose === "walkingAnimation");
  useLoop(() => {
    characterRef.current?.moveForward(1);
  }, pose === "backRunning");
  useLoop(() => {
    characterRef.current?.moveRight(2);
  }, pose === "leftRunning");
  useLoop(() => {
    characterRef.current?.moveRight(-2);
  }, pose === "rightRunning");
  useLoop(() => {
    characterRef.current?.moveForward(-0.2);
  }, pose === "Zombie");
  useLoop(() => {
    characterRef.current?.moveForward(-6);
  }, pose === "CrossJumps");

  useEffect(() => {
    characterState(key);
    return () => {
      setPose("idleAnimation");
    };
  }, [key]);

  return (
    <>
      <World
        defaultLight={false}
        bloom
        bloomStrength={0.2}
        bloomThreshold={0.3}
      >
        <Cube
          width={6000}
          depth={6000}
          height={1}
          innerY={-50}
          color="#3d3d3d"
          texture="public/background/dimian.jpg"
          textureRepeat={10}
          boxVisible
        >
          <Model src="other/fish.glb" z={-549}></Model>
          <Model
            src="scenes/house1.glb"
            scale={4}
            x={0}
            y={123}
            z={-704}
            physics="map"
          ></Model>
          <ThirdPersonCamera active mouseControl fov={fov}>
            <Model
              src="characters/Girl/girl3/T-Pose.fbx"
              innerRotationY={characterRotationY}
              loadedX={-2}
              loadedY={-50}
              loadedZ={3}
              ref={characterRef}
              animations={{ ...animationsGirl3 }}
              animation={pose}
              boxVisible
            />
          </ThirdPersonCamera>

          <SkyLight intensity={0.5} />
          <AmbientLight intensity={0.3} />
        </Cube>
        <Skybox texture="background/skybox.jpg" />
      </World>
      <Editor />
      <Joystick
        onMove={setJoystick}
        onMoveEnd={() => setJoystick({ x: 0, y: 0, angle: e.angle })}
      />
    </>
  );
};

const App = () => {
  const progress = usePreload(
    [
      "characters/Girl/girl3/T-Pose.fbx",
      "background/skybox.jpg",
      "background/dimian.jpg",
    ],
    "40.5mb"
  );
  console.log(progress);

  if (progress < 100)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          left: 0,
          top: 0,
          background: "#34495e",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ecf0f1",
          fontSize: 25,
        }}
      >
        垃圾代码正在加载... {Math.round(progress)}%
      </div>
    );

  return (
    <>
      <Game />
    </>
  );
};

export default App;
