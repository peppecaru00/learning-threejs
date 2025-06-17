import {Scroll, Text} from '@react-three/drei';

function Text3D({text, position, scale,}) {
    return (
        <Scroll>
        <Text scale={scale} position={position} letterSpacing={-.05} font='public\fonts\mabry-pro\MabryPro-Black.ttf' >
            {text}
        </Text>
        </Scroll>
    )
}
export default Text3D;