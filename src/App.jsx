import {
  AreaLight,
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
} from "lingo3d-react";
import { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.production.min";
import { animationsObj, activeMap } from "./model";
let characterState = "idle";

const Game = () => {
  const key = useKeyboard();
  const characterRef = useRef();
  const [joystick, setJoystick] = useState({ x: 0, y: 0, angle: 0 });
  const windowSize = useWindowSize();
  const fov = windowSize.width > windowSize.height ? 75 : 100;

  const forword = key === "w";
  const leftRunning = key === "a";
  const rightRunning = key === "d";
  const back = key === "s";
  const dance = key === "v";
  const jump = key === "space";

  // if(key === 'space'){
  //   setCharacterState('crossJumps')
  // }
  // if(key === 'w'||key==='s'|| key ==='a'|| key ==='d'){
  //   setCharacterState('running')
  // }
  // if(key === 'v'){
  //   setCharacterState('dancing')
  // }

  useLoop(() => {
    characterRef.current?.moveForward(-5);
  }, forword);
  useLoop(() => {
    characterRef.current?.moveRight(5);
  }, leftRunning);
  useLoop(() => {
    characterRef.current?.moveRight(-5);
  }, rightRunning);
  useLoop(() => {
    characterRef.current?.moveForward(5);
  }, back);

  return (
    <>
      <World defaultLight={false} bloom bloomStrength={0.2} bloomThreshold={0.3}>
        <Cube
          width={2000}
          depth={2000}
          height={1}
          innerY={-50}
          color="#3d3d3d"
          texture="dimian.jpg"
          textureRepeat={10}
          physics="map"
        >
          {/* <Model src="fairy.glb" scale={20} physics="map" y={300}></Model> */}

          <ThirdPersonCamera active mouseControl fov={75}>
            <Model
              src="/public/new/T-Pose.fbx"
              //src="person.glb"
              innerX={-10}
              innerY={-50}
              innerZ={50}
              ref={characterRef}
              animations={{ ...animationsObj }}
              animation={
                forword || back || rightRunning || leftRunning
                  ? "runningAnimation"
                  : dance
                  ? "Dancing"
                  : "idleAnimation"
              }
            />
          </ThirdPersonCamera>

          <SkyLight intensity={0.5} />
          <AmbientLight intensity={0.8} />
        </Cube>
        <Skybox texture="skybox.jpg" />
      </World>

      <Joystick
        onMove={setJoystick}
        onMoveEnd={() => setJoystick({ x: 0, y: 0, angle: e.angle })}
      />
    </>
  );
};

const App = () => {
  const progress = usePreload(["gallery.glb", "skybox.jpg"], "3.5mb");

  if (progress < 100)
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          left: 0,
          top: 0,
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        loading {Math.round(progress)}%
      </div>
    );

  return <Game />;
};

export default App;

// {import { World, Cube, OrbitCamera, Model, Skybox, ThirdPersonCamera } from "lingo3d-react";
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

//   return (
//     <World>
//       <Skybox texture="skybox.jpg" />
//       <Cube
//         width={2000}
//         depth={2000}
//         height={1}
//         z={-100}
//         color="#3d3d3d"
//         texture="dimian.jpg"
//       >
//         <Model src="Women.glb" scale={2} physics="character" />
//         {/* <Cube scale={1} color="orange" x={position.x} y={position.y} z={position.z} /> */}
//         <OrbitCamera active z={300} />
//       </Cube>
//     </World>
//   );
// }

// export default App;}
