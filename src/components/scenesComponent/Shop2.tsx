import { Model, AreaLight } from 'lingo3d-react'

const Shop2 = () => {
  return (
    <>
      <Model
        src="scenes/shiduodian-v1.glb"
        scale={10}
        physics="map"
        x={-91}
        y={386}
        z={929}
        rotationY={90}
        toon
      ></Model>
    </>
  )
}

export default Shop2
