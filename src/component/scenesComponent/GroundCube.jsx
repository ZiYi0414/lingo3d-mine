import { Cube } from "lingo3d-react";

const GroundCube = () => {
  return (
    <Cube
      width={5000}
      depth={5000}
      height={1}
      innerY={-50}
      color="#3d3d3d"
      opacity={1}
      physics="map"
      texture="background/skybox/Up.png"
      textureRepeat={20}
    ></Cube>
  );
};

export default GroundCube;
