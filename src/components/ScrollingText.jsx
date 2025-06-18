import { Scroll, Text } from '@react-three/drei';
import { basicAnimations } from '../animations/Animations.js';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function ScrollingText({ text, position, rotation, scale}) {
    gsap.registerPlugin();

    const textRef = useRef()

    useEffect(() => {
        if (textRef.current)
            basicAnimations.slideUp(textRef.current, 1)
        
    } )

    return (
        <Scroll>
            <Text ref={textRef}
                scale={scale}
                rotation={rotation}
                position={position}
                letterSpacing={-.05}
                font='fonts\mabry-pro\MabryPro-Black.ttf'
                color={'#f5f5f5'}
            >
                {text}

            </Text>
        </Scroll>
    )
}
export default ScrollingText;