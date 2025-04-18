import * as THREE from "https://cdn.skypack.dev/three@0.125.0";
import { RGBELoader } from "https://cdn.skypack.dev/three@0.125.0/examples/jsm/loaders/RGBELoader.js";
import { OBJLoader } from "https://cdn.skypack.dev/three@0.134.0/examples/jsm/loaders/OBJLoader.js";

// 設置渲染器
var renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("canvas"),
  antialias: true,
  alpha: true,
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight); // 初始化為螢幕大小

var scene = new THREE.Scene();

// 設置 HDR 環境貼圖
const hdrEquirect = new RGBELoader().load("./img/glass.hdr", function () {
  hdrEquirect.mapping = THREE.EquirectangularReflectionMapping;
});
scene.environment = hdrEquirect;

// 設置場景霧效
scene.fog = new THREE.FogExp2(0x1e1e1e, 0.12);

// 創建 group，將攝影機和物件放入其中
var group = new THREE.Group();
scene.add(group);

// 創建光源
const pointlight = new THREE.PointLight(0xffffff, 0.1, 50);
pointlight.position.set(0, 0, 0);
group.add(pointlight);

// 創建攝影機
var camera = new THREE.PerspectiveCamera(
  45,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;
group.add(camera);

const material1 = new THREE.MeshStandardMaterial({
  color: 0x1e1e1e,
  roughness: 0,
  metalness: 7,
  envMapIntensity: 7,
});

// 加載模型
const objloader = new OBJLoader();
let model;
objloader.load("./module/flowercombine.obj", (object) => {
  model = object;
  object.children[0].material = material1;
  object.scale.setScalar(3);
  object.position.set(0, -2, 0);
  group.add(object);
});

// 動畫更新函數
var theta1 = 0;

var update = function () {
  theta1 += 0.0025;

  camera.position.x = Math.sin(theta1) * 9;
  camera.position.z = Math.cos(theta1) * 9;
  camera.position.y = 4;

  pointlight.position.x = Math.sin(theta1 + 1) * 11;
  pointlight.position.z = Math.cos(theta1 + 1) * 11;
  pointlight.position.y = 2 * Math.cos(theta1 - 3) + 3;

  group.rotation.y += 0.0003;

  camera.lookAt(0, 0, 0);
};

// 開始動畫循環
function animate() {
  update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
