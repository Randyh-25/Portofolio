import React, { useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { gsap } from 'gsap';

interface PlexusProps {
  isDarkMode: boolean;
  count?: number;
  maxDistance?: number;
}

const Plexus: React.FC<PlexusProps> = ({ isDarkMode, count = 150, maxDistance = 25 }) => {
  const pointsRef = useRef<THREE.Points>(null!);
  const linesRef = useRef<THREE.LineSegments>(null!);

  // Buat titik-titik awal secara acak
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const time = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.005 + Math.random() / 200;
      const x = (Math.random() - 0.5) * 150;
      const y = (Math.random() - 0.5) * 150;
      const z = (Math.random() - 0.5) * 150;

      temp.push({ time, factor, speed, x, y, z });
    }
    return temp;
  }, [count]);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
    let particleIndex = 0;

    // Update posisi setiap titik
    particles.forEach((particle, i) => {
      let { factor, speed, x, y, z } = particle;
      const t = (particle.time += speed);
      
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.updateMatrix();
      
      positions[particleIndex++] = dummy.position.x;
      positions[particleIndex++] = dummy.position.y;
      positions[particleIndex++] = dummy.position.z;
    });
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Update garis antar titik
    const linePositions = linesRef.current.geometry.attributes.position.array as Float32Array;
    let lineIndex = 0;
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const p1_x = positions[i * 3];
        const p1_y = positions[i * 3 + 1];
        const p1_z = positions[i * 3 + 2];
        const p2_x = positions[j * 3];
        const p2_y = positions[j * 3 + 1];
        const p2_z = positions[j * 3 + 2];

        const dist = Math.sqrt((p1_x - p2_x)**2 + (p1_y - p2_y)**2 + (p1_z - p2_z)**2);

        if (dist < maxDistance) {
          linePositions[lineIndex++] = p1_x;
          linePositions[lineIndex++] = p1_y;
          linePositions[lineIndex++] = p1_z;
          linePositions[lineIndex++] = p2_x;
          linePositions[lineIndex++] = p2_y;
          linePositions[lineIndex++] = p2_z;
        }
      }
    }
    // Potong array untuk hanya merender garis yang aktif
    linesRef.current.geometry.setDrawRange(0, lineIndex / 3);
    linesRef.current.geometry.attributes.position.needsUpdate = true;
  });

  // Material yang berubah sesuai mode
  const pointMaterial = useMemo(() => new THREE.PointsMaterial({
    color: isDarkMode ? '#00ffff' : '#3b82f6', // Dark: Cyan, Light: Blue-500
    size: 1.5,
    blending: THREE.AdditiveBlending,
    transparent: true,
    sizeAttenuation: true,
    opacity: isDarkMode ? 1.0 : 0.8,
  }), [isDarkMode]);

  const lineMaterial = useMemo(() => new THREE.LineBasicMaterial({
    color: isDarkMode ? '#ffffff' : '#94a3b8', // Dark: White, Light: Slate-400
    transparent: true,
    opacity: isDarkMode ? 0.25 : 0.35,
    blending: isDarkMode ? THREE.AdditiveBlending : THREE.NormalBlending,
  }), [isDarkMode]);

  return (
    <>
      <points ref={pointsRef} material={pointMaterial}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={new Float32Array(count * 3)}
            itemSize={3}
          />
        </bufferGeometry>
      </points>
      <lineSegments ref={linesRef} material={lineMaterial}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={(count * count) / 2} // Alokasi memori maksimum
            array={new Float32Array((count * count * 3) / 2)}
            itemSize={3}
          />
        </bufferGeometry>
      </lineSegments>
    </>
  );
};

interface ThreeBackgroundProps {
  isDarkMode: boolean;
}

const ThreeBackground: React.FC<ThreeBackgroundProps> = ({ isDarkMode }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const cameraRef = useRef<THREE.PerspectiveCamera>();
  const particlesRef = useRef<THREE.Points>();
  const spheresRef = useRef<THREE.Group>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Store references
    sceneRef.current = scene;
    rendererRef.current = renderer;
    cameraRef.current = camera;

    // Camera position
    camera.position.z = 5;

    // Particle system
    const particleCount = isDarkMode ? 1000 : 800;
    const particles = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particles[i] = (Math.random() - 0.5) * 20;
      particles[i + 1] = (Math.random() - 0.5) * 20;
      particles[i + 2] = (Math.random() - 0.5) * 20;

      const color = new THREE.Color();
      if (isDarkMode) {
        color.setHSL(0.6 + Math.random() * 0.4, 0.8, 0.5);
      } else {
        color.setHSL(0.55 + Math.random() * 0.3, 0.6, 0.7);
      }
      particleColors[i] = color.r;
      particleColors[i + 1] = color.g;
      particleColors[i + 2] = color.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particles, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: isDarkMode ? 0.05 : 0.03,
      vertexColors: true,
      transparent: true,
      opacity: isDarkMode ? 0.8 : 0.6,
      blending: THREE.AdditiveBlending
    });

    const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particleSystem);
    particlesRef.current = particleSystem;

    // Floating spheres
    const sphereGroup = new THREE.Group();
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    
    for (let i = 0; i < 5; i++) {
      const material = new THREE.MeshPhongMaterial({
        color: isDarkMode 
          ? new THREE.Color().setHSL(0.6 + Math.random() * 0.4, 0.8, 0.5)
          : new THREE.Color().setHSL(0.55 + Math.random() * 0.3, 0.6, 0.7),
        transparent: true,
        opacity: isDarkMode ? 0.3 : 0.2,
        shininess: 100
      });
      
      const sphere = new THREE.Mesh(sphereGeometry, material);
      sphere.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      );
      
      sphereGroup.add(sphere);
    }
    
    scene.add(sphereGroup);
    spheresRef.current = sphereGroup;

    // Lighting
    const ambientLight = new THREE.AmbientLight(
      isDarkMode ? 0x404040 : 0x808080, 
      isDarkMode ? 0.4 : 0.6
    );
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      isDarkMode ? 0x00ffff : 0x4a90e2, 
      isDarkMode ? 1 : 0.8, 
      100
    );
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(
      isDarkMode ? 0xff00ff : 0x9b59b6, 
      isDarkMode ? 0.8 : 0.6, 
      100
    );
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate particles
      if (particlesRef.current) {
        particlesRef.current.rotation.y += 0.001;
        particlesRef.current.rotation.x += 0.0005;
      }

      // Animate spheres
      if (spheresRef.current) {
        spheresRef.current.rotation.y += 0.005;
        spheresRef.current.children.forEach((sphere, index) => {
          sphere.rotation.x += 0.01 * (index + 1);
          sphere.rotation.y += 0.008 * (index + 1);
          sphere.position.y += Math.sin(Date.now() * 0.001 + index) * 0.001;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Mouse parallax effect
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      gsap.to(camera.position, {
        duration: 2,
        x: x * 0.5,
        y: y * 0.3
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 75], fov: 75 }}>
        <Plexus isDarkMode={isDarkMode} />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;