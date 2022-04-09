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
    <div className='join-background'>
      <div className="join">
        <div className="tip">What's your Name, bro</div>
        <input type="text" onChange={(e) => (state.name = e.target.value)} />
        <div className="bottom">
          <div onClick={confirmName}>进来干饭了!</div>
        </div>
      </div>
    </div>

  )
}
export default Join
