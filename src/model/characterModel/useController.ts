import { MutableRefObject, useLayoutEffect } from "react";
import { useKeyboard, types, useLoop } from "lingo3d-react";

export default function useController(
  ref: MutableRefObject<types.Model | null>,
  speed: number,
) {
  const keyborad = useKeyboard();
  const _keyborad = keyborad.toLowerCase().split(" ");

  useLoop(() => {
    if (_keyborad.includes("w")) {
      ref.current?.moveForward(-speed);
    }

    if (_keyborad.includes("s")) {
      ref.current?.moveForward(speed);
    }

    if (_keyborad.includes("a")) {
      ref.current?.moveRight(speed);
    }

    if (_keyborad.includes("d")) {
      ref.current?.moveRight(-speed);
    }
  }, !!keyborad);

  if (_keyborad.includes("space")) {
    if (ref.current) ref.current.velocity.y = speed;
  }
}
