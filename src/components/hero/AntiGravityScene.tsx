"use client";

import { useRef, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import { Float, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

// Individual Floating Icon
function FloatingIcon({
  position,
  color,
  label,
  scale = 1
}: {
  position: [number, number, number];
  color: string;
  label: string;
  scale?: number;
}) {
  const rigidRef = useRef<any>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (!rigidRef.current || !meshRef.current) return;

    // Cursor proximity impulse
    const mx = (mouse.x * viewport.width) / 2;
    const my = (mouse.y * viewport.height) / 2;
    const pos = rigidRef.current.translation();
    const dx = pos.x - mx;
    const dy = pos.y - my;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 2.5) {
      const strength = (2.5 - dist) * 0.002;
      rigidRef.current.applyImpulse(
        { x: dx * strength, y: dy * strength, z: 0 },
        true
      );
    }

    // Gentle drift back toward origin
    rigidRef.current.applyImpulse(
      { x: -pos.x * 0.0003, y: -pos.y * 0.0003, z: -pos.z * 0.001 },
      true
    );

    // Slow rotation
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x += 0.002;
    }
  });

  return (
    <RigidBody
      ref={rigidRef}
      position={position}
      linearDamping={2.5}
      angularDamping={1.5}
      restitution={0.3}
      colliders="ball"
    >
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={meshRef} scale={scale} castShadow>
          <octahedronGeometry args={[0.55, 0]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.8}
            wireframe={false}
          />
        </mesh>
        {/* Glow ring */}
        <mesh scale={scale * 1.3}>
          <torusGeometry args={[0.55, 0.03, 16, 60]} />
          <meshBasicMaterial color={color} transparent opacity={0.4} />
        </mesh>
      </Float>
    </RigidBody>
  );
}

// Particle star field using Points
function ParticleStars() {
  const ref = useRef<THREE.Points>(null);
  const count = 300;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 30;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5;
  }

  useFrame((_, dt) => {
    if (ref.current) {
      ref.current.rotation.y += dt * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#6090ff" transparent opacity={0.7} sizeAttenuation />
    </points>
  );
}

// Scene Content
function Scene() {
  return (
    <Suspense fallback={null}>
      <Physics gravity={[0, 0, 0]}>
        {/* Floating Icons */}
        <FloatingIcon position={[-3, 2, 0]} color="#4F46E5" label="Marketing" />
        <FloatingIcon position={[3, -1, 0]} color="#0EA5E9" label="Content" />
        <FloatingIcon position={[-2, -2, 2]} color="#6366F1" label="Strategy" />
        <FloatingIcon position={[4, 2, -1]} color="#2563EB" label="Design" />
        <FloatingIcon position={[0, 3, 1]} color="#38BDF8" label="Production" />

      </Physics>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
    </Suspense>
  );
}

export function AntiGravityScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ width: "100%", height: "100%" }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 1.5]}
    >
      <Stars radius={80} depth={30} count={800} factor={3} saturation={0.5} fade speed={0.5} />
      <Scene />
    </Canvas>
  );
}

export default AntiGravityScene;
