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
import SkyIsland from '../../component/scenesComponent/SkyIsland'
import Shop from '../../component/scenesComponent/Shop'
import SkyCity from '../../component/scenesComponent/SkyCity'
import CubeMask from '../../component/scenesComponent/CubeMask/CubeMask'
import GroundCity from '../../component/scenesComponent/GroundCity'
import Shop2 from '../../component/scenesComponent/Shop2'

const Game = () => {
  const key = useKeyboard()
  const windowSize = useWindowSize()
  const fov = windowSize.width > windowSize.height ? 75 : 100
  const [isDance, setIsDance] = useState(false)
  useEffect(() => {
    if (key === 'v') setIsDance(true)
    return () => {
      setIsDance(false)
    }
  }, [key])
  return (
    <div className="game-wrap">
      <UI />
      <World
        defaultLight="studio"
        performance="balanced"
        bloom
        bloomRadius={1}
        bloomStrength={0.2}
        bloomThreshold={0.3}
      >
        <CubeMask />
        <NightHouse />
        <SkyIsland />
        <Shop />
        <Shop2 />
        <SkyCity />
        <GroundCity />

        <ThirdPersonCamera active mouseControl fov={fov}>
          <MainCharacter id="mainCharacter" keyboard={key} />
        </ThirdPersonCamera>
        <WhiteHairCharacter
          isDance={isDance}
          intersectIDs={['mainCharacter']}
          keyboard={key}
        />
        <OrangeHairCharacter
          isDance={isDance}
          intersectIDs={['mainCharacter']}
          keyboard={key}
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