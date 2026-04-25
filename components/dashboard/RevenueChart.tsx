'use client';

import { revenueChartData } from '@/data/dashboard';
import { motion } from 'framer-motion';
import { MoreHorizontal, TrendingUp } from 'lucide-react';

interface RevenueChartProps {
  data?: any[];
}

export function RevenueChart({ data }: RevenueChartProps) {
  // Calculate path based on data
  const generatePath = () => {
    if (!data || data.length === 0) return "M0,250 L800,250"; // Flat line if no data

    const width = 800;
    const height = 300;
    const padding = 50;
    const chartHeight = height - padding * 2;
    
    // Find max value for scaling
    const maxValue = Math.max(...data.map(d => d.total)) || 1000;
    
    const points = data.map((d, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - padding - (d.total / maxValue) * chartHeight;
      return { x, y, value: d.total };
    });

    // Generate smooth curve
    if (points.length === 1) {
      return `M0,${points[0].y} L${width},${points[0].y}`;
    }

    let d = `M${points[0].x},${points[0].y}`;
    
    for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        
        // Simple smoothing using bezier control points
        const cp1x = p0.x + (p1.x - p0.x) / 3;
        const cp1y = p0.y;
        const cp2x = p1.x - (p1.x - p0.x) / 3;
        const cp2y = p1.y;
        
        d += ` C${cp1x},${cp1y} ${cp2x},${cp2y} ${p1.x},${p1.y}`;
    }

    return { path: d, points };
  };

  const { path: linePath, points } = typeof generatePath() === 'string' ? { path: generatePath() as string, points: [] } : generatePath() as { path: string, points: any[] };
  const areaPath = `${linePath} L800,300 L0,300 Z`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="lg:col-span-2 bg-[rgba(255,255,255,0.02)] border border-[var(--border)] p-8 flex flex-col relative overflow-hidden group"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)] opacity-[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-[var(--gold)] opacity-[0.01] blur-2xl" />

      <div className="flex items-start justify-between mb-8 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-[var(--gold)]" />
            <h2 className="text-xl font-bebas tracking-widest text-[var(--text)] uppercase">
              Revenue_Trajectory
            </h2>
          </div>
          <p className="text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-widest opacity-70">
            Monthly Recurring Revenue Metrics // Sector: Financial_Intelligence
          </p>
        </div>
        <button className="text-[var(--text-muted)] hover:text-[var(--gold)] transition-colors p-1 border border-transparent hover:border-[var(--border)]">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 min-h-[300px] w-full relative">
        {/* SVG Chart */}
        <svg
          className="w-full h-full"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="revenue-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
            </linearGradient>
            
            <pattern id="chart-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(212,175,55,0.05)" strokeWidth="0.5"/>
            </pattern>
          </defs>

          {/* Grid Background */}
          <rect width="800" height="300" fill="url(#chart-grid)" />

          {/* Horizontal Grid Lines */}
          {[50, 150, 250].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="800"
              y2={y}
              stroke="rgba(212,175,55,0.1)"
              strokeWidth="0.5"
              strokeDasharray="10 10"
            />
          ))}

          {/* Chart Area */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d={areaPath}
            fill="url(#revenue-gradient)"
          />

          {/* Chart Line */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d={linePath}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {points.map((point, i) => (
            <motion.g 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <circle
                cx={point.x}
                cy={point.y}
                r="3"
                fill="#D4AF37"
              />
              <circle
                cx={point.x}
                cy={point.y}
                r="6"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
                opacity="0.3"
              />
            </motion.g>
          ))}
        </svg>
      </div>

      <div className="flex justify-between mt-6 px-4 py-2 border-t border-[var(--border)] text-[10px] font-mono-dm text-[var(--gold-dim)] uppercase tracking-[0.3em] bg-[rgba(212,175,55,0.02)]">
        {data && data.length > 0 
          ? data.map((d: any) => <span key={d.name}>{d.name}</span>)
          : revenueChartData.labels.map((month) => (
              <span key={month}>{month}</span>
            ))
        }
      </div>
    </motion.div>
  );
}
