import './index.less'
import message from '../message'
import state from '../../store'
import socket from '../../utils/socket'
const Join = (props: any) => {
  const confirmName = () => {
    if (!state.name) {
      message('请输入名字')
    } else {
      socket.emit('join', { name: state.name, role: state.role })
      props.setIsJoin(true)
    }
  }
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      left: 0,
      top: 0,
      backgroundColor: 'black',
      color: 'rgb(33,200,250)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'url(bg.jpg)',
      backgroundSize: 'cover'
    }}>
      <div className="join">
        <div className="tip">请输入你名字</div>
        <input type="text" onChange={(e) => (state.name = e.target.value)} />
        <div className="bottom">
          <button onClick={confirmName}>确定</button>
        </div>
      </div>
    </div>

  )
}
export default Join
