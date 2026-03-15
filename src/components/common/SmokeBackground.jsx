import React, { useRef, useEffect } from 'react';

const SmokeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let frameId;
    let time = 0;

    // --- PERLIN NOISE (Unchanged) ---
    const perm = new Uint8Array(512);
    const p = new Uint8Array(256);
    for (let i = 0; i < 256; i++) p[i] = i;
    for (let i = 255; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      [p[i], p[r]] = [p[r], p[i]];
    }
    for (let i = 0; i < 512; i++) perm[i] = p[i & 255];
    const fade = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const lerp = (t, a, b) => a + t * (b - a);
    const grad = (hash, x, y, z) => {
      const h = hash & 15;
      const u = h < 8 ? x : y;
      const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
      return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    };
    const noise = (x, y, z) => {
      const X = Math.floor(x) & 255;
      const Y = Math.floor(y) & 255;
      const Z = Math.floor(z) & 255;
      x -= Math.floor(x);
      y -= Math.floor(y);
      z -= Math.floor(z);
      const u = fade(x);
      const v = fade(y);
      const w = fade(z);
      const A = perm[X] + Y, AA = perm[A] + Z, AB = perm[A + 1] + Z;
      const B = perm[X + 1] + Y, BA = perm[B] + Z, BB = perm[B + 1] + Z;
      return lerp(w,
        lerp(v, lerp(u, grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z)),
               lerp(u, grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z))),
        lerp(v, lerp(u, grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1)),
               lerp(u, grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1)))
      );
    };

    // --- RESIZE ---
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // --- ANIMATION LOOP ---
    const loop = () => {
      // 1. Pure White Background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);

      time += 0.0025; 
      const lines = 10; // Fewer lines for a cleaner ribbon look
      
      for (let j = 0; j < lines; j++) {
        ctx.beginPath();
        const spacing = 50; 
        const lineOffset = (j - lines / 2) * spacing; 
        const noiseOffset = j * 8; 
        
        // Calculate opacity: Center ribbons are stronger
        const distanceFromCenter = Math.abs(j - lines / 2);
        const opacity = 0.12 - (distanceFromCenter * 0.02); 
        const validOpacity = Math.max(0.02, opacity); 

        // 2. ORANGE STROKE (No Fill)
        ctx.strokeStyle = `rgba(255, 107, 0, ${validOpacity})`;
        ctx.lineWidth = 4; // Thicker lines = Ribbon effect

        for (let x = 0; x <= width; x += 10) { 
            // 3. WIDER WAVES
            // x * 0.001 makes the wave much longer (less bumpy)
            const noiseVal = noise(x * 0.001, time + noiseOffset * 0.05, 0); 
            
            // Amplitude
            const y = (height / 2) + lineOffset + (noiseVal * 150); 

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        // REMOVED ctx.fill() entirely to prevent "mountain" shapes
      }

      frameId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}
    />
  );
};

export default SmokeBackground;