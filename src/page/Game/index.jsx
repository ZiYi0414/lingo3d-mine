import {
  ThirdPersonCamera,
  OrbitCamera,
  Joystick,
  Model,
  Skybox,
  useWindowSize,
  World,
  Editor,
} from "lingo3d-react";
import { useRef, useState, useEffect } from "react";

import MainCharacter from "../../component/characterComponent/MainCharacter";
import GroundCube from "../../component/scenesComponent/groundCube";
import LightGroup from "../../component/light/Light";

const Game = () => {
  const windowSize = useWindowSize();
  const fov = windowSize.width > windowSize.height ? 75 : 100;
  const [joystick, setJoystick] = useState({ x: 0, y: 0, angle: 0 });

  return (
    <>
      <World
        defaultLight={false}
        bloom
        bloomStrength={0.2}
        bloomThreshold={0.3}
      >
        <GroundCube />

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
          <MainCharacter />
        </ThirdPersonCamera>

        <LightGroup />
        <Skybox texture="background/skybox.jpg" />
      </World>
      <Editor />
    </>
  );
};

export default Game;
