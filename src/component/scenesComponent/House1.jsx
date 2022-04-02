import { Model } from "lingo3d-react";

const House1 = () => {
  return (
    <>
      <Model
        src="scenes/house1.glb"
        scale={4}
        x={0}
        y={123}
        z={-704}
        physics="map"
      ></Model>
    </>
  );
};

export default House1;
