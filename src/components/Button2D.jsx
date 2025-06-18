import { Root, Text, Container } from '@react-three/uikit';
import { Scroll } from '@react-three/drei';

function Button2D({ borderRadius,
  fontSize,
  backgroundColor,
  color, padding,
  scale,
  text,
  onClick,
  position,
  rotation
}) {
  const baseScale = scale || 1;

  return (
    <Scroll>
      <group position={position} rotation={rotation}>
        <Root>
          <Container
            transformScale={baseScale}
            cursor='pointer'
            hover={{ transformScale: baseScale * 1.04 }} // Multiply base scale on hover
            borderRadius={borderRadius}
            onClick={onClick}
            padding={padding}
            backgroundColor={backgroundColor || '#f5f5f5'}
          >
            <Text
              fontSize={fontSize}
              color={color}>
              {text || 'Click Here!'}</Text>
          </Container>
        </Root>
      </group>
    </Scroll>
  )
}
export default Button2D;