import { proxy } from 'valtio'
import roleList from '../model/role'
const role: number = Math.floor(Math.random() * roleList.length)
const state = proxy({
  id: '',
  name: '',
  role,
  message: '',
  messageList: []
})
export default state
