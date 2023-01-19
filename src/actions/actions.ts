import { IEntity } from "../types";

export const ConvertEntity = (entity: IEntity, frame: number): IEntity => {
  let percent = (frame % entity.rotationFrames) / entity.rotationFrames;
  return {
    ...entity,
    point: [
      getCircleX(360 * percent * (Math.PI / 180), entity.radius) +
        entity.center[0],
      getCircleY(360 * percent * (Math.PI / 180), entity.radius) +
        entity.center[1],
    ],
  };
};

function getCircleX(radians: number, radius: number) {
  return Math.cos(radians) * radius;
}

function getCircleY(radians: number, radius: number) {
  return Math.sin(radians) * radius;
}
