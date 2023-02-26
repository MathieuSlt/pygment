import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Logo3D from "./Logo3D";
import { Suspense, useRef, useEffect } from 'react';

const Scene = () => {

    const cameraRef = useRef();
    const rendererRef = useRef();

    useEffect(() => {
        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        };
    }, []);

    const onWindowResize = () => {
        const camera = cameraRef.current;
        const renderer = rendererRef.current;

        if (camera) {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }

        if (renderer) {
            renderer.setSize(window.innerWidth, window.innerHeight);
        }
    };

    return (
        <div className='canvas-container'>
            <Canvas>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <pointLight position={[-10, -10, -10]} />
                <Suspense fallback={null}>
                    <Logo3D position={[0, 0, 0]} />
                </Suspense>
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default Scene;