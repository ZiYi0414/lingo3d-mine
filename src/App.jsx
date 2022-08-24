import "./App.css"
import {
  Model,
  OrbitCamera,
  usePreload,
  World,
  LingoEditor,
  PointLight
} from "lingo3d-react"
import { UI } from "lingo3d-react"
import { useWindowSize } from "lingo3d-react"
import { useEffect, useRef, useState } from "react"

const Game = () => {
  // starting animation, rotates from 180 to 45 degress in 5 seconds
  // 初始动画，在5秒内从180度旋转到45度
  const windowSize = useWindowSize()
  const fov = windowSize.width < windowSize.height ? 100 : 75

  return (
    // backgroud HTML
    // 背景 HTML
    <div
      className="bg-cover bg-center w-screen h-screen absolute overflow-hidden text-gray-400"
      style={{ backgroundImage: "url(bg.jpg)", backgroundSize: "cover" }}
    >
      <div className="absolute left-0 top-0 w-full h-full bg-black opacity-75" />
      <div className="relative">
        <div
          className="text-xl font-bold text-center"
          style={{ transform: "scale(1.5) translateY(50%)" }}
        >
          <span className="ava inline-block cursor-pointer"></span>
          <br />
          nameless
        </div>
      </div>

      {/* 3d world */}
      {/* 3d 场景 */}
      <World color="transparent" performance="balanced" ambientOcclusion>
        {/* <LingoEditor /> */}

        {/* apple watch model */}
        {/* 苹果手表模型 */}
        <Model
          innerY={20}
          outline
          src="ZiYi.fbx"
          animations={{ pose: "/Pose.fbx" }}
          animation="pose"
        />
        <Model
          x={1.15}
          y={-12.22}
          z={19.75}
          scaleX={0.005}
          scaleY={0.005}
          scaleZ={0.005}
          innerRotationX={90}
          innerRotationZ={90}
          innerRotation={45}
          innerY={20}
          width={1234.91}
          depth={1607.74}
          outline
          src="Google.fbx"
        />
        <PointLight x="-0.15" y="-28.66" z="6.37" />
        {/* orbit camera's innerZ determines how far away camera is from the center of the subject */}
        {/* 轨道相机的innerZ确定相机距离目标的距离 */}
        <OrbitCamera
          active
          innerZ={70}
          autoRotate
          fov={fov}
          enablePan={false}
        />

        {/* foreground HTML is rendered in UI layer, which is always above 3d world */}
        {/* 前景HTML在UI层渲染，UI层总是在3d场景之上 */}
        <UI>
          <div className="absolute bottom-0 w-full p-6">
            <div className="text-center text-lg opacity-50">
              swipe to rotate
            </div>
          </div>
        </UI>
      </World>
    </div>
  )
}

// loading screen
// 加载画面
const App = () => {
  const progress = usePreload(
    [
      "../public/bg.jpg",
      "../public/ZiYi.fbx",
      "../public/Pose.fbx",
      "../Google.fbx"
    ],
    "8000kb"
  )

  if (progress < 100)
    return (
      <div className="w-screen h-screen absolute text-white flex justify-center items-center">
        loading, please wait
      </div>
    )

  return <Game />
}

export default App
