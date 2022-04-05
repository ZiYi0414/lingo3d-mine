import { useState, useRef, useEffect } from 'react'
import { Model, useKeyboard, useLoop } from 'lingo3d-react'
import { animationsGirl1 } from '../../model/characterModel/model'
import { debounceImmediate } from '../../utils/debounce-throttle'

const OrangeHairCharacter = (prop) => {
  const key = prop.keyboard
  const characterRef = useRef()
  const [pose, setPose] = useState('idleAnimation')

  const handleIntersect = () => {
    setPose('CrossJumps')
    setTimeout(() => {
      setPose('idleAnimation')
    }, 3300)
  }
  useEffect(() => {
    if (prop.isDance) setPose('Dancing')
    return () => {
      setPose('idleAnimation')
    }
  }, [prop.isDance])

  return (
    <Model
      loadedX={-2}
      loadedY={-50}
      loadedZ={3}
      x={-200}
      y={0}
      z={-300}
      depth={50}
      src="characters/Girl/girl1/T-Pose.fbx"
      ref={characterRef}
      animations={{ ...animationsGirl1 }}
      animation={pose}
      toon
      frustumCulled={false}
    />
  )
}

export default OrangeHairCharacter
