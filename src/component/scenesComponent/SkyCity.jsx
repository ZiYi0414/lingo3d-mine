import { Model, AreaLight } from "lingo3d-react";

const SkyCity = () => {
  return (
    <>
      <Model
        src="scenes/polygon-city-pack-preview-v1.glb"
        scale={10}
        physics="map"
        x={2601}
        y={1077}
        z={-1699}
        rotationX={26}
        rotationZ={12}
        rotationY={-40}
        toon
      ></Model>
    </>
  );
};

export default SkyCity;
