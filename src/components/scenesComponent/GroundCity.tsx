import { Model } from 'lingo3d-react'

const GroundCity = () => {
  return (
    <>
      <Model
        src="other/voxel-city-v1.glb"
        x={38414}
        y={-3300}
        z={10}
        rotationZ={0}
        scale={60}
        physics="map"
        frustumCulled={false}
        toon
      ></Model>
      <Model
        src="other/voxel-city-v1.glb"
        x={26414}
        y={-3300}
        z={39910}
        rotationZ={0}
        scale={60}
        physics="map"
        frustumCulled={false}
        toon
      ></Model>
      <Model
        src="other/voxel-city-v1.glb"
        x={-14000}
        y={-3300}
        z={39910}
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
