import gui from './gui/baseGui';
import './style.css';
import { World } from './world';

const world = new World(document.body);
const controls = world.controls;

const funcObj = {
  stopRotation: () => {
    world.stop();
  },
  startRotation: () => {
    world.start();
  }
};

gui.add(funcObj, 'stopRotation').name('停止旋转');
gui.add(funcObj, 'startRotation').name('开始旋转');

function animate() {
  controls.update();
  // world.render();
  world.start();
}

animate();
