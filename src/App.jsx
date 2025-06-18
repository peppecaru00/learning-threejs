import { React, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './App.css'
import { ScrollControls} from '@react-three/drei'
import BackgroundMedia from './components/BackgroundMedia'

import ScrollingText from './components/ScrollingText'


function App() {
  return (
      <div className="canvas-container">
        <Canvas
          camera={{
            position: [0, 0, 6],
            fov: 90,
            zoom: 2
          }}>

          <Suspense fallback={null}>
            <ScrollControls pages={3} damping={0.1}>
              <ScrollingText scale={1.5} text="This" position={[2, -1, 1]} />
              <ScrollingText scale={1.5} text="is my" position={[-4, -4, -2]} />
              <ScrollingText scale={2} text="PORTFOLIO." position={[1.5, -10, -1]} />
              <BackgroundMedia mediaUrl={'/latest_video.mkv'} aspectRatio={2 / 1} rotation={[0,Math.PI/8,0]} position={[6, 0, -10]} scaleFactor={.5} />
              <BackgroundMedia mediaUrl={'/test_conversione.mp4'} aspectRatio={16 / 9} rotation={[0,Math.PI/8,0]} position={[6, -13, -10]} scaleFactor={.5} />
            </ScrollControls>
          </Suspense>
        </Canvas>
      </div>
  )
}

export default App
