import { OrbitControls } from 'three/examples/jsm/Addons.js';

function createControls(camera, element) {
  const controls = new OrbitControls(camera, element);

  return controls;
}

export { createControls };
