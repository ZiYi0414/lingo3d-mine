import './index.less'

function Loading(props: any) {
  return (
    <div className='loading-background'>
      <div className='loading-title-wrap'>
        <h1 data-spotlight="Lingo 3D" className="num">Lingo 3D</h1>
        <h1 data-spotlight="JUST A Chat Demo !" className="error">JUST A Chat Demo !</h1>
        <div className="xcprogress">
          <div className="xcprogress-bar" style={{ 'width': `${Math.round(props.progress)}%` }}>
            <span className="xcprogress-bar-value">{Math.round(props.progress)}%</span>
          </div>
        </div>
      </div>

    </div>

  )
}
export default Loading
