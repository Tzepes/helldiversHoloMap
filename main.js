import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TWEEN from '@tweenjs/tween.js';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import { createGUIPosRotFolder} from './utils/gui.js';
import { createSector } from './utils/sectors.js';
import spaceHoloText from '/images/spaceBlue2.jpg';
import earhText from '/images/earth.jpg';

/*TODO: 
  - create sectors for the holo map (there seem to be 10 circle radiuses from the center to the edge of the holo map)
    * liberation info of sector and number of players
    * actual planet location from ingame
  - create mouse controls like ingame
    * first a zoom in is required for planet selection
    * the mouse moves a circle around with wich you can select planets
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
*/

const width = window.innerWidth, height = window.innerHeight;
const renderer = new THREE.WebGLRenderer( { antialias: true } );
renderer.setSize( width, height );


const loader = new THREE.TextureLoader();
const holoMapTexture = loader.load(spaceHoloText);
const earthTexture = loader.load(earhText);

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 100 );
const controls = new OrbitControls(camera, renderer.domElement);

controls.enableRotate = false;
controls.minDistance = 5;
camera.position.y = -15;
camera.position.z = -25.5;

createGUIPosRotFolder(camera, 'Camera');

const scene = new THREE.Scene();

const stats = new Stats();
document.body.appendChild(stats.dom);

const light = new THREE.PointLight(0xffffff, 70, 2000);
const lightHelper = new THREE.PointLightHelper(light);
light.position.set(0, 0, -5);
scene.add(light);

const geometry = new THREE.CircleGeometry( 20, 50 ); 
const material = new THREE.MeshPhongMaterial( { color: 0x0000ff, side: THREE.DoubleSide,map: holoMapTexture} );
const holoMapShaderMaterial = new THREE.ShaderMaterial();
material.transparent = true;
material.opacity = 0.9;
material.shininess = 0;
const circle = new THREE.Mesh( geometry, material ); 
scene.add( circle );
// circle.rotation.x = -2;
createGUIPosRotFolder(circle, 'HoloProj');

const sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
const sphereMaterial = new THREE.MeshBasicMaterial( { map: earthTexture } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );
sphere.position.z = -1;

// Calculate the golden angle
const goldenAngle = Math.PI * (3 - Math.sqrt(5));
const circleRadius = 20;
const planetGroup = new THREE.Group();

const colors = ['#C8E0F3', '#706567', '#8A8A8A', '#9A97FF', '#5B59B0', '#561315', '#D19C63', '#84CC4B', '#FF8733', '#90FF33']

// Create the spheres
for (let i = 0; i < 253; i++) {
  const colorIndex = Math.floor(Math.random() * colors.length);

  const planetGeometry = new THREE.SphereGeometry(0.1, 32, 32);
  const planetMaterial = new THREE.MeshBasicMaterial({ color: colors[colorIndex] });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);

  // Calculate the planet's position using the sunflower seed arrangement
  const radius = Math.sqrt(i / 253) * circleRadius;
  const angle = i * goldenAngle;

  // Convert polar coordinates to Cartesian coordinates
  planet.position.x = radius * Math.cos(angle);
  planet.position.y = radius * Math.sin(angle);

  planetGroup.add(planet);
}

scene.add(planetGroup);
planetGroup.position.z = -0.1;
// planetGroup.rotation.x = -2;

const sectorAngle = 2 * Math.PI / 53; // The angle of each sector
// const innerRadius = 10; // The inner radius of the sector
// const outerRadius = 20; // The outer radius of the sector

for (let i = 0; i < 53; i++) {
  const innerRadius = 1 + Math.random() * 17;
  const outerRadius = innerRadius + Math.random() * (20 - innerRadius);
  const sector = createSector(sectorAngle, innerRadius, outerRadius);
  sector.rotation.z = i * sectorAngle;
  scene.add(sector);
  sector.position.z = -0.1;
}

renderer.setAnimationLoop( animation );
document.body.appendChild( renderer.domElement );

//events

const raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let divPlanetInfo = null;

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
  const elapsedTime = clock.getElapsedTime();

  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObjects(planetGroup.children);

  for (const intersect of intersects) {
    console.log(intersect);
  }

  stats.update()
  controls.update();
  
  renderer.render( scene, camera );
}