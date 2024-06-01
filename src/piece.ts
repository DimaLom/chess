import * as THREE from "three";

// Создаем фигуру

const pieceGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const pieceMaterial = new THREE.MeshBasicMaterial({
  color: 0x8f00af,
});

const initialPiece = new THREE.Mesh(pieceGeometry, pieceMaterial);

initialPiece.userData.isPiece = true;

export const piece = initialPiece;
