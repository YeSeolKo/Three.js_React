import { Canvas, useFrame, useThree, extend } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });
//OrbitControl을 사용하려면 extend도 import해야한다.

const Orbit = () => {
  const { camera, gl } = useThree();
  return <orbitControls args={[camera, gl.domElement]} />;
};

//콜백함수
const Box = (props) => {
  //*useRef */
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    //*useRef */ ->박스만 선택해서 애만 애니메이션 적용
    <mesh ref={ref} {...props}>
      <boxBufferGeometry />
      <meshBasicMaterial color="blue" />
    </mesh>
  );
};

function App() {
  return (
    //부모div의 크기에 따라 canvas 크기 정해짐
    <div style={{ height: "100vh", width: "100vw" }}>
      {/* canvas에서 배경 색 설정 */}
      <Canvas style={{ background: "black" }} camera={{ position: [3, 3, 3] }}>
        <Box />

        <Orbit />
        {/**axesHelper args   */}
        <axesHelper args={[5]} />
      </Canvas>
    </div>
  );
}
export default App;
