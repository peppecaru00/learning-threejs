import { Text } from '@react-three/drei';

function FixedText({ text, position, scale, }) {
    
    return (
    <div className="fixed-text">
        <Text scale={scale} position={position} letterSpacing={-.05} font='public\fonts\mabry-pro\MabryPro-Black.ttf' >
            {text}
        </Text>
    </div>

    )
}
export default FixedText;