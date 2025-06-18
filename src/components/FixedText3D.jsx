import { Scroll, Text } from '@react-three/drei';

function FixedText3D({ text, position, scale, }) {
    
    return (
    <div className="scrolling-text">
        <Text scale={scale} position={position} letterSpacing={-.05} font='public\fonts\mabry-pro\MabryPro-Black.ttf' >
            {text}
        </Text>
    </div>

    )
}
export default FixedText3D;