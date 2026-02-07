import { useEffect, useRef } from 'react';
import './Orb.css';

export default function Orb({
  hue = 0,
  hoverIntensity = 0.2,
  rotateOnHover = true,
  forceHoverState = false,
  backgroundColor = '#000000'
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, isHovering: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let time = 0;
    let rotation = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      
      mouseRef.current.x = (x - centerX) / centerX;
      mouseRef.current.y = (y - centerY) / centerY;
      mouseRef.current.isHovering = distance < rect.width / 3;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isHovering = false;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.3;

      // Create gradient
      const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, maxRadius);
      
      const hue1 = (hue + time * 50) % 360;
      const hue2 = (hue1 + 120) % 360;
      const hue3 = (hue1 + 240) % 360;

      gradient.addColorStop(0, `hsla(${hue1}, 70%, 60%, 0.8)`);
      gradient.addColorStop(0.5, `hsla(${hue2}, 70%, 50%, 0.6)`);
      gradient.addColorStop(1, `hsla(${hue3}, 70%, 40%, 0.2)`);

      // Draw main orb
      ctx.save();
      ctx.translate(centerX, centerY);
      
      if (rotateOnHover && mouseRef.current.isHovering) {
        rotation += 0.02;
      }
      
      ctx.rotate(rotation);
      
      // Apply mouse influence
      const mouseInfluence = mouseRef.current.isHovering ? hoverIntensity : 0;
      ctx.translate(
        mouseRef.current.x * 20 * mouseInfluence,
        mouseRef.current.y * 20 * mouseInfluence
      );

      // Draw multiple layers for depth
      for (let i = 3; i > 0; i--) {
        ctx.globalAlpha = 0.3 / i;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, maxRadius * (1 + i * 0.1), 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw core
      ctx.globalAlpha = 1;
      const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius * 0.3);
      coreGradient.addColorStop(0, `hsla(${hue1}, 80%, 70%, 1)`);
      coreGradient.addColorStop(1, `hsla(${hue1}, 80%, 50%, 0.5)`);
      
      ctx.fillStyle = coreGradient;
      ctx.beginPath();
      ctx.arc(0, 0, maxRadius * 0.3, 0, Math.PI * 2);
      ctx.fill();

      // Add glow effect
      ctx.shadowBlur = 30;
      ctx.shadowColor = `hsla(${hue1}, 70%, 60%, 0.8)`;
      ctx.fillStyle = `hsla(${hue1}, 70%, 60%, 0.3)`;
      ctx.beginPath();
      ctx.arc(0, 0, maxRadius, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      time += 0.01;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hue, hoverIntensity, rotateOnHover, forceHoverState, backgroundColor]);

  return (
    <div ref={containerRef} className="orb-container">
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
