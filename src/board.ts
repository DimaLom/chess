import * as THREE from "three";

import { Size } from "./constants";

// создаем доску 8х8

const boardGroup = new THREE.Group();

for (let i = 0; i < Size.Board; i++) {
  for (let j = 0; j < Size.Board; j++) {
    const geometry = new THREE.BoxGeometry(Size.Square, Size.Square, 0.1);
    const material = new THREE.MeshBasicMaterial({
      color: (i + j) % 2 === 0 ? 0x000000 : 0xffffff,
    });

    const square = new THREE.Mesh(geometry, material);
    square.position.set(i * Size.Square, j * Size.Square, 0);
    boardGroup.add(square);
  }
}

// Сдвиг центра доски к середине
boardGroup.position.set(
  (-Size.Board * Size.Square) / 2 + Size.Square / 2,
  (-Size.Board * Size.Square) / 2 + Size.Square / 2,
  0
);

export const board = boardGroup;
