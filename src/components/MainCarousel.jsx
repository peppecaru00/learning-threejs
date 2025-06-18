import BackgroundMedia from './BackgroundMedia';
import ScrollingText from './ScrollingText';
import {Plane, } from '@react-three/drei';

function MainCarousel () {    return (
        <group position={[15, -30, 0]}>
            <group>
                <BackgroundMedia mediaUrl="/latest_video.mkv" aspectRatio={2 / 1} position={[-5, 0, -10]} fixedWidth={10} />
                <ScrollingText position={[-19.5,6,0]} rotation={[0,-Math.PI/4,0]} text={'In Pinerolo'} scale={.4} />
                <ScrollingText position={[-19.5,6.5,0]} rotation={[0,-Math.PI/4,0]} text={'VFX Shooting Day'} scale={.5} />
            </group>
            <group>
                <BackgroundMedia mediaUrl="/test_conversione.mp4" aspectRatio={16 / 9} position={[-5, -11, -10]} fixedWidth={10} />
                <ScrollingText position={[-19.5,0,0]} rotation={[0,-Math.PI/4,0]} text={'At Valentino'} scale={.4} />
                <ScrollingText position={[-19.5,.5,0]} rotation={[0,-Math.PI/4,0]} text={'First May'} scale={.5} />  
            </group>
            
        </group>
    )
}export default MainCarousel;