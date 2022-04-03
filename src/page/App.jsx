import { usePreload } from "lingo3d-react";
import Preload from "./Preload";
import Game from "./Game";
import "./App.css";

const App = () => {
  const progress = usePreload(
    [
      "characters/Girl/girl3/T-Pose.fbx",
      "characters/Girl/girl2/T-Pose.fbx",
      "characters/Girl/girl1/T-Pose.fbx",

      "background/skybox/Left.png",
      "background/skybox/Right.png",
      "background/skybox/Up.png",
      "background/skybox/Down.png",
      "background/skybox/Front.png",
      "background/skybox/Back.png",
      "scenes/low-poly-building-with-characters-night-v1.glb",
    ],
    "60.5mb"
  );

  if (progress < 100) return <Preload progress={progress} />;

  return <Game />;
};

export default App;
