import { Cube } from "lingo3d-react";

const RightCube = () => {
  return (
    <Cube
      width={99999}
      depth={99999}
      height={1}
      color="black"
      opacity={0.5}
      physics="map"
    ></Cube>
  );
};

export default RightCube;
