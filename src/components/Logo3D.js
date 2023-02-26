import React, { useEffect, useRef } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import logo from '../assets/models/logo3d_v2.glb'

const Logo3D = ({ position }) => {
    const gltf = useLoader(GLTFLoader, logo);

    const meshRef = useRef();

    // useEffect(() => {
    //     meshRef.current.scale.set(2, 2, 2);
    // }, []);

    return (
        <mesh ref={meshRef} position={position}>
            <primitive object={gltf.scene} />
        </mesh>
    );
};

export default Logo3D;
