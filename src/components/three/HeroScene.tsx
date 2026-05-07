import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Edges, Html } from '@react-three/drei';
import { useRef, useState, useEffect, Suspense } from 'react';
import * as THREE from 'three';

function CameraRig({ mx, my }: { mx: number; my: number }) {
  const { camera } = useThree();
  const tx = useRef(0);
  const ty = useRef(0);

  useFrame(() => {
    tx.current += (mx * 0.5 - tx.current) * 0.04;
    ty.current += (my * 0.25 - ty.current) * 0.04;
    camera.position.x = 4 + tx.current;
    camera.position.y = 2.5 + ty.current;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function House() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.1;
  });

  return (
    <group ref={group}>
      {/* Main building */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 1.8, 2.4]} />
        <meshStandardMaterial
          color="#181b31"
          transparent
          opacity={0.06}
          emissive="#8CBC94"
          emissiveIntensity={0.06}
        />
        <Edges color="#8CBC94" threshold={15} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 1.45, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[2.2, 1.2, 4]} />
        <meshStandardMaterial
          color="#181b31"
          transparent
          opacity={0.06}
          emissive="#8CBC94"
          emissiveIntensity={0.1}
        />
        <Edges color="#8CBC94" threshold={15} />
      </mesh>

      {/* Ghost house silhouette (like logo) */}
      <mesh position={[1.4, -0.1, -0.8]} rotation={[0, 0.3, 0]}>
        <boxGeometry args={[1.6, 1.4, 1.2]} />
        <meshStandardMaterial color="#242840" transparent opacity={0.04} />
        <Edges color="rgba(0,0,0,0.12)" threshold={15} />
      </mesh>
      <mesh position={[1.4, 0.92, -0.8]} rotation={[0, 0.3 + Math.PI / 4, 0]}>
        <coneGeometry args={[1.1, 0.8, 4]} />
        <meshStandardMaterial color="#242840" transparent opacity={0.04} />
        <Edges color="rgba(0,0,0,0.1)" threshold={15} />
      </mesh>

      {/* Floating labels */}
      <Float floatIntensity={1.5} speed={2}>
        <Html position={[2.6, 1.2, 0]} center distanceFactor={8}>
          <div
            className="whitespace-nowrap rounded-full border px-3 py-1 text-[10px] font-medium tracking-wider backdrop-blur-sm"
            style={{ borderColor: 'rgba(140,188,148,0.6)', backgroundColor: 'rgba(255,255,255,0.92)', color: '#181b31' }}
          >
            € 685.000
          </div>
        </Html>
      </Float>

      <Float floatIntensity={1.5} speed={1.6}>
        <Html position={[-2.8, 0.3, 0]} center distanceFactor={8}>
          <div
            className="whitespace-nowrap rounded-full border px-3 py-1 text-[10px] font-medium tracking-wider backdrop-blur-sm"
            style={{ borderColor: 'rgba(24,27,49,0.18)', backgroundColor: 'rgba(255,255,255,0.92)', color: '#181b31' }}
          >
            142 m²
          </div>
        </Html>
      </Float>

      <Float floatIntensity={1.2} speed={1.2}>
        <Html position={[0, -1.5, 1.4]} center distanceFactor={8}>
          <div
            className="whitespace-nowrap rounded-full border px-3 py-1 text-[10px] font-medium tracking-wider backdrop-blur-sm"
            style={{ borderColor: 'rgba(24,27,49,0.18)', backgroundColor: 'rgba(255,255,255,0.92)', color: '#181b31' }}
          >
            Baujahr 1998
          </div>
        </Html>
      </Float>

      <Float floatIntensity={1.8} speed={1.8}>
        <Html position={[-1.2, 1.8, 1]} center distanceFactor={8}>
          <div
            className="whitespace-nowrap rounded-full border px-3 py-1 text-[10px] font-medium tracking-wider backdrop-blur-sm"
            style={{ borderColor: 'rgba(140,188,148,0.6)', backgroundColor: 'rgba(255,255,255,0.92)', color: '#181b31' }}
          >
            DEKRA-zertifiziert
          </div>
        </Html>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [4, 2.5, 5], fov: 45 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.75} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
          <directionalLight position={[-3, 3, -3]} intensity={0.4} color="#8CBC94" />
          <pointLight position={[0, 0, 3]} intensity={0.25} color="#8CBC94" distance={10} />
          <CameraRig mx={mouse.x} my={mouse.y} />
          <House />
        </Suspense>
      </Canvas>
    </div>
  );
}
