import { Model } from 'lingo3d-react'

const MiniCity = () => {
  return (
    <>
      <Model
        src="other/mini-city-pack-v1.glb"
        scale={20}
        x={0}
        y={1593}
        z={-2405}
        physics="map"
        toon
      ></Model>
    </>
  )
}

export default MiniCity
