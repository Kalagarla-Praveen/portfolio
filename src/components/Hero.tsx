import React, { useRef, useEffect, useState } from 'react';
import { ChevronDown, Sparkles, Code, Palette, Zap } from 'lucide-react';
import * as THREE from 'three';

const Hero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameId = useRef<number>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Create multiple geometric shapes
    const group = new THREE.Group();

    // Central rotating torus
    const torusGeometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0xff6b6b,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    group.add(torus);

    // Dodecahedron
    const dodecahedronGeometry = new THREE.DodecahedronGeometry(0.8);
    const dodecahedronMaterial = new THREE.MeshPhongMaterial({
      color: 0x4ecdc4,
      shininess: 100,
      transparent: true,
      opacity: 0.7,
    });
    const dodecahedron = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);
    dodecahedron.position.set(2, 0, 0);
    group.add(dodecahedron);

    // Octahedron
    const octahedronGeometry = new THREE.OctahedronGeometry(0.6);
    const octahedronMaterial = new THREE.MeshPhongMaterial({
      color: 0xffe66d,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });
    const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial);
    octahedron.position.set(-2, 0, 0);
    group.add(octahedron);

    // Wireframe spheres
    for (let i = 0; i < 8; i++) {
      const sphereGeometry = new THREE.SphereGeometry(0.15, 8, 6);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: [0xff9ff3, 0x54a0ff, 0x5f27cd, 0x00d2d3, 0xff9f43, 0x10ac84, 0xee5a24, 0x0abde3][i],
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      
      const angle = (i / 8) * Math.PI * 2;
      const radius = 3;
      sphere.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 0.5) * 1,
        Math.sin(angle) * radius
      );
      
      group.add(sphere);
    }

    // Floating cubes
    for (let i = 0; i < 12; i++) {
      const cubeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const cubeMaterial = new THREE.MeshPhongMaterial({
        color: Math.random() * 0xffffff,
        transparent: true,
        opacity: 0.5,
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      
      cube.position.set(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 10
      );
      
      group.add(cube);
    }

    scene.add(group);

    // Enhanced lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xff6b6b, 0.8);
    directionalLight1.position.set(5, 5, 5);
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0x4ecdc4, 0.6);
    directionalLight2.position.set(-5, -5, -5);
    scene.add(directionalLight2);

    const pointLight = new THREE.PointLight(0xffe66d, 1, 100);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    camera.position.z = 6;

    // Animation
    const animate = () => {
      frameId.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Rotate main shapes
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.02;
      
      dodecahedron.rotation.x += 0.015;
      dodecahedron.rotation.z += 0.01;
      
      octahedron.rotation.y += 0.02;
      octahedron.rotation.z += 0.015;

      // Animate orbiting spheres
      group.children.slice(3, 11).forEach((sphere, index) => {
        const angle = (index / 8) * Math.PI * 2 + time * 0.5;
        const radius = 3 + Math.sin(time + index) * 0.5;
        sphere.position.set(
          Math.cos(angle) * radius,
          Math.sin(angle * 0.5 + time) * 1.5,
          Math.sin(angle) * radius
        );
        sphere.rotation.x += 0.02;
        sphere.rotation.y += 0.03;
      });

      // Animate floating cubes
      group.children.slice(11).forEach((cube, index) => {
        cube.rotation.x += 0.01 + index * 0.001;
        cube.rotation.y += 0.015 + index * 0.001;
        cube.position.y += Math.sin(time + index) * 0.01;
      });

      // Rotate entire group
      group.rotation.y += 0.005;

      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    // Handle resize
    const handleResize = () => {
      if (mountRef.current && camera && renderer) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roles = ['Full Stack Developer','Frontend Developer','Backend Developer', 'ML Engineer'];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-right">
            
            
            <div className="space-y-4">
              <h1 className="text-5xl text-start md:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Hi, I'm 
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-400 via-orange-400 to-red-400 bg-clip-text text-transparent animate-rainbow bg-400% bg-gradient-rainbow">
                 Praveen
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl md:text-3xl font-semibold text-white/80">
                  {roles[currentRole]}
                </span>
              </div>
            </div>
            
            <p className="text-xl   text-start text-white/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Crafting digital experiences that blend creativity with cutting-edge technology. 
              Passionate about creating interactive, beautiful, and functional solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-full font-semibold hover:from-primary-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 animate-glow"
              >
                <span className="flex items-center space-x-2">
                  <Code className="h-5 w-5 group-hover:animate-bounce" />
                  <span>View My Work</span>
                </span>
              </button>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 border-2 border-accent-400 text-accent-400 rounded-full font-semibold hover:bg-accent-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 group-hover:animate-bounce" />
                  <span>Let's Connect</span>
                </span>
              </button>
            </div>

            
          </div>
          
          <div className="relative animate-slide-left">
            <div 
              ref={mountRef} 
              className={`w-full h-96 lg:h-[600px] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ minHeight: '400px' }}
            />
            {!isLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-accent-400"></div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-accent-400 hover:text-accent-300 transition-colors"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;