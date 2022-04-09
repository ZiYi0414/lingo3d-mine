import {
  Joystick,
  Model,
  Skybox,
  World,
  useWindowSize,
  ThirdPersonCamera,
  Editor,
  Stats
} from 'lingo3d-react'
import { useState, useEffect } from 'react'

import Menus from '@/components/menus'
import socket from '@/utils/socket'
import message from '@/components/message'
import state from '@/store'
import Users from '@/components/users'
import Player from '../Player'
import CubeMask from '@/components/scenesComponent/CubeMask/CubeMask'
import Shop2 from '@/components/scenesComponent/Shop2'
import SkyModel from '@/components/scenesComponent/CubeMask/SkyModel/SkyModel'
import GroundCity from '@/components/scenesComponent/GroundCity'
import LightGroup from '@/components/light/Light'
import Tips from '@/components/tips'

const Game = (props: any) => {
  const windowSize = useWindowSize()
  const zoom = windowSize.width > windowSize.height ? 1 : 0.5
  const [usersData, setUsersData] = useState<any>([])
  useEffect(() => {
    socket.on('message', (msg: any) => {
      //@ts-ignore
      state.messageList.push(msg)
      if (state.messageList.length >= 20) {
        state.messageList.shift()
      }
      if (msg.type === 0) {
        message(msg.msg)
      } else if (msg.type === 1) {
        if (msg.id !== state.id) {
          message(msg.name + ' 说：' + msg.msg)
        } else {
          message('你说：' + msg.msg)
        }
      }
    })
    socket.on('update', (data: any) => {
      delete data[state.id]
      const arr: Array<any> = Object.keys(data).map((v) => {
        return { ...data[v], name: data[v].name }

      })
      setUsersData([...arr])
    })
  }, [])
  return (
    <>
      <Tips />
      <Stats mode="fps" />
      <World
        defaultLight={false}
        performance="balanced"
        bloom
        bloomRadius={1}
        bloomStrength={0.2}
        bloomThreshold={0.3}
        logarithmicDepth
      >
        <CubeMask />
        {/* <NightHouse /> */}

        <Shop2 />
        <SkyModel />
        <GroundCity />

        <ThirdPersonCamera active mouseControl zoom={zoom} fov={80}>
          <Player />
        </ThirdPersonCamera>
        {usersData.map((v: any, index: number) => (
          <Users key={v.id} userData={v} />
        ))}
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
    </>
  )
}
export default Game
