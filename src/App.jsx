import { React, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { Environment, MeshTransmissionMaterial } from '@react-three/drei'
import Homepage from './components/Homepage'
import VideoBackground from './components/BackgroundImageCover'
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
            <VideoBackground />

          </Suspense>
        </Canvas>
      </div>
      <Homepage />
    </>
  )
}

export default App
