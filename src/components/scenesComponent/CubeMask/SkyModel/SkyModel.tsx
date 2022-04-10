import { Model } from 'lingo3d-react'
import LightHouse from './LightHouse'
import MiniCity from './MiniCity'
import SkyIsland from './SkyIsland'
import SkyTreeLand from './SkyTreeLand'
import Wheel from './Wheel'

const SkyModel = () => {
  return (
    <>
      <LightHouse />
      <Wheel />
      <SkyIsland />
      <MiniCity />
      <SkyTreeLand />
    </>
  )
}

export default SkyModel
