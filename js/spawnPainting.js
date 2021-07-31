function spawnPainting(x, y, z, rotation, img) {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffffff} );
    cube = new THREE.Mesh( geometry, material );
    cube.position.x = x
    cube.position.y = y
    cube.position.z = z

    cube.scale.x = 0.1
    cube.scale.y = 1.2
    cube.scale.z = 1.2
    loadPlane(cube, img)
    scene.add( cube );
}

function setQuadroRotation(rot, obj) {
		var rotation = Math.PI/2
		if (rot == 1) {
		}
		if (rot == 2) {
			//obj.rotation.y = 0.5;
			obj.rotation.z = Math.PI/2;
		}
		if (rot == 3) {
			//obj.rotation.y = 0.5;
			obj.rotation.z = (Math.PI/4) * 4;
		}
		if (rot == 4) {
			//obj.rotation.y = 0.5;
			obj.rotation.z = (Math.PI/4) * 6;
		}
    return obj
}


			function loadPlane(obj, img) {

					const geometry = new THREE.PlaneGeometry( 3, 3, 0 );
					var texture = new THREE.TextureLoader().load( "/img/painting/"+img );
					const material = new THREE.MeshBasicMaterial( {map: texture} );
					const plane = new THREE.Mesh( geometry, material );
					plane.position.x = 0.51;

					var scale = 0.34
					plane.scale.x = scale;
					plane.scale.y = scale;
					plane.scale.z = scale;
					//plane.rotation.x = -Math.PI/2;
          plane.rotation.y = Math.PI/2
					obj.add( plane );
          console.log("load plane")
			}
