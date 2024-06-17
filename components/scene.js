import { Color, Fog, Scene } from 'three';
import gui from '../gui/baseGui';

function createScene() {
  const scene = new Scene();

  const folder = gui.addFolder('scene.fog');

  const fogParams = {
    enabled: false,
    color: '#fff'
  };
  folder
    .add(fogParams, 'enabled')
    .name('Enable Fog')
    .onChange((value) => {
      if (value) {
        scene.fog = new Fog(fogParams.color, 1, 10);
      } else {
        scene.fog = null;
      }
    });
  folder
    .addColor(fogParams, 'color')
    .name('Fog color')
    .onChange((value) => {
      if (scene.fog) {
        scene.fog.color.set(value);
      }
    });
  scene.background = new Color('gray');

  return scene;
}

export { createScene };
