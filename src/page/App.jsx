import { usePreload } from "lingo3d-react";
import Preload from "./Preload";
import Game from "./Game";
import "./App.css";

const App = () => {
  const progress = usePreload(
    [
      "characters/Girl/girl3/T-Pose.fbx",
      "background/skybox.jpg",
      "background/dimian.jpg",
    ],
    "40.5mb"
  );

  if (progress < 100) return <Preload progress={progress} />;

  return (
    <>
      <Game />
    </>
  );
};

export default App;
