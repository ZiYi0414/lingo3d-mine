import { Model, AreaLight } from 'lingo3d-react'

const SkyTown = () => {
  return (
    <>
      <Model
        src="scenes/townscity-v1.glb"
        scale={30}
        physics="map"
        x={370}
        y={7300}
        z={465}
        rotationZ={180}
        toon
      ></Model>
    </>
  )
}

export default SkyTown
