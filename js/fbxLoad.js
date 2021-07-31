
			function fbxLoad(FBXLoader) {
        var loader = new FBXLoader();
        loader.load( 'models/interior.fbx', function ( object ) {


            object.traverse( function ( child ) {
                if ( child.isMesh ) {
                    child.castShadow = true;
                    child.receiveShadow = false;
                    child.flatshading = true;
                }
            } );
            object.position.x = 50
            object.position.y = 8
            scene.add( object );
        } );
			}
