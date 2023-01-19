import React, { PropsWithChildren, useState } from "react";
import { ConvertEntity } from "../actions/actions";
import { IEntity } from "../types";

interface IContext {
  Draw: (context: CanvasRenderingContext2D, frameNo: number) => void;
  entities: IEntity[];
  Add: () => void;
  Remove: () => void;
  Update: (e: IEntity[]) => void;
}

const defaultContext: IContext = {
  Draw: () => {},
  entities: [],
  Add: () => {},
  Remove: () => {},
  Update: () => {},
};

export const Context = React.createContext(defaultContext);

export const ContextProvider = (props: PropsWithChildren<{}>) => {
  const [entities, setEntities] = useState([] as IEntity[]);
  const Update = (e: IEntity[]) => {
    setEntities(e);
    paths = [];
  };
  let paths = [] as number[][];
  let lastUpdate = 0;
  let lastFrame = 0;
  let Fps = 0;
  const Draw = (context: CanvasRenderingContext2D, frameNo: number) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    let e = entities;
    for (let i = 0; i < e.length; i++) {
      e[i] = ConvertEntity(
        i > 0
          ? {
              ...e[i],
              center: ConvertEntity(e[i - 1], frameNo).point,
            }
          : e[i],
        frameNo
      );
      context.beginPath();
      context.strokeStyle = e[i].color;
      context.moveTo(e[i].center[0], e[i].center[1]);
      context.lineTo(e[i].point[0], e[i].point[1]);
      context.stroke();
      context.beginPath();
      context.arc(e[i].center[0], e[i].center[1], e[i].radius, 0, 2 * Math.PI);
      context.stroke();

      if (Date.now() - lastUpdate > 1000) {
        Fps = frameNo - lastFrame;
        lastFrame = frameNo;
        lastUpdate = Date.now();
      }

      if (i + 1 == e.length) {
        paths = [...paths, e[i].point];
      }
    }
    context.strokeStyle = "red";
    context.beginPath();
    for (let i = 0; i < paths.length; i++) {
      context.lineTo(paths[i][0], paths[i][1]);
    }
    context.stroke();

    context.fillStyle = "#999";
    context.font = "18px Arial";
    context.fillText(`FPS: ${Fps}`, 10, 25);
    context.fillText(
      `Stroke Length: ${Intl.NumberFormat("de-DE").format(paths.length)}`,
      10,
      45
    );
  };

  const Add = () => {
    paths = [];
    setEntities([
      ...entities,
      {
        id: entities.length + 1,
        center: [450, 300],
        point: [500, 300],
        radius: Math.floor(15 + Math.random() * 70),
        color: "#ffffff15",
        rotationFrames: 100 + Math.floor(Math.random() * 200),
      },
    ]);
  };

  const Remove = () => {
    paths = [];
    setEntities(entities.slice(0, -1));
  };
  return (
    <Context.Provider value={{ Draw, entities, Add, Remove, Update }}>
      {props.children}
    </Context.Provider>
  );
};
