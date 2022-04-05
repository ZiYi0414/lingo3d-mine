import {
  ThirdPersonCamera,
  OrbitCamera,
  Skybox,
  useWindowSize,
  World,
  Editor,
  useKeyboard
} from 'lingo3d-react'
import { useState, useEffect } from 'react'
import './index.css'

import MainCharacter from '../../component/characterComponent/MainCharacter'
import WhiteHairCharacter from '../../component/characterComponent/WhiteHairCharacter'
import OrangeHairCharacter from '../../component/characterComponent/OrangeHairCharacter'
import LightGroup from '../../component/light/Light'
import NightHouse from '../../component/scenesComponent/NightHouse'
import UI from '../../component/UI'

import CubeMask from '../../component/scenesComponent/CubeMask/CubeMask'
import GroundCity from '../../component/scenesComponent/GroundCity'
import Shop2 from '../../component/scenesComponent/Shop2'
import SkyModel from '../../component/scenesComponent/CubeMask/SkyModel/SkyModel'

const Game = () => {
  // const key = useKeyboard()
  const windowSize = useWindowSize()
  const fov = windowSize.width > windowSize.height ? 75 : 100
  const [isDance, setIsDance] = useState(false)
  // useEffect(() => {
  //   if (key === 'v') setIsDance(true)
  //   return () => {
  //     setIsDance(false)
  //   }
  // }, [key])

  return (
    <div className="game-wrap">
      {/* <UI /> */}
      <World
        defaultLight={false}
        performance="balanced"
        bloom
        bloomRadius={1}
        bloomStrength={0.2}
        bloomThreshold={0.3}
      >
        <CubeMask />
        {/* <NightHouse /> */}

        <Shop2 />
        <SkyModel />
        <GroundCity />

        <ThirdPersonCamera active mouseControl fov={fov}>
          <MainCharacter id="mainCharacter" />
        </ThirdPersonCamera>
        <WhiteHairCharacter
          isDance={isDance}
          intersectIDs={['mainCharacter']}
        />
        <OrangeHairCharacter
          isDance={isDance}
          intersectIDs={['mainCharacter']}
        />
        <LightGroup />
        <Skybox
          texture={[
            'background/skybox/Left.png',
            'background/skybox/Right.png',
            'background/skybox/Up.png',
            'background/skybox/Down.png',
            'background/skybox/Front.png',
            'background/skybox/Back.png'
          ]}
        />
      </World>
    </div>
  )
}

export default Game
