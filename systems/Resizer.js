function setResize(container, camera, renderer) {
  camera.aspect = container.clientWidth / container.clientHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);

  renderer.setPixelRatio(window.devicePixelRatio);
}

class Resizer {
  constructor(container, camera, renderer) {
    setResize(container, camera, renderer);

    window.onresize = () => {
      setResize(container, camera, renderer);
      this.onResize();
    };
  }

  onResize() {}
}

export { Resizer };
