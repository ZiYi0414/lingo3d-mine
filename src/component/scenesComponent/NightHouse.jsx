import { Model, AreaLight, DirectionalLight } from "lingo3d-react";

const NightHouse = () => {
  return (
    <>
      <AreaLight intensity={1} color="white" x={650} z={40} y={471} />
      <AreaLight
        intensity={1}
        color="white"
        x={980}
        z={-450}
        y={471}
        rotationY={90}
      />
      <AreaLight
        intensity={1}
        color="white"
        x={450}
        z={-780}
        y={471}
        rotationY={180}
      />
      <DirectionalLight
        intensity={1}
        color="white"
        x={-250}
        z={-280}
        y={371}
        rotationZ={-40}
        rotationY={220}
      />
      <Model
        src="scenes/low-poly-building-with-characters-night-v1.glb"
        x={673}
        z={-543}
        y={1271}
        scale={30}
        physics="map"
      ></Model>
    </>
  );
};

export default NightHouse;
