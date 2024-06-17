import { Vector3 } from 'three';
import { createCamera } from './components/camera';
import { createLight } from './components/light';
import { createScene } from './components/scene';
import { createTorusKnot } from './components/torusKnot';
import { Resizer } from './systems/Resizer';
import { createControls } from './systems/controls';
import { createRenderer } from './systems/render';
import { createCube } from './components/cube';
import { Loop } from './components/Loop';

let camera, renderer, scene, loop;

class World {
  constructor(container) {
    camera = new createCamera();
    scene = createScene();
    renderer = createRenderer();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    // const torusKnot = createTorusKnot();
    const cube = createCube();
    // cube.rotateX(Math.PI / 4);
    // cube.rotateY(Math.PI / 4);

    const light = createLight();

    loop.updatables.push(cube);
    // loop.updatables.push(camera);

    scene.add(cube, light);

    const resizer = new Resizer(container, camera, renderer);

    // resizer.onResize = () => {
    //   this.render();
    // };

    this._controls = createControls(camera, renderer.domElement);
  }

  get controls() {
    return this._controls;
  }

  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
