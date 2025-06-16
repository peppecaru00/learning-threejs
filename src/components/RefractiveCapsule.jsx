import { MeshTransmissionMaterial} from '@react-three/drei';
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

function RefractiveCapsule() {

    return (
        <mesh scale={3} position={[5,0,-10]} rotation={[0, 0, 0]}>
            <capsuleGeometry rotateX={90} args={[1, 2, 12, 64]} />
            <MeshTransmissionMaterial
                color="#f5f5f5"
                metalness={0}
                roughness={0.01}
                ior={1.8}
                thickness={1}
                reflectivity={0.1}
                chromaticAberration={0.1}
                clearcoat={0.4}
                resolution={1024}
                clearcoatRoughness={0.05}
                iridescence={0.9}
                iridescenceIOR={0.1}
                iridescenceThicknessRange={[0, 140]}
                samples={4} />
        </mesh>
    )
}
export default RefractiveCapsule;