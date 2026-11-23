"use client";

import { Suspense, useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { person } from "@/data/portfolio";

/**
 * Interactive 3D scene — no external models, so it loads fast
 * and works offline. Light theme: teal shapes on a light grey
 * canvas. The torus knot reacts to the mouse, and the particle
 * field slowly rotates. Move your pointer over the hero to see it respond.
 */
function Scene() {
  const knotRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 900;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.25;
      knotRef.current.rotation.y = t * 0.35;
      knotRef.current.rotation.z = state.pointer.x * 0.3;
      knotRef.current.position.y = Math.sin(t * 0.8) * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03;
      particlesRef.current.rotation.x = state.pointer.y * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.9} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <pointLight position={[-5, -3, -3]} intensity={0.6} color="#0f766e" />

      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particlePositions, 3]} />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#0f766e" transparent opacity={0.55} sizeAttenuation />
      </points>

      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh ref={knotRef} position={[0, 0, 0]}>
          <torusKnotGeometry args={[0.9, 0.28, 160, 32]} />
          <MeshDistortMaterial color="#0f766e" distort={0.25} speed={2} metalness={0.2} roughness={0.4} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[-2.6, 1.2, -1]}>
          <icosahedronGeometry args={[0.45, 0]} />
          <meshStandardMaterial color="#0284c7" wireframe />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={1} floatIntensity={1}>
        <mesh position={[2.7, -1.1, -0.5]}>
          <octahedronGeometry args={[0.5, 0]} />
          <meshStandardMaterial color="#475569" wireframe />
        </mesh>
      </Float>
    </>
  );
}

const HeroCanvas = dynamic(
  () =>
    Promise.resolve(function HeroCanvasInner() {
      return (
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 50 }}
          className="!absolute inset-0"
          style={{ background: "#e5e7eb" }}
          aria-hidden="true"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      );
    }),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-[#e5e7eb]" /> }
);

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#e5e7eb] pt-24 pb-16 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <HeroCanvas />
      </div>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#e5e7eb]/30 to-[#e5e7eb]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-700/30 bg-teal-50 px-3 py-1 text-xs font-semibold tracking-wide text-teal-800 sm:text-sm">
            ● Available for WordPress &amp; automation work
          </p>
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl">
            {person.name}
          </h1>
          <p className="mt-4 text-xl font-semibold text-teal-700 sm:text-2xl">
            {person.title}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            {person.tagline}
          </p>
          <p className="mt-2 text-sm text-zinc-500">
            📍 {person.location} · HashTurn since August 2022
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-lg sm:text-base"
            >
              View my work
            </a>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-teal-600 hover:shadow-lg sm:text-base"
            >
              Connect on LinkedIn ↗
            </a>
            <a
              href="#contact"
              className="rounded-full border border-zinc-300 bg-white/70 px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:shadow-lg sm:text-base"
            >
              Get in touch
            </a>
          </div>

          <p className="mt-8 text-xs tracking-wide text-zinc-500">
            Move your mouse over the 3D shapes — they react. This page adapts to phone, tablet &amp; desktop.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
