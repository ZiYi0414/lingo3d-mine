import {
  ThirdPersonCamera,
  OrbitCamera,
  Model,
  Skybox,
  useWindowSize,
  World,
  Editor,
  useKeyboard,
} from "lingo3d-react";
import { useState, useEffect } from "react";

import MainCharacter from "../../component/characterComponent/MainCharacter";
import WhiteHairCharacter from "../../component/characterComponent/WhiteHairCharacter";
import OrangeHairCharacter from "../../component/characterComponent/OrangeHairCharacter";
import GroundCube from "../../component/scenesComponent/groundCube";
import LightGroup from "../../component/light/Light";
import NightHouse from "../../component/scenesComponent/NightHouse";
import SnowScene from "../../component/scenesComponent/SnowScene";

const Game = () => {
  const key = useKeyboard();
  const windowSize = useWindowSize();
  const fov = windowSize.width > windowSize.height ? 75 : 100;
  const [isDance, setIsDance] = useState(false);
  useEffect(() => {
    if (key === "v") setIsDance(true);
    return () => {
      setIsDance(false);
    };
  }, [key]);
  return (
    <>
      <World
        defaultLight={false}
        bloom
        bloomRadius={1}
        bloomStrength={0.2}
        bloomThreshold={0.3}
      >
        <GroundCube />
        <NightHouse />
        <ThirdPersonCamera active mouseControl fov={fov}>
          <MainCharacter id="mainCharacter" keyboard={key} />
        </ThirdPersonCamera>
        <WhiteHairCharacter
          isDance={isDance}
          intersectIDs={["mainCharacter"]}
          keyboard={key}
        />
        <OrangeHairCharacter
          isDance={isDance}
          intersectIDs={["mainCharacter"]}
          keyboard={key}
        />
        <LightGroup />
        <Skybox
          texture={[
            "background/skybox/Left.png",
            "background/skybox/Right.png",
            "background/skybox/Up.png",
            "background/skybox/Down.png",
            "background/skybox/Front.png",
            "background/skybox/Back.png",
          ]}
        />
      </World>
      <Editor />
    </>
  );
};

export default Game;
