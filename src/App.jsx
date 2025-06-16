import { React, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, MeshTransmissionMaterial, ScrollControls } from '@react-three/drei'
import BackgroundMedia from './components/BackgroundMedia'
import RefractiveCapsule from './components/RefractiveCapsule'

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
            <RefractiveCapsule />
            <ScrollControls pages={3} damping={0.1}>
              <BackgroundMedia mediaUrl={'./latest_video.mkv'} />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default App
