import { PerspectiveCamera } from 'three';

const maxDistance = 10;

function createCamera() {
  const camera = new PerspectiveCamera(55, 1, 0.1, 1000);

  camera.position.set(0, 0, 10);

  camera.tick = (delta) => {
    camera.position.z = (camera.position.z + delta) % maxDistance;
  };

  return camera;
}

export { createCamera };
