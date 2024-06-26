import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TWEEN from '@tweenjs/tween.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { createGUIPosRotFolder} from './utils/gui.js';
import { createSector } from './utils/sectors.js';
import spaceHoloText from '/images/spaceBlue2.jpg';
import earhText from '/images/earth.jpg';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import holographicVertexShader from './shaders/holographic/vertex.glsl';
import holographicFragmentShader from './shaders/holographic/fragment.glsl';

import fetchPlanets from './apis/planetsRequest.js';
import planetsPositions from './utils/planetsPositions.js';

/*TODO: 
  - create sectors for the holo map (there seem to be 10 circle radiuses from the center to the edge of the holo map)
    * liberation info of sector and number of players
  - create a holographic shader material for the holo map
    * the hologram has a slight beehive pattern
  - create UI Hover effect for the planets
    * simple UI planet with name and liberation info  
    * advanced UI planel with planet picture and info
      * number of players on planet if applicable
  - verctor lerps for camera movement: 
    * close up to planet click
    * zoom out to the holo map
  - ingame textures of planets
   - create mouse controls like ingame
    * first a zoom in is required for planet selection
    * the mouse moves a circle around with wich you can select planets
*/

const width = window.innerWidth, height = window.innerHeight;
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );

const scene = new THREE.Scene();

const loader = new THREE.TextureLoader();
const holoMapTexture = loader.load(spaceHoloText);
const earthTexture = loader.load(earhText);

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 1000 );
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.y = 45;
camera.position.z = -65.5;

createGUIPosRotFolder(camera, 'Camera');

const modelLoader = new GLTFLoader();
const sectorsMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }); // Transparent material

const hologramRadius = 50;

modelLoader.load('./models/Sectors.glb', function (sectors){
  sectors.scene.traverse((node) => {
    if (node.isMesh) {
      node.material = sectorsMaterial;

      // Create an edges geometry for the white border
      const edges = new THREE.EdgesGeometry(node.geometry);
      const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff }));
      node.add(line);
    }
  });
  sectors.scene.position.y = -0.1;
  // sectors.scene.rotation.x = Math.PI * 1.5;
  // sectors.scene.rotation.y -= 2 * (Math.PI / 180); // rotate sector group 5 degrees to the left
  sectors.scene.rotation.y = Math.PI;
  sectors.scene.scale.set(hologramRadius, hologramRadius, hologramRadius);
  scene.add(sectors.scene);
  console.log(sectors.scene);
})

const stats = new Stats();
document.body.appendChild(stats.dom);

const light = new THREE.PointLight(0xffffff, 70, 2000);
const lightHelper = new THREE.PointLightHelper(light);
light.position.set(0, 0, -5);
scene.add(light);

const hologramGeometry = new THREE.CircleGeometry( hologramRadius, 50 ); 
const material = new THREE.MeshPhongMaterial( { color: 0x0000ff, side: THREE.DoubleSide,map: holoMapTexture} );

const holoMapShaderMaterial = new THREE.ShaderMaterial({
  vertexShader: holographicVertexShader,
  fragmentShader: holographicFragmentShader,
  uniforms: {
    uTime: new THREE.Uniform(0),
    uColor: new THREE.Uniform(new THREE.Color('#7cc7fc'))
  },
  transparent: true
});
console.log(holoMapShaderMaterial);

material.transparent = true;
material.opacity = 0.9;
material.shininess = 0;

const hologram = new THREE.Mesh( hologramGeometry, holoMapShaderMaterial ); 

hologram.rotation.x = -Math.PI / 2;
// hologram.rotation.x += 90 * (Math.PI / 180);
// hologram.rotation.y = Math.PI;
scene.add( hologram );
createGUIPosRotFolder(hologram, 'HoloProj');

const superEarthGeometry = new THREE.SphereGeometry( 2, 32, 32 );
const superEarthMaterial = new THREE.MeshBasicMaterial( { map: earthTexture } );
const superEarth = new THREE.Mesh( superEarthGeometry, superEarthMaterial );
scene.add( superEarth );
superEarth.position.y = 1;

// Calculate the golden angle
const planetGroup = new THREE.Group();
const planetSizes = 0.5;
// Create the planets
planetsPositions.forEach((planetPosition, i) => {
  const planetGeometry = new THREE.SphereGeometry(planetSizes, 32, 32);
  const planetMaterial = new THREE.MeshBasicMaterial({ color: '#FFFFFF' });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);
  
  // Use the planet's position from the API
  planet.position.x = planetPosition.position.x * hologramRadius + 0.1;
  planet.position.y = planetPosition.position.y * hologramRadius + 0.14; 
  
  planetGroup.add(planet);
});

scene.add(planetGroup);
planetGroup.position.z = -0.1;
planetGroup.position.y = 0.2;
planetGroup.rotation.x = Math.PI / 2;
planetGroup.rotation.y = Math.PI;

renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

//events

const raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();

window.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX / window.innerWidth * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
})

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

// animation

const clock = new THREE.Clock();

function animation( time ) {
  // Update material
  holoMapShaderMaterial.uniforms.uTime.value = time;

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(planetGroup.children);

  for (const intersect of intersects) {
    // console.log(intersect);
  }

  stats.update()
  controls.update();
  
  renderer.render( scene, camera );
}