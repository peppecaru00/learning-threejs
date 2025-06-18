import {Capsule, MeshTransmissionMaterial} from '@react-three/drei';
import FixedText3D from './FixedText3D';
import { useThree } from '@react-three/fiber';
import { useRef, useEffect } from 'react';

function NavButton (){
    const { viewport } = useThree();
    const groupRef = useRef();
      useEffect(() => {
        if (groupRef.current) {
            // Position with padding from edges
            const padding = 2; // Distance from edge
            const x = (viewport.width / 2) - padding;   // Right edge with padding
            const y = (viewport.height / 2) - padding;  // Top edge with padding
            const z = 0;
            
            groupRef.current.position.set(x, y, z);
        }
    }, [viewport]);

    return(
        <group ref={groupRef}> {/* Remove fixed position, use ref instead */}
            <Capsule args={[1,2,32,64]} rotation={[0,0,Math.PI/2]}>
            <MeshTransmissionMaterial
                color="white"
                metalness={0}
                roughness={0.01}
                ior={1.8}
                thickness={1}
                reflectivity={0}
                chromaticAberration={0.1}
                clearcoat={0.4}
                resolution={1024}
                clearcoatRoughness={0.05}
                iridescence={0.9}
                iridescenceIOR={0.1}
                iridescenceThicknessRange={[0, 140]}
                samples={4}
              />        </Capsule>
        <FixedText3D text={'Hola'} position={[0,0,4]} scale={.1} /> 
        </group>
        
    )
}

export default NavButton