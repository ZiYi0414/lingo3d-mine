import { Cube } from 'lingo3d-react'

const LeftCube = () => {
  return (
    <Cube
      width={9999}
      depth={9999}
      x={5329}
      y={4215}
      z={-1598}
      height={1}
      color="black"
      rotationZ={90}
      opacity={0.5}
      physics="map"
      frustumCulled={false}
    ></Cube>
  )
}

export default LeftCube
