import { AmbientLight, DirectionalLight } from 'three';

function createLight() {
  const light = new AmbientLight('white', 8);
  light.position.set(20, 20, 20);
  return light;
}

export { createLight };
