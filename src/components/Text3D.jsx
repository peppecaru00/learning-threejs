import {Scroll, Text} from '@react-three/drei';

function Text3D() {
    return (
        <Scroll>
        <Text position={[0, 0, 3]} letterSpacing={-.05} font='public\fonts\InstagramSans-Bold.ttf' >
            Ciao,
        </Text>
        <Text position={[0, -1, 3]} letterSpacing={-.05} font='public\fonts\InstagramSans-Bold.ttf' >
            come
        </Text>
          <Text position={[0, -2, 3]} letterSpacing={-.05} font='public\fonts\InstagramSans-Bold.ttf' >
            butta?
        </Text>
        </Scroll>
    )
}
export default Text3D;