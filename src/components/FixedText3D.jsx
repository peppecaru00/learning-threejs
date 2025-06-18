import {Scroll, Text} from '@react-three/drei';

function FixedText3D({text, position, scale,}) {
    return (

        <Text scale={scale} position={position} letterSpacing={-.05} font='public\fonts\mabry-pro\MabryPro-Black.ttf' >
            {text}
        </Text>

    )
}
export default FixedText3D;