let timer: any = null
const message = (msg: string) => {
  const msgDom = document.getElementById('message')
  if (!msgDom) {
    const msgDom = document.createElement('div')
    msgDom.id = 'message'
    msgDom.innerText = msg
    document.body.append(msgDom)
  } else if (timer !== null) {
    clearTimeout(timer)

    msgDom.innerText = msg
  }
  timer = setTimeout(() => {
    document.getElementById('message')?.remove()
  }, 5000)
}
export default message
