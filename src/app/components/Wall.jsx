
export default function Wall() {
/*     const textureLoader = new THREE.TextureLoader()
    const albedo = textureLoader.load("pattern/albedo.png")
    const ao = textureLoader.load("pattern/ao.png")
    const mettalic = textureLoader.load("pattern/mettalic.png")
    const normal = textureLoader.load("pattern/normal.png")
    albedo.colorSpace = THREE.SRGBColorSpace

    useEffect(() => {
      if (albedo) {
        albedo.wrapS = THREE.RepeatWrapping; // Repeat horizontally
        albedo.wrapT = THREE.RepeatWrapping; // Repeat vertically
        albedo.repeat.set(20, 20); // Repeat texture 2x in both directions
      }
    }, [albedo]); */

  return (
    <mesh castShadow receiveShadow scale={[window.innerWidth, window.innerHeight, 10]} position={[1,1, -15]} >
      <planeGeometry args={[1,1, 1]} />  
      <meshStandardMaterial  color={"#417290"} /*  transparent opacity={0.5} normalMap={normal} metalnessMap={mettalic} aoMap={ao} map={albedo} side={2} colorMapIntensity={0.2} *//>
    </mesh>
  );
}
