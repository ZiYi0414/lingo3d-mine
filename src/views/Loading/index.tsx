function Loading(props: any) {
  return (
    <div
      style={{
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
      }}
    >
      加载中 {Math.round(props.progress)}%
    </div>
  )
}
export default Loading
