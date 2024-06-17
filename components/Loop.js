import { Clock } from 'three';
import { createStats } from '../systems/stats';

const clock = new Clock();
const stats = createStats();

class Loop {
  constructor(camera, scene, renderer) {
    this.camera = camera;
    this.scene = scene;
    this.renderer = renderer;
    this.updatables = [];
  }

  start() {
    this.renderer.setAnimationLoop(() => {
      this.tick();
      this.renderer.render(this.scene, this.camera);
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  tick() {
    const delta = clock.getDelta();
    stats.begin();
    for (const object of this.updatables) {
      object.tick(delta);
    }
    stats.end();
  }
}

export { Loop };
