import {
  BoxGeometry,
  Color,
  MathUtils,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  TextureLoader
} from 'three';
import gui from '../gui/baseGui';

const radiansPerSecond = MathUtils.degToRad(30);

function createCube() {
  const geometry = new BoxGeometry(2, 2, 2);

  const spec = {
    color: new Color('skyblue')
  };

  const folder = gui.addFolder('THREE.material');

  const material1 = createMaterial('/assets/textures/uv-test-bw.png');
  const material2 = createMaterial('/assets/textures/uv-test-col.png');

  folder.addColor(material1, 'color');
  folder.add(material1, 'roughness').min(0).max(1);
  folder.add(material1, 'metalness').min(0).max(1);
  folder.add(material1, 'wireframe');

  const cube = new Mesh(geometry, [
    material1,
    material2,
    material1,
    material2,
    material1,
    material2
  ]);

  let dir = 1;
  cube.tick = (delta) => {
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;

    // make cube move from [-5, 5] at x axis
    if (cube.position.x > 5) {
      dir = -1;
    } else if (cube.position.x < -5) {
      dir = 1;
    }
    cube.position.x += dir * delta;
  };

  return cube;
}

function createMaterial(url) {
  const textureLoader = new TextureLoader();

  const cubeTexture1 = textureLoader.load(url);

  const material = new MeshStandardMaterial({
    map: cubeTexture1
  });

  return material;
}

export { createCube };
