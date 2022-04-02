import { Cube } from "lingo3d-react";

const GroundCube = () => {
  return (
    <Cube
      width={6000}
      depth={6000}
      height={1}
      innerY={-50}
      color="#3d3d3d"
      texture="public/background/dimian.jpg"
      textureRepeat={10}
      boxVisible
    ></Cube>
  );
};

export default GroundCube;
