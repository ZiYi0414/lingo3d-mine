import { Cube } from "lingo3d-react";

const SkyMask = () => {
  return (
    <Cube
      width={19999}
      depth={19999}
      height={1}
      innerY={7000}
      color="black"
      opacity={0.5}
      physics="map"
    ></Cube>
  );
};

export default SkyMask;
