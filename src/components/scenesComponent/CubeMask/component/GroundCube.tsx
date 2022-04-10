import { Cube, Model } from 'lingo3d-react'

const GroundCube = () => {
  return (
    // <Cube
    //   width={999999}
    //   depth={999999}
    //   height={1}
    //   innerY={-55}
    //   color="#93b5cf"
    //   opacity={0.6}
    //   physics="map"
    //   textureRepeat={20}
    // ></Cube>

    <Model src="other/city-st-v1.glb" scale={35} toon physics="map">

    </Model>
  )
}

export default GroundCube
