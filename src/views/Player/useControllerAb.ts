import { MutableRefObject, useEffect } from 'react'
import { useKeyboard, types, useLoop } from 'lingo3d-react'

export default function useController(
  characterRef: MutableRefObject<types.Model | null>,
  pose: string,
  setPose?: (T: string) => void,
  setCharacterRotationY?: (T: number) => void
) {
  const key = useKeyboard()

  const characterState = (key: string) => {
    switch (key) {
      case 'w': {
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('walking')
        break
      }
      case 's': {
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('backWalking')
        break
      }
      case 'a': {
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('leftWalking')
        break
      }
      case 'd': {
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('rightWalking')
        break
      }
      case 'v': {
        setPose && setPose('Dancing')
        break
      }
      case 'w Shift': {
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('running')
        break
      }
      case 'Shift w': {
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('running')
        break
      }
      case 'Shift s': {
        setCharacterRotationY && setCharacterRotationY(180)
        setPose && setPose('backRunning')
        break
      }
      case 's Shift': {
        setCharacterRotationY && setCharacterRotationY(180)
        setPose && setPose('backRunning')
        break
      }
      case 'Shift a': {
        setCharacterRotationY && setCharacterRotationY(90)
        setPose && setPose('leftRunning')
        break
      }
      case 'a Shift': {
        setCharacterRotationY && setCharacterRotationY(90)
        setPose && setPose('leftRunning')
        break
      }
      case 'Shift d': {
        setCharacterRotationY && setCharacterRotationY(-90)
        setPose && setPose('rightRunning')
        break
      }
      case 'd Shift': {
        setCharacterRotationY && setCharacterRotationY(-90)
        setPose && setPose('rightRunning')
        break
      }
      case 'w a': {
        setCharacterRotationY && setCharacterRotationY(35)
        setPose && setPose('waWalking')
        break
      }
      case 'w d': {
        setCharacterRotationY && setCharacterRotationY(-35)
        setPose && setPose('wdWalking')
        break
      }
      case 's a': {
        setCharacterRotationY && setCharacterRotationY(-35)
        setPose && setPose('saWalking')
        break
      }
      case 's d': {
        setCharacterRotationY && setCharacterRotationY(35)
        setPose && setPose('sdWalking')
        break
      }
      case 'a w': {
        setCharacterRotationY && setCharacterRotationY(35)
        setPose && setPose('waWalking')
        break
      }
      case 'd w': {
        setCharacterRotationY && setCharacterRotationY(-35)
        setPose && setPose('wdWalking')
        break
      }
      case 'a s': {
        setCharacterRotationY && setCharacterRotationY(-35)
        setPose && setPose('saWalking')
        break
      }
      case 'd s': {
        setCharacterRotationY && setCharacterRotationY(35)
        setPose && setPose('sdWalking')
        break
      }
      case 'Space w': {
        setPose && setPose('fly')
        break
      }
      case 'w Space': {
        setPose && setPose('fly')
        break
      }
    }
  }

  useLoop(() => {
    characterRef.current?.moveForward(-5)
  }, pose === 'running')
  useLoop(() => {
    characterRef.current?.moveForward(5)
  }, pose === 'backRunning')
  useLoop(() => {
    characterRef.current?.moveRight(5)
  }, pose === 'leftRunning')
  useLoop(() => {
    characterRef.current?.moveRight(-5)
  }, pose === 'rightRunning')

  useLoop(() => {
    characterRef.current?.moveForward(-1.5)
  }, pose === 'walking')
  useLoop(() => {
    characterRef.current?.moveForward(1)
  }, pose === 'backWalking')
  useLoop(() => {
    characterRef.current?.moveRight(1.5)
  }, pose === 'leftWalking')
  useLoop(() => {
    characterRef.current?.moveRight(-1.5)
  }, pose === 'rightWalking')

  useLoop(() => {
    characterRef.current?.moveRight(1)
    characterRef.current?.moveForward(-1)
  }, pose === 'waWalking')
  useLoop(() => {
    characterRef.current?.moveRight(-1)
    characterRef.current?.moveForward(-1)
  }, pose === 'wdWalking')
  useLoop(() => {
    characterRef.current?.moveRight(0.5)
    characterRef.current?.moveForward(0.5)
  }, pose === 'saWalking')
  useLoop(() => {
    characterRef.current?.moveRight(-0.5)
    characterRef.current?.moveForward(0.5)
  }, pose === 'sdWalking')

  useEffect(() => {
    characterState(key)
    return () => {
      setPose && setPose('idle')
    }
  }, [key])

  useLoop(() => {
    characterRef.current?.moveForward(-7)
    characterRef.current!.velocity.y = 3
  }, pose === 'fly')
}
