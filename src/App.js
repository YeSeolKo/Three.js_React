import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
//useFrame,useRef사용해서 애니메이션 넣기

//useFrame은 오직 canvas안에서만 . 만약 이걸 또 쓰고싶으면
//컴포넌트를 더 만들어야함.

//콜백함수
const Box = () => {
  //*useRef */
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;
  });

  return (
    //*useRef */ ->박스만 선택해서 애만 애니메이션 적용
    <mesh ref={ref}>
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
      <Canvas style={{ background: "black" }}>
        <Box />
      </Canvas>
    </div>
  );
}
export default App;
