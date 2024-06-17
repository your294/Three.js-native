import { Color, Mesh, MeshStandardMaterial, TorusKnotGeometry } from 'three';
import gui from '../gui/baseGui';

function createTorusKnot() {
  const geometry = new TorusKnotGeometry(3, 0.4, 200, 10, 2, 3);

  const spec = {
    color: new Color('skyblue')
  };
  const folder = gui.addFolder('THREE.material');

  const material = new MeshStandardMaterial(spec);

  folder.addColor(material, 'color');
  folder.add(material, 'roughness').min(0).max(1);
  folder.add(material, 'metalness').min(0).max(1);
  folder.add(material, 'wireframe');

  const torusKnot = new Mesh(geometry, material);

  return torusKnot;
}

export { createTorusKnot };
