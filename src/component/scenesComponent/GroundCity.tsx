import { Model } from 'lingo3d-react'

const GroundCity = () => {
  return (
    <>
      <Model
        src="other/voxel-city-v1.glb"
        x={25414}
        y={-3300}
        z={17910}
        rotationZ={0}
        scale={60}
        physics="map"
        frustumCulled={false}
        toon
      ></Model>
      <Model
        src="other/voxel-city-v1.glb"
        x={-2171}
        y={-3300}
        z={-931}
        rotationZ={0}
        scale={60}
        physics="map"
        frustumCulled={false}
        toon
      ></Model>
    </>
  )
}

export default GroundCity
