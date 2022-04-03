import { Model, AreaLight, SpotLight } from "lingo3d-react";

const SnowScene = () => {
  return (
    <>
      <SpotLight intensity={0.5} color="white" z={1800} y={90060} angle={1} />
      <Model
        src="scenes/snow-mountain-v1.glb"
        z={-60}
        y={2560}
        scale={100}
        physics="map"
      ></Model>
    </>
  );
};

export default SnowScene;
