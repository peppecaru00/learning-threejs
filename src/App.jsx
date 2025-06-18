import { React, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { ScrollControls} from '@react-three/drei'

import ScrollingText from './components/ScrollingText'
import MainCarousel from './components/MainCarousel'


function App() {
  return (
      <div className="canvas-container">
        <Canvas
          camera={{
            position: [-4, 0, 6],
            rotation: [0, - Math.PI / 8, 0],
            fov: 90,
            zoom: 2
          }}>
            
          <Suspense fallback={null}>
            <ScrollControls pages={3} damping={0.1}>

              <ScrollingText scale={1.5} text="Hi mate," position={[-3, 1, 1]} />
              <ScrollingText scale={1.5} text="this" position={[1, -1, 1]} />
              <ScrollingText scale={1.5} text="is my new" position={[-4, -4, -2]} />
              <ScrollingText scale={2} text="PORTFOLIO." position={[1.5, -10, -1]} />
              <ScrollingText scale={.5} text="( made in react/fiber)" position={[1.5, -12.5, 1]} />

              <MainCarousel />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
  )
}

export default App
