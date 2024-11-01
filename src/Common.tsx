import { Canvas } from "@react-three/fiber";
import { OrbitControls, GizmoHelper, GizmoViewport } from "@react-three/drei";

type CommonCanvasProps = {
  children: React.ReactNode;
};
export const CommonCanvas = ({ children }: CommonCanvasProps) => {
  return (
    <div style={{ height: "100dvh", width: "100dvw" }}>
      <Canvas shadows>
        <ambientLight intensity={1} castShadow/>
        <pointLight position={[3, 3, 3]} castShadow/>
        <directionalLight position={[-2, 3, 5]} castShadow/>
        {children}
        <OrbitControls/>
        <GizmoHelper alignment="top-right" margin={[75, 75]}>
          <GizmoViewport labelColor="white" axisHeadScale={1} />
        </GizmoHelper>
      </Canvas>
    </div>
  )
};