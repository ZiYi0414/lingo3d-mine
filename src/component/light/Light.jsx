import { AmbientLight, SkyLight } from "lingo3d-react";
const LightGroup = () => {
  return (
    <>
      <SkyLight intensity={0.5} />
      <AmbientLight intensity={0.3} />
    </>
  );
};

export default LightGroup;
