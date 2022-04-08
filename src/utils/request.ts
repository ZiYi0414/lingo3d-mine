import axios from 'axios'
interface response {
  code: number
  message: string
  data: any
}
interface Api {
  url: string
  method: string
  params?: object
  config?: any
}
axios.defaults.timeout = 10000 //超时时间
axios.defaults.baseURL = '/api'
axios.interceptors.response.use(
  (response) => {
    const res: response = response.data
    if (res.code !== 50000 && res.code) {
      if (res.code == 50005 || res.code == 50004) {
        return Promise.reject(new Error(res.message || 'Error'))
      }
    }
    return res
  },
  (error) => {
    return Promise.reject()
  }
)
async function request(api: Api): Promise<response> {
  const { url, params, config, method } = api
  switch (method) {
    case 'get':
      return axios.get(url, { params, ...config })
    case 'post':
      return axios.post(url, params, config)
    default:
      return axios.get(url, { params, ...config })
  }
}
export default request
