import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

// 场景和摄像头
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x404040);
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 5;

const hlight = new THREE.AmbientLight(0x404040, 50);
scene.add(hlight);

// 添加灯光
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(0, 1, 1).normalize();
scene.add(light);

// 渲染器
const renderer = new THREE.WebGLRenderer(scene, camera);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 添加滑轨控制器
const controls = new OrbitControls(camera, renderer.domElement);

const textureLoader = new THREE.TextureLoader();

const loader = new GLTFLoader();
loader.load(
  '/assets/adamHead/output.gltf',
  function (gltf) {
    scene.add(gltf.scene);
    renderer.render(scene, camera);
  },
  function (xhr) {
    console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
  },
  function (err) {
    console.log(err);
  }
);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();

window.onresize = () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.apsect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
};
