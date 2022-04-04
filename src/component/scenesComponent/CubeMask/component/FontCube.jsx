import { Cube } from "lingo3d-react";

const FontCube = () => {
  return (
    <Cube
      width={9999}
      depth={9999}
      height={1}
      x={308}
      y={4215}
      z={3389}
      color="black"
      opacity={0.3}
      physics="map"
      rotationX={90}
      frustumCulled={false}
      metalness={1}
    ></Cube>
  );
};

export default FontCube;
