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

const loader = new THREE.TextureLoader();
const holoMapTexture = loader.load(spaceHoloText);
const earthTexture = loader.load(earhText);

const camera = new THREE.PerspectiveCamera( 70, width / height, 0.01, 100 );
const controls = new OrbitControls(camera, renderer.domElement);

const modelLoader = new GLTFLoader();
const sectorsMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }); // Transparent material

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
  sectors.scene.position.z = 0.1;
  sectors.scene.rotation.x = Math.PI * 1.5;
  // sectors.scene.rotation.y -= 2 * (Math.PI / 180); // rotate sector group 5 degrees to the left
  sectors.scene.rotation.y = Math.PI;
  sectors.scene.scale.set(20, 20, 20);
  scene.add(sectors.scene);
  console.log(sectors.scene);
})

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

const hologram = new THREE.Mesh( geometry, holoMapShaderMaterial ); 
hologram.position.z = -0.1;
hologram.rotation.x = Math.PI;
scene.add( hologram );
createGUIPosRotFolder(hologram, 'HoloProj');

const sphereGeometry = new THREE.SphereGeometry( 1, 32, 32 );
const sphereMaterial = new THREE.MeshBasicMaterial( { map: earthTexture } );
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );
sphere.position.z = -1;

// Calculate the golden angle
const hologramRadius = 20;
const planetGroup = new THREE.Group();

// Create the planets
planetsPositions.forEach((planetPosition, i) => {

  const planetGeometry = new THREE.SphereGeometry(0.1, 32, 32);
  const planetMaterial = new THREE.MeshBasicMaterial({ color: '#FFFFFF' });
  const planet = new THREE.Mesh(planetGeometry, planetMaterial);

  // Use the planet's position from the API
  planet.position.x = planetPosition.position.x * hologramRadius + 0.15;
  planet.position.y = planetPosition.position.y * hologramRadius + 0.15; // the planet positiosn are inverted, just like the sectors where when first placed

  planetGroup.add(planet);
});

scene.add(planetGroup);
planetGroup.position.z = -0.1;
planetGroup.rotation.y = Math.PI;

const sectorRadiuses = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]; // The radiuses of the sectors
const sectorsPerGroup = [6, 8, 10, 12, 14, 18]; // Increase the number of sectors in the outer groups
let sectorIndex = 0; // The current sector index

for (let i = 0; i < sectorsPerGroup.length; i+=2) {
    const innerRadius = sectorRadiuses[i];
    const outerRadius = sectorRadiuses[i + 6] || 20; // Default to 20 if there is no next radius
    const sectorsInGroup = sectorsPerGroup[i];

    for (let j = 0; j < sectorsInGroup; j++) {
        const sectorAngle = 2 * Math.PI / sectorsInGroup;
        const sector = createSector(sectorAngle, innerRadius, outerRadius);
        sector.rotation.z = j * sectorAngle;
        // scene.add(sector);
        sector.position.z = -0.1;
        sectorIndex++;

        if (sectorIndex >= 53) {
            break;
        }
    }

    if (sectorIndex >= 53) {
        break;
    }
}

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