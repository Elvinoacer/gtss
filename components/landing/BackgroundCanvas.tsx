"use client";

import { useEffect, useRef } from "react";

export function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const GOLD = [201, 160, 69];
    const CYAN = [0, 216, 240];

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 1.2 + 0.3,
      color: Math.random() > 0.7 ? CYAN : GOLD,
      alpha: Math.random() * 0.4 + 0.1,
    }));

    // Glowing orbs
    const orbs = [
      { x: 0.15, y: 0.3, r: 400, color: GOLD, alpha: 0.04 },
      { x: 0.85, y: 0.6, r: 350, color: CYAN, alpha: 0.03 },
      { x: 0.5, y: 0.9, r: 300, color: GOLD, alpha: 0.025 },
    ];

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Orbs
      orbs.forEach((orb) => {
        const grd = ctx.createRadialGradient(
          orb.x * canvas.width,
          orb.y * canvas.height,
          0,
          orb.x * canvas.width,
          orb.y * canvas.height,
          orb.r
        );
        grd.addColorStop(
          0,
          `rgba(${orb.color[0]},${orb.color[1]},${orb.color[2]},${orb.alpha})`
        );
        grd.addColorStop(1, "transparent");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Particles & connections
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color[0]},${p.color[1]},${p.color[2]},${p.alpha})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x,
            dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            const a = (1 - dist / 120) * 0.06;
            ctx.strokeStyle = `rgba(${GOLD[0]},${GOLD[1]},${GOLD[2]},${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(drawFrame);
    };

    drawFrame();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
