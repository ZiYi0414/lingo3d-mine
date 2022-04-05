import { MutableRefObject, useEffect } from 'react'
import { useKeyboard, types, useLoop } from 'lingo3d-react'

export default function useController(
  ref: MutableRefObject<types.Model | null>,
  speed: { runSpeed: number; walkSpeed: number },
  setPose?: (T: string) => void,
  setCharacterRotationY?: (T: number) => void
) {
  const keyborad = useKeyboard()
  const _keyborad = keyborad.toLowerCase().split(' ')

  useEffect(() => {
    return () => {
      setPose('idleAnimation')
    }
  }, [keyborad])

  useLoop(() => {
    if (_keyborad.includes('shift')) {
      if (_keyborad.includes('w')) {
        ref.current?.moveForward(-speed.runSpeed)
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('runningAnimation')
      }

      if (_keyborad.includes('s')) {
        ref.current?.moveForward(speed.runSpeed)
        setCharacterRotationY && setCharacterRotationY(180)
        setPose && setPose('backRunningAnimation')
      }

      if (_keyborad.includes('a')) {
        ref.current?.moveRight(speed.runSpeed)
        setCharacterRotationY && setCharacterRotationY(90)
        setPose && setPose('leftRunningAnimation')
      }

      if (_keyborad.includes('d')) {
        ref.current?.moveRight(-speed.runSpeed)
        setCharacterRotationY && setCharacterRotationY(-90)
        setPose && setPose('rightRunningAnimation')
      }
    } else {
      if (_keyborad.includes('w')) {
        ref.current?.moveForward(-speed.walkSpeed)
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('walkingAnimation')
      }

      if (_keyborad.includes('s')) {
        ref.current?.moveForward(speed.walkSpeed)
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('backWalkingAnimation')
      }

      if (_keyborad.includes('a')) {
        ref.current?.moveRight(speed.walkSpeed)
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('leftWalkingAnimation')
      }

      if (_keyborad.includes('d')) {
        ref.current?.moveRight(-speed.walkSpeed)
        setCharacterRotationY && setCharacterRotationY(0)
        setPose && setPose('rightWalkingAnimation')
      }

      if (_keyborad.includes('v')) {
        setPose && setPose('Dancing')
      }
    }
  }, !!keyborad)

  if (_keyborad.includes('space')) {
    if (ref.current) ref.current.velocity.y = 6
  }
}
