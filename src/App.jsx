import { React, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { ScrollControls} from '@react-three/drei'
import WelcomeText from './components/WelcomeText'
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
              <WelcomeText/>
              <MainCarousel />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
  )
}

export default App
