import * as THREE from "three";
import { camera, scene } from "./core";
import { Size } from "./constants";

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let isDragging = false;
let selectedObject: any = null;
// Обработчик события mousedown
document.addEventListener("mousedown", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  let intersects = raycaster.intersectObjects(scene.children);

  if (intersects.length > 0 && intersects[0].object.userData.isPiece) {
    isDragging = true;
    selectedObject = intersects[0].object;
    selectedObject.position.z += 1; // Приподнимаем фигуру
  }
});

// Обработчик события mousemove
document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    let intersects = raycaster.intersectObjects(scene.children);

    if (intersects.length > 0) {
      let newPosition = intersects[0].point;
      newPosition.z = selectedObject.position.z; // Сохраняем текущую высоту
      selectedObject.position.copy(newPosition);
    }
  }
});

// Обработчик события mouseup
document.addEventListener("mouseup", () => {
  if (isDragging) {
    selectedObject.position.z -= 1; // Опускаем фигуру обратно

    // Определение центра ближайшей клетки
    let cellX =
      Math.floor(selectedObject.position.x / Size.Square) * Size.Square +
      Size.Square / 2;
    let cellY =
      Math.floor(selectedObject.position.y / Size.Square) * Size.Square +
      Size.Square / 2;

    // Установка фигуры в центр ближайшей клетки
    selectedObject.position.set(cellX, cellY, 0);

    isDragging = false;
    selectedObject = null;
  }
});
