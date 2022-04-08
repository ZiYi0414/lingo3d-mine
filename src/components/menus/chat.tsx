import { useKeyboard } from 'lingo3d-react'
import state from '@/store'
import { keyboard } from 'lingo3d'
import { useEffect, useState } from 'react'
import socket from '@/utils/socket'
const Chat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messageList, setMessageList] = useState([])
  useEffect(() => {
    setMessageList(() => [...state.messageList])
  }, [state.messageList.slice(-1)[0]])
  useEffect(() => {
    keyboard.onKeyDown = (key) => {
      if (key === 't') {
        setIsOpen(!isOpen)
      }
    }
  }, [isOpen])
  return (
    <>
      <div className="chat">
        <img src="icon/chat.png" alt="" />
      </div>
      <div className="chatRoom" style={{ display: isOpen ? 'flex' : 'none' }}>
        <div className="chatRoom-head">
          <div className="title">聊天室</div>
        </div>
        <div className="chatRoom-list">
          {messageList.map((v) => {
            //@ts-ignore
            if (v.type === 0) {
              //@ts-ignore
              return (
                <div className="message system" key={v.date}>
                  {v.msg}{' '}
                </div>
              )
            } else {
              //@ts-ignore
              return (
                <div className="message user" key={v.date}>
                  {/* @ts-ignore */}
                  <div className="name">{v.name + '：'}</div>
                  {/* @ts-ignore */}
                  <div>{v.msg} </div>
                </div>
              )
            }
          })}
        </div>
        <div className="chatRoom-bottom">
          <textarea
            placeholder="说点什么"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => {
              socket.emit('message', message)
              setMessage('')
            }}
          >
            发送
          </button>
        </div>
      </div>
    </>
  )
}
export default Chat
