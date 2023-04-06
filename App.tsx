import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import "https://raw.githubusercontent.com/Majami29/myremake/main/App.css";
import "https://raw.githubusercontent.com/Majami29/myremake/main/index.js";

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <OrbitControls />
    </Canvas>
  );
}

function App() {
  return (
    <div className="App h-screen">
      <ThreeScene />
    </div>
  );
}

export default App;
