import { Cube } from "lingo3d-react";

const BackCube = () => {
  return (
    <Cube
      width={999999}
      depth={999999}
      height={1}
      innerY={3000}
      color="black"
      opacity={0.5}
      physics="map"
      textureRepeat={20}
    ></Cube>
  );
};

export default BackCube;
