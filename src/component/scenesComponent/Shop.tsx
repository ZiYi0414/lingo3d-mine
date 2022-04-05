import { Model, AreaLight } from "lingo3d-react";

const Shop = () => {
  return (
    <>
      <Model
        src="scenes/cartoon-low-poly-isometric-donut-shop-building-v1.glb"
        scale={10}
        physics="map"
        x={1746}
        y={1508}
        z={2536}
        rotationX={151}
        rotationY={-27}
        rotationZ={160}
        toon
      ></Model>
    </>
  );
};

export default Shop;
