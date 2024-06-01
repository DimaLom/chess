import { camera, renderer, scene } from "./core";

import { board } from "./board";
import { piece } from "./piece";

import "./movement";
import "./style.css";

// Устанавливаем начальную позицию фигуры в центр одной из клеток (например, первой клетки)
piece.position.set(-3.5, -3.5, 0.25);

// Добавляем доску и фигуру на сцену
scene.add(board);
scene.add(piece);

// Анимация
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
