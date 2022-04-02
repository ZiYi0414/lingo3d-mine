import { useState, useRef, useEffect } from "react";
import { Model, useKeyboard, useLoop } from "lingo3d-react";
import { animationsGirl3 } from "../../model/characterModel/model";

const MainCharacter = () => {
  const key = useKeyboard();

  const characterRef = useRef();
  const [characterRotationY, setCharacterRotationY] = useState(0);
  const [pose, setPose] = useState("idleAnimation");
  const characterState = (key) => {
    console.log(key);
    switch (key) {
      case "w": {
        setCharacterRotationY(0);
        setPose("walkingAnimation");
        break;
      }
      case "s": {
        // setCharacterRotationY(180);
        setPose("backRunning");
        break;
      }
      case "a": {
        // setCharacterRotationY(90);
        setPose("leftRunning");
        break;
      }
      case "d": {
        // setCharacterRotationY(270);
        setPose("rightRunning");
        break;
      }
      case "v": {
        setPose("Dancing");
        break;
      }
      case "w Shift": {
        setPose("runningAnimation");
        break;
      }
      case "Shift w": {
        setPose("runningAnimation");
        break;
      }
    }
  };

  useLoop(() => {
    characterRef.current?.moveForward(-4);
  }, pose === "runningAnimation");
  useLoop(() => {
    characterRef.current?.moveForward(-2);
  }, pose === "walkingAnimation");
  useLoop(() => {
    characterRef.current?.moveForward(1);
  }, pose === "backRunning");
  useLoop(() => {
    characterRef.current?.moveRight(2);
  }, pose === "leftRunning");
  useLoop(() => {
    characterRef.current?.moveRight(-2);
  }, pose === "rightRunning");
  useLoop(() => {
    characterRef.current?.moveForward(-0.2);
  }, pose === "Zombie");
  useLoop(() => {
    characterRef.current?.moveForward(-6);
  }, pose === "CrossJumps");

  useEffect(() => {
    characterState(key);
    return () => {
      setPose("idleAnimation");
    };
  }, [key]);
  return (
    <Model
      src="characters/Girl/girl3/T-Pose.fbx"
      innerRotationY={characterRotationY}
      loadedX={-2}
      loadedY={-50}
      loadedZ={3}
      ref={characterRef}
      animations={{ ...animationsGirl3 }}
      animation={pose}
      boxVisible
    />
  );
};

export default MainCharacter;
