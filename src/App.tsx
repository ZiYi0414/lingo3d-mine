import { usePreload } from 'lingo3d-react'
import { Gril1, Gril2, Gril3 } from './model/role'
import Game from './views/Game'
import state from './store'
import Loading from './views/Loading'
import socket from './utils/socket'
import Join from './components/join/Join'
import { useState, useEffect } from 'react'
const App = () => {
  const [isJoin, setIsJoin] = useState(false)
  useEffect(() => {
    socket.on('id', (id: string) => {
      state.id = id
    })
  }, [])
  const progress = usePreload(
    [...Object.values(Gril1),
    ...Object.values(Gril2),
    ...Object.values(Gril3),
      'background/skybox/Left.png',
      'background/skybox/Right.png',
      'background/skybox/Up.png',
      'background/skybox/Down.png',
      'background/skybox/Front.png',
      'background/skybox/Back.png',
      'other/voxel-city-v1.glb',
    ],
    '128.4mb'
  )
  if (progress < 100) return <Loading progress={progress} />
  if (isJoin) {
    return (
      <>
        <Game />
      </>
    )
  } else {
    return <Join setIsJoin={setIsJoin}></Join>
  }
}
export default App
