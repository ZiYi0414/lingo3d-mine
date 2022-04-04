import { useRef } from "react";
import ChatList from "./component/ChatList";
import "./index.css";

const UI = () => {
  const tip = useRef(null);
  const tipBtn = useRef(null);

  const handleTipClick = () => {
    tip.current.style.display = "none";
    tipBtn.current.style.display = "block";
  };
  const handleTipBtnClick = () => {
    tip.current.style.display = "block";
    tipBtn.current.style.display = "none";
  };
  return (
    <div className="ui-wrap">
      <div className="tip-btn" onClick={handleTipBtnClick} ref={tipBtn}>
        <h1>提示</h1>
      </div>
      <div className="tip" onClick={handleTipClick} ref={tip}>
        <h1>提示:</h1>
        <p>W A S D 控制角色行走.</p>
        <p>按住 Shift 疾跑.</p>
        <p>按 V 与npc一起发癫.</p>
        <p>
          这只是个学习用demo,慎入屎山,源码👉
          <a
            href="https://github.com/ZYKKOne-11/3d-chat-project"
            target="_blank"
          >
            项目地址
          </a>
        </p>
        <p>点击本面板关闭提示.^ ^</p>
      </div>
    </div>
  );
};

export default UI;
