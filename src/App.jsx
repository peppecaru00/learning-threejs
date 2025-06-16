import { React, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, MeshTransmissionMaterial, ScrollControls, OrbitControls } from '@react-three/drei'
import BackgroundMedia from './components/BackgroundMedia'
import RefractiveCapsule from './components/RefractiveCapsule'
import CustomCursor from './components/CustomCursor'
import Homepage from './components/Homepage'

function App() {
  return (
    <>
      <div className="canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 90,
            zoom: 1.5
          }}>

          <Suspense fallback={null}>
            <ScrollControls pages={3} damping={0.1}>
              <BackgroundMedia mediaUrl={'./latest_video.mkv'} aspectRatio={2/1} position={[0, 0, -2]} />
              <BackgroundMedia mediaUrl={'./test_conversione.mp4'} aspectRatio={16/9} position={[0, -10, -2]} />
              <Homepage/>
            </ScrollControls>
            <RefractiveCapsule />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default App
