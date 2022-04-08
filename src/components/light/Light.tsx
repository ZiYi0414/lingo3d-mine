import { AmbientLight, SkyLight, SpotLight } from 'lingo3d-react'
const LightGroup = () => {
  return (
    <>
      <SkyLight intensity={0.5} />
      <AmbientLight intensity={0.3} />
      {/* <SpotLight
        intensity={1}
        color="white"
        x={3650}
        angle={130}
        z={4140}
        penumbra={10}
        y={5471}
      /> */}
    </>
  )
}

export default LightGroup
