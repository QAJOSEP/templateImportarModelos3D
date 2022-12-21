import {Canvas} from '@react-three/fiber'
import { useGLTF, Text, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

function Figura(props){
  const {scene} = useGLTF("/hiih.glb");
  return <primitive object={scene}{...props}/>
}

function App() {
  return (
    
    <Canvas dpr={[1,2]} style={{"position": "absolute"}} >
      <color attach="background" args={['#fff']} />

        <Suspense fallback={null}>
          <ambientLight/>

          <Figura scale={1}/>
          <OrbitControls/>

        </Suspense>
    </Canvas>
  );
}

export default App;
