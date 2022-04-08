import { Model } from 'lingo3d-react'

const LightHouse = () => {
  return (
    <>
      <Model
        src="other/lighthouse-in-the-sky-v1.glb"
        x={-963}
        y={1034}
        z={1437}
        scale={10}
        physics="map"
        toon
      ></Model>
    </>
  )
}

export default LightHouse
