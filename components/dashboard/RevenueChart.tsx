'use client';

import { revenueChartData } from '@/data/dashboard';
import { motion } from 'framer-motion';
import { MoreHorizontal } from 'lucide-react';

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
      className="lg:col-span-2 bg-white dark:bg-[#1e293b] rounded-xl border border-gray-100 dark:border-700/50 shadow-sm p-6 flex flex-col"
    >
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            Revenue Growth
          </h2>
          <p className="text-sm text-gray-500 dark:text-slate-400">
            Monthly Recurring Revenue (MRR) over last {data ? data.length : 6} months
          </p>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors p-1 hover:bg-gray-700 rounded">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 min-h-[250px] w-full relative">
        {/* SVG Chart */}
        <svg
          className="w-full h-full"
          viewBox="0 0 800 300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0bda62" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#0bda62" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Grid Lines */}
          <line
            x1="0"
            y1="250"
            x2="800"
            y2="250"
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="0"
            y1="150"
            x2="800"
            y2="150"
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <line
            x1="0"
            y1="50"
            x2="800"
            y2="50"
            stroke="#374151"
            strokeWidth="1"
            strokeDasharray="4 4"
          />

          {/* Chart Area */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d={areaPath}
            fill="url(#gradient)"
          />

          {/* Chart Line */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            d={linePath}
            fill="none"
            stroke="#0bda62"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {points.map((point, i) => (
            <motion.circle
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#0bda62"
              className="dark:stroke-[#1e293b] stroke-white"
              strokeWidth="2"
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-between mt-4 px-2 text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
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
