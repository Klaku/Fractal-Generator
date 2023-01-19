import React, { PropsWithChildren, useEffect, useRef } from "react";
import { Context } from "../provider/provider";
import styled from "styled-components";
export const CanvasComponent = (props: PropsWithChildren<{}>) => {
  const { Draw } = React.useContext(Context);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const current = canvasRef.current;
    let frameCount = 0;
    let animationFrameId = 0;
    if (current != null) {
      const context = current.getContext("2d");
      if (context != null) {
        const render = () => {
          frameCount++;
          Draw(context, frameCount);
          animationFrameId = window.requestAnimationFrame(render);
        };
        render();
      }
    }
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [Draw]);

  return <Canvas ref={canvasRef} id="canvas" height="600" width="900"></Canvas>;
};

export const Canvas = styled.canvas`
  background-color: rgb(18, 22, 26);
  box-shadow: 0px 0px 10px 5px rgba(234, 236, 239, 0.05);
`;
