import {useVideoTexture } from '@react-three/drei'
import './App.css'

function VideoMesh() {
  const texture = useVideoTexture("../test_conversioned.mp4")
  
  return (
    <mesh>
      <capsuleGeometry args={[1, 2, 32, 64]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}
export default VideoMesh()
