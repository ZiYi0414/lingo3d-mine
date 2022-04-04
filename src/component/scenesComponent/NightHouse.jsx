import { Model, AreaLight, DirectionalLight } from "lingo3d-react";

const NightHouse = () => {
  return (
    <>
      <Model
        src="scenes/low-poly-building-with-characters-night-v1.glb"
        x={673}
        z={-543}
        y={1271}
        scale={30}
        physics="map"
        toon
      ></Model>
    </>
  );
};

export default NightHouse;
