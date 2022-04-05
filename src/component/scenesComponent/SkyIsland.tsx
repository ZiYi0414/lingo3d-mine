import { Model, AreaLight } from "lingo3d-react";

const SkyIsland = () => {
  return (
    <>
      <Model
        src="scenes/FoxsIslands-v1.glb"
        scale={10}
        physics="map"
        x={-1916}
        y={1510}
        z={-771}
        rotationZ={-11}
        toon
      ></Model>
    </>
  );
};

export default SkyIsland;
