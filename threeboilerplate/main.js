import './three.css'
import * as THREE from 'three';

// MOUSE CONTEROL
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
 
 const scene = new THREE.Scene(); //Setting up the screen

 const camera =new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 1 ,1000 ); //Setting up the camera

 const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#sphere'),
 });

 renderer.setPixelRatio( window.devicePixelRatio); //The pixel raion of the screen
 renderer.setSize(window.innerWidth,window.innerHeight); //Screen Size
 camera.position.setZ(10); //How far we want to place the camera.

//  let texture = new THREE.CanvasTexture() ;
//  texture.wraps = THREE.Repeatwrapping;
//  texture.wrapT = THREE .RepeatWrapping;
//  texture.repeat.x = 10;
//  texture.repeat.y = 6;

 const geometry = new THREE.SphereGeometry(4,64,64)
 const material = new THREE.MeshStandardMaterial( {color:0x8418ca , wireframe:true});

 const sphere = new THREE.Mesh( geometry,material)

 scene.add(sphere);

// Adding Light Source
const pointLight = new THREE.PointLight( 0xffffff);
pointLight.position.set(20,20,20)

const pointLight2 = new THREE.PointLight( 0xffffff);
pointLight2.position.set(5,5,5)

// const spotLight = new THREE.AmbientLight( 0xffffff );
// spotLight.position.set( 10, 10, 10 );


scene.add(pointLight,pointLight2);



// Some light helpers

// const lightHelper = new THREE.PointLightHelper(pointLight) //Camera position
// const gridHelper = new THREE.GridHelper(200,50) //places grid.

// scene.add(lightHelper,gridHelper)

// Mouse/ORBIT CONTROLS

const controls = new OrbitControls(camera,renderer.domElement); 









// Moving camera / Animation On Scroll

function moveCamera()  {
const t = document.body.getBoundingClientRect().top //Calculates how far we ade from the top.


camera.position.z = t * -0.01;
camera.position.x = t * -0.002;
camera.position.y = t * -0.002;



}


document.body.onscroll = moveCamera;



function animate(){
    requestAnimationFrame(animate);
  



    sphere.rotation.x += 0.005;
    sphere.rotation.y += 0.005;

    
    controls.update()




    renderer.render(scene,camera);
}

animate()


