import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  const hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);

  // adding directional lights
  const directionLight = new THREE.DirectionalLight(0xffffff, 100);
  directionLight.position.set(0, 1, 0);
  directionLight.castShadow = true;
  scene.add(directionLight);

  // adding shadow
  const light = new THREE.PointLight(0xc4c4c4, 10);
  light.position.set(0, 300, 500);
  scene.add(light);

  const light2 = new THREE.PointLight(0xc4c4c4, 10);
  light2.position.set(500, 100, 0);
  scene.add(light2);

  const light3 = new THREE.PointLight(0xc4c4c4, 10);
  light3.position.set(0, 100, -500);
  scene.add(light3);

  const light4 = new THREE.PointLight(0xc4c4c4, 10);
  light4.position.set(-500, 300, 0);
  scene.add(light4);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', renderer);

  let loader = new GLTFLoader();
  loader.load('/assets/gltf/scene.gltf', function (gltf) {
    const car = gltf.scene.children[0];
    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    animate();
  });
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
