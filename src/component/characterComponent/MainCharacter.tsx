import { useState, useRef, useEffect } from 'react'
import { keyboard } from 'lingo3d'
import { Model, useLoop } from 'lingo3d-react'
import { animationsGirl3 } from '../../model/characterModel/model'
import useController from '../../model/characterModel/useController'
import useControllerAb from '../../model/characterModel/useControllerAb'

const MainCharacter = (prop) => {
  const characterRef = useRef()
  const [characterRotationY, setCharacterRotationY] = useState(0)
  const [pose, setPose] = useState('idleAnimation')

  // useController(
  //   characterRef,
  //   { runSpeed: 5, walkSpeed: 1.5 },
  //   setPose,
  //   setCharacterRotationY
  // )

  useControllerAb(
    characterRef,
    pose,
    setPose,
    setCharacterRotationY
  )
  return (
    <Model
      depth={80}
      id={prop?.id}
      src="characters/Girl/girl3/T-Pose.fbx"
      x={-1515}
      y={1242}
      z={-903}
      innerRotationY={characterRotationY}
      loadedX={-2}
      loadedY={-50}
      loadedZ={3}
      ref={characterRef}
      animations={{ ...animationsGirl3 }}
      animation={pose}
      physics="character"
      frustumCulled={false}
      toon
    />
  )
}

export default MainCharacter
