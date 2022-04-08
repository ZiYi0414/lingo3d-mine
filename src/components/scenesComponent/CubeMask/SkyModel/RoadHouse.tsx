import { Model } from 'lingo3d-react'

const RoadHouse = () => {
  return (
    <>
      <Model
        src="scenes/polygon-city-pack-preview-v1.glb"
        scale={20}
        x={0}
        y={123}
        z={-704}
        physics="map"
      ></Model>
    </>
  )
}

export default RoadHouse
