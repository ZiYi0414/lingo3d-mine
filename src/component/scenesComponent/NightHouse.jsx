import { Model, AreaLight, SpotLight } from "lingo3d-react";

const NightHouse = () => {
  return (
    <>
      <SpotLight
        intensity={2}
        color="white"
        angle={2}
        x={100}
        z={1800}
        y={1271}
      />
      <Model
        src="scenes/low-poly-building-with-characters-night-v1.glb"
        x={673}
        z={-543}
        y={1271}
        scale={30}
        physics="map"
      ></Model>
    </>
  );
};

export default NightHouse;
