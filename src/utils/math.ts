import { Coord, PanZoom } from "./types";

const degToRad = (degrees: number) => {
  return degrees * (Math.PI / 180);
};

export const convertCartesianToScreen = (
  canvas: HTMLCanvasElement,
  cartesianCoord: Coord,
  dpr: number
): Coord => {
  const screenPoint = {
    x: cartesianCoord.x + canvas.width / dpr / 2,
    y: cartesianCoord.y + canvas.height / dpr / 2,
  } as Coord;
  return screenPoint;
};

export function diffPoints(p1: Coord, p2: Coord): Coord {
  return { x: p1.x - p2.x, y: p1.y - p2.y };
}

export function addPoints(p1: Coord, p2: Coord): Coord {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
}

export function distPoints(p1: Coord, p2: Coord): number {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
}

export function gradientPoints(p1: Coord, p2: Coord): number {
  return (p2.y - p1.y) / (p2.x - p1.x);
}

export function directionPoints(p1: Coord, p2: Coord): number {
  const signX = p1.x > p2.x ? -1 : p1.x === p2.x ? 0 : 1;
  const signY = p1.y > p2.y ? -1 : p1.y === p2.y ? 0 : 1;
  let direction = 0;

  if (signX === -1 && signY === 1) direction = 1;
  else if (signX === 0 && signY === 1) direction = 2;
  else if (signX === 1 && signY === 1) direction = 3;
  else if (signX === -1 && signY === 0) direction = 4;
  else if (signX === 1 && signY === 0) direction = 6;
  else if (signX === -1 && signY === -1) direction = 7;
  else if (signX === 0 && signY === -1) direction = 8;
  else if (signX === 1 && signY === -1) direction = 9;
  else direction = 5;

  return direction;
}

/**
 * Actual world point is converted to screen(=viewing) point
 * @param point
 * @param panZoom
 * @returns
 */
export function getScreenPoint(point: Coord, panZoom: PanZoom): Coord {
  const { offset, scale } = panZoom;

  return {
    x: Math.floor(point.x * scale + offset.x),
    y: Math.floor(point.y * scale + offset.y),
  };
}

/**
 * This is the real point in the actual world
 * @param point
 * @param panZoom
 * @returns
 */
export function getWorldPoint(point: Coord, panZoom: PanZoom): Coord {
  const { offset, scale } = panZoom;

  return { x: (point.x - offset.x) / scale, y: (point.y - offset.y) / scale };
}

export function convertScreenPointToCartesian(
  canvas: HTMLCanvasElement,
  screenPoint: Coord,
  dpr: number
): Coord {
  const cartesianCoord = {
    x: screenPoint.x - canvas.width / dpr / 2,
    y: screenPoint.y - canvas.height / dpr / 2,
  } as Coord;
  return cartesianCoord;
}

export function worldPointToCartesian(point: Coord, panZoom: PanZoom): Coord {
  const { offset, scale } = panZoom;

  return {
    x: (point.x - offset.x) / scale,
    y: (point.y - offset.y) / scale,
  };
}
