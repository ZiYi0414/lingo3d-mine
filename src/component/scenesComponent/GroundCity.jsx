import { Model } from "lingo3d-react";

const GroundCity = () => {
  return (
    <>
      <Model
        src="scenes/fm-polygon-jp-sensojiquads-v1.glb"
        x={-1171}
        z={-931}
        y={-3300}
        rotationZ={0}
        scale={60}
        physics="map"
        frustumCulled={false}
        toon
      ></Model>
    </>
  );
};

export default GroundCity;
