import { useRef } from 'react'
import { Canvas } from "@react-three/fiber";

function Box(props) {
    const ref = useRef();

    return (        
    <mesh
    {...props}
    ref={ref}
    scale={1}
    >
     <planeBufferGeometry attach="geometry" args={[visualViewport.width, visualViewport.height]} />
        <meshBasicMaterial color='pink' />
    </mesh>
)
}

export default function App() {
    return (
        <Canvas>
      <Box position={[0, 0, 1]} />
        </Canvas>
    )
}