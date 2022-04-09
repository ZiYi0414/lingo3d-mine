import io from 'socket.io-client'
//@ts-ignore import.meta.env.VITE_APP_SOCKET_URL
const socket = io('http://1.117.86.51:3004')
export default socket
