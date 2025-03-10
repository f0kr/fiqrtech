
export default function Wall() {

  return (
    <mesh scale={[window.innerWidth, window.innerHeight, 10]} position={[1,1, -20]} >
      <planeGeometry args={[1,1, 1]} />  
      <meshStandardMaterial color={"#222"}/>
    </mesh>
  );
}
