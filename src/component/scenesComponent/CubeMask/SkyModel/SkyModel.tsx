import { Model } from 'lingo3d-react'
import LightHouse from './LightHouse'
import MiniCity from './MiniCity'
import Shop from './Shop'
import SkyCity from './SkyCity'
import SkyIsland from './SkyIsland'
import SkyTreeLand from './SkyTreeLand'
import Wheel from './Wheel'

const SkyModel = () => {
    return (
        <>  <LightHouse />
            <Wheel />
            <SkyIsland />
            <MiniCity />
            <SkyTreeLand />
            <SkyCity />
        </>
    )
}

export default SkyModel
