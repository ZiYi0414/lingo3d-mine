import { Model, useLoop, useKeyboard, HTML } from 'lingo3d-react'
import { useEffect, useRef, useState } from 'react'
import state from '../../store'
import socket from '../../utils/socket'
import roleList from '../../model/role'
import role from '../../model/role'
import useController from './useControllerAb'

function Player(props: any) {
  const [motion, setMotion] = useState('idle')
  const model = roleList[state.role]
  const [characterRotationY, setCharacterRotationY] = useState(0)
  const characterRef: any = useRef()

  useController(characterRef, motion, setMotion, setCharacterRotationY)
  if (characterRef?.current?.y < -5000) {
    characterRef.current.z = 0
    characterRef.current.y = 100
    characterRef.current.x = 400
  }
  socket.emit('update', {
    x: characterRef?.current?.x,
    y: characterRef?.current?.y,
    z: characterRef?.current?.z,
    rotationX: characterRef?.current?.rotationX,
    rotationY: characterRef?.current?.rotationY,
    rotationZ: characterRef?.current?.rotationZ,
    motion
  })
  return (
    <Model
      loadedX={-2}
      loadedY={-50}
      loadedZ={3}
      ref={characterRef}
      src={model.pose}
      innerRotationY={characterRotationY}
      physics="character"
      animations={roleList[state.role]}
      animation={motion}
      frustumCulled={false}
      toon
    ></Model>
  )
}

export default Player
