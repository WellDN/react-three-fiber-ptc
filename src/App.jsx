import { useFrame } from "@react-three/fiber";


function Animation(props) {
    const ref = useRef();

    useFrame((state, delta) => (ref.current.rotation.x += delta))
}

export default function App(){

    return
}