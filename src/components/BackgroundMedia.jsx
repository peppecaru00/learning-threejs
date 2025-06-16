import { useThree } from '@react-three/fiber'
import { Scroll, useTexture, useVideoTexture, useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function BackgroundMedia({mediaUrl}) {
  const { viewport } = useThree()
  const { background } = useSnapshot(state)
  
  //servone per fare scrollare gli elementi singoli
  const meshRef = useRef()
  const scroll = useScroll()
  
  const isVideo = ["video1", "video2", "video3"].includes(background)
  
  // Load texture based on type
  const texture = isVideo 
    ? useVideoTexture(mediaUrl, { start: true, muted: true, loop: true })
    : useTexture(`/${background}.jpg`)
  
  // Set the aspect ratio of your video/image here
  const mediaAspect = 2/1 // Change this to match your actual video aspect ratio
  const viewportAspect = viewport.width / viewport.height
  
  // Calculate scale for cover behavior (no stretching)
  let scale
  if (viewportAspect > mediaAspect) {
    // Viewport is wider - scale by width (height will be cropped)
    scale = [viewport.width, viewport.width / mediaAspect, 1]
  } else {
    // Viewport is taller - scale by height (width will be cropped)
    scale = [viewport.height * mediaAspect, viewport.height, 1]
  }

  useFrame(() => {
    if (meshRef.current && scroll) {
      // Move background based on scroll position
      meshRef.current.position.y = scroll.offset * 1 // Adjust multiplier for speed
      meshRef.current.rotation.z = scroll.offset * Math.PI * 0.1
    }
  })

  return (
    <Scroll>
      <mesh ref={meshRef} position={[0, 0, -2.5]} scale={scale}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial reflectivity={0} map={texture} toneMapped={false} />
      </mesh>
    </Scroll>
  )
}