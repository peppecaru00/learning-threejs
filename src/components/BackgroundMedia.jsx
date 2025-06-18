import { useThree } from '@react-three/fiber'
import { Scroll, useTexture, useVideoTexture, useScroll } from '@react-three/drei'
import { useSnapshot } from 'valtio'
import { state } from '../store'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function BackgroundMedia({mediaUrl, aspectRatio, position, rotation, scaleFactor}) {
  const { viewport } = useThree()
  const { background } = useSnapshot(state)
  
  //servone per fare scrollare gli elementi singoli
  const meshRef = useRef()
  const scroll = useScroll()
  // Add debugging
  console.log('BackgroundMedia - mediaUrl:', mediaUrl, 'aspectRatio:', aspectRatio)
  
  const isVideo = mediaUrl?.endsWith('.mp4') || mediaUrl?.endsWith('.mkv') || mediaUrl?.endsWith('.webm')
  
  // Load texture based on type
  const texture = isVideo 
    ? useVideoTexture(mediaUrl, { start: true, muted: true, loop: true })
    : useTexture(mediaUrl)  // Use mediaUrl directly instead of background
  
  // Set the aspect ratio of your video/image here
  const mediaAspect = aspectRatio // Change this to match your actual video aspect ratio
  
  let scale = [(viewport.height*scaleFactor) * mediaAspect, (viewport.height*scaleFactor), 1]

  useFrame(() => {
    if (meshRef.current && scroll) {
      // Move background based on scroll position
      meshRef.current.position.set(
        position[0], 
        position[1] + scroll.offset * 10, 
        position[2]
      )
    }
  })

  return (
    <Scroll>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial reflectivity={0} map={texture} toneMapped={false} />
      </mesh>
    </Scroll>
  )
}