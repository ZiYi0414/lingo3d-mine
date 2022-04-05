import { useState, useRef, useEffect } from 'react'
import { Model, useKeyboard, useLoop } from 'lingo3d-react'
import { animationsGirl2 } from '../../model/characterModel/model'
import { debounceImmediate } from '../../utils/debounce-throttle'

const WhiteHairCharacter = (prop) => {
  const key = prop.keyboard
  const characterRef = useRef()
  const [pose, setPose] = useState('idleAnimation')

  const handleIntersect = () => {
    setPose('wavingAnimation')
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
      x={-110}
      z={280}
      scale={1.1}
      rotationY={-90}
      depth={50}
      src="characters/Girl/girl2/T-Pose.fbx"
      ref={characterRef}
      animations={{ ...animationsGirl2 }}
      animation={pose}
      physics="character"
      frustumCulled={false}
    />
  )
}

export default WhiteHairCharacter
