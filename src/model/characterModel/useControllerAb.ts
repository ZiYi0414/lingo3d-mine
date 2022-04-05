import { MutableRefObject, useEffect } from 'react'
import { useKeyboard, types, useLoop } from 'lingo3d-react'

export default function useController(
  characterRef: MutableRefObject<types.Model | null>,
  pose: string,
  setPose?: (T: string) => void,
  setCharacterRotationY?: (T: number) => void
) {
  const key = useKeyboard()

  const characterState = (key) => {
    switch (key) {
      case 'w': {
        setCharacterRotationY(0)
        setPose('walkingAnimation')
        break
      }
      case 's': {
        setCharacterRotationY(0)
        setPose('backWalkingAnimation')
        break
      }
      case 'a': {
        setCharacterRotationY(0)
        setPose('leftWalkingAnimation')
        break
      }
      case 'd': {
        setCharacterRotationY(0)
        setPose('rightWalkingAnimation')
        break
      }
      case 'v': {
        setPose('Dancing')
        break
      }
      case 'w Shift': {
        setCharacterRotationY(0)
        setPose('runningAnimation')
        break
      }
      case 'Shift w': {
        setCharacterRotationY(0)
        setPose('runningAnimation')
        break
      }
      case 'Shift s': {
        setCharacterRotationY(180)
        setPose('backRunningAnimation')
        break
      }
      case 's Shift': {
        setCharacterRotationY(180)
        setPose('backRunningAnimation')
        break
      }
      case 'Shift a': {
        setCharacterRotationY(90)
        setPose('leftRunningAnimation')
        break
      }
      case 'a Shift': {
        setCharacterRotationY(90)
        setPose('leftRunningAnimation')
        break
      }
      case 'Shift d': {
        setCharacterRotationY(-90)
        setPose('rightRunningAnimation')
        break
      }
      case 'd Shift': {
        setCharacterRotationY(-90)
        setPose('rightRunningAnimation')
        break
      }
      case 'w a': {
        setCharacterRotationY(35)
        setPose('waWalkingAnimation')
        break
      }
      case 'w d': {
        setCharacterRotationY(-35)
        setPose('wdWalkingAnimation')
        break
      }
      case 's a': {
        setCharacterRotationY(-35)
        setPose('saWalkingAnimation')
        break
      }
      case 's d': {
        setCharacterRotationY(35)
        setPose('sdWalkingAnimation')
        break
      }
      case 'a w': {
        setCharacterRotationY(35)
        setPose('waWalkingAnimation')
        break
      }
      case 'd w': {
        setCharacterRotationY(-35)
        setPose('wdWalkingAnimation')
        break
      }
      case 'a s': {
        setCharacterRotationY(-35)
        setPose('saWalkingAnimation')
        break
      }
      case 'd s': {
        setCharacterRotationY(35)
        setPose('sdWalkingAnimation')
        break
      }
      case 'Space w': {
        setPose('flyAnimation')
        break
      }
      case 'w Space': {
        setPose('flyAnimation')
        break
      }
    }
  }

  useLoop(() => {
    characterRef.current?.moveForward(-5)
  }, pose === 'runningAnimation')
  useLoop(() => {
    characterRef.current?.moveForward(5)
  }, pose === 'backRunningAnimation')
  useLoop(() => {
    characterRef.current?.moveRight(5)
  }, pose === 'leftRunningAnimation')
  useLoop(() => {
    characterRef.current?.moveRight(-5)
  }, pose === 'rightRunningAnimation')

  useLoop(() => {
    characterRef.current?.moveForward(-1.5)
  }, pose === 'walkingAnimation')
  useLoop(() => {
    characterRef.current?.moveForward(1)
  }, pose === 'backWalkingAnimation')
  useLoop(() => {
    characterRef.current?.moveRight(1.5)
  }, pose === 'leftWalkingAnimation')
  useLoop(() => {
    characterRef.current?.moveRight(-1.5)
  }, pose === 'rightWalkingAnimation')

  useLoop(() => {
    characterRef.current?.moveRight(1)
    characterRef.current?.moveForward(-1)
  }, pose === 'waWalkingAnimation')
  useLoop(() => {
    characterRef.current?.moveRight(-1)
    characterRef.current?.moveForward(-1)
  }, pose === 'wdWalkingAnimation')
  useLoop(() => {
    characterRef.current?.moveRight(0.5)
    characterRef.current?.moveForward(0.5)
  }, pose === 'saWalkingAnimation')
  useLoop(() => {
    characterRef.current?.moveRight(-0.5)
    characterRef.current?.moveForward(0.5)
  }, pose === 'sdWalkingAnimation')

  useEffect(() => {
    characterState(key)
    return () => {
      setPose('idleAnimation')
    }
  }, [key])

  useLoop(() => {
    characterRef.current?.moveForward(-7)
    characterRef.current.velocity.y = 3
  }, pose === 'flyAnimation')
}
