import BackgroundMedia from './BackgroundMedia';
import ScrollingText from './ScrollingText';
import { Container, Root, Text } from '@react-three/uikit';
import Button2D from './Button2D';

function MainCarousel() {
    return (

        <group position={[15, -30, 0]}>

            <group>
                <BackgroundMedia
                    mediaUrl="/latest_video.mkv" aspectRatio={2 / 1}
                    position={[-5, 0, -10]}
                    fixedWidth={10} />
                <ScrollingText
                    position={[-18.6, 7.4, .1]}
                    rotation={[0, -Math.PI / 4, 0]}
                    text={'In Pinerolo'} scale={.4}
                />
                <ScrollingText
                    position={[-19.5, 8, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                    text={'VFX Shooting Day'}
                    scale={.5} />
                <Button2D
                    onClick={() => { window.open("https://youtu.be/98MAwX6GGG8") }}
                    rotation={[0, -Math.PI / 4, 0]}
                    text={'Watch on YT'}
                    borderRadius={100}
                    scale={2}
                    padding={5}
                    backgroundColor={'red'}
                    color={'#f5f5f5'} />

            </group>

            <group>
                <BackgroundMedia
                    mediaUrl="/test_conversione.mp4"
                    aspectRatio={16 / 9}
                    position={[-5, -11, -10]}
                    fixedWidth={10} />
                <ScrollingText
                    position={[-18.7, 0, .1]}
                    rotation={[0, -Math.PI / 4, 0]}
                    text={'At Valentino'}
                    scale={.4} />
                <ScrollingText
                    position={[-18.6, .5, 0]}
                    rotation={[0, -Math.PI / 4, 0]}
                    text={'First May'}
                    scale={.5} />
                <Button2D
                    onClick={() => { window.open("https://youtu.be/cvP7Oz6uYh4") }}
                    position={[-18.5, -0.6, 0]} rotation={[0, -Math.PI / 4, 0]}
                    text={'Watch on YT'}
                    borderRadius={100}
                    fontSize={10}
                    scale={2}
                    padding={5}
                    backgroundColor={'red'}
                    color={'#f5f5f5'} />
            </group>

        </group>
    )
} export default MainCarousel;