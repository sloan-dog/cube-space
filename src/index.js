import _ from 'lodash';

import * as THREE from 'three';

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via  script, is required for this line to work
    element.innerHTML = _.join(['Cube', 'Space'], ' ')
    
    let cvs = document.createElement('canvas')
    
    element.appendChild(
        cvs
    )

    let scene = new THREE.Scene()
    let cam = new THREE.PerspectiveCamera(
        75, 
        window.innerWidth / window.innerHeight, 0.1, 1000
    );

    let renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    const geometry = new THREE.BoxGeometry( 1, 1, 1);
    const material = new THREE.MeshBasicMaterial(
        {
            color: 0x00ff00
        }
    );

    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    cam.position.z = 5;

    function animate() {
        requestAnimationFrame( animate );

        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;

        renderer.render( scene, cam );
    }
    animate();

    return element;
}

document.body.appendChild(component());