
/**
 * Advanced Hero Graphic for Autosensy
 * Represents automated sensing, data flow, and connectivity.
 */
export const HeroGraphic = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
      <linearGradient id="grid-grad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
        <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.15" />
        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
      </linearGradient>
      <filter id="glow-soft">
        <feGaussianBlur stdDeviation="6" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="pulse-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
        <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.8" />
        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
      </linearGradient>
    </defs>
    
    {/* Background Grid */}
    <path d="M0 300 H 800 M 400 0 V 600" stroke="url(#grid-grad)" strokeWidth="1" />
    <circle cx="400" cy="300" r="180" stroke="var(--border)" strokeWidth="1" opacity="0.2" strokeDasharray="4 4" />
    <circle cx="400" cy="300" r="280" stroke="var(--border)" strokeWidth="1" opacity="0.1" />

    {/* Central Tech Element */}
    <g filter="url(#glow-soft)">
      <circle cx="400" cy="300" r="60" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.8" fill="var(--accent-soft)" />
      
      {/* Scanning Radar Effect */}
      <path d="M400 300 L 550 150" stroke="url(#pulse-grad)" strokeWidth="2" strokeLinecap="round" opacity="0.5">
        <animateTransform attributeName="transform" type="rotate" from="0 400 300" to="360 400 300" dur="8s" repeatCount="indefinite" />
      </path>

      {/* Rotating Rings */}
      <g>
        <animateTransform attributeName="transform" type="rotate" from="360 400 300" to="0 400 300" dur="20s" repeatCount="indefinite" />
        <path d="M 400 200 A 100 100 0 0 1 500 300" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.7" />
        <path d="M 400 400 A 100 100 0 0 1 300 300" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.7" />
      </g>
    </g>

    {/* Floating Data Nodes */}
    <circle cx="250" cy="250" r="4" fill="var(--accent)" opacity="0.8">
      <animate attributeName="cy" values="250;240;250" dur="4s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="0.4;1;0.4" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="550" cy="350" r="3" fill="var(--accent)" opacity="0.6">
      <animate attributeName="cy" values="350;360;350" dur="5s" repeatCount="indefinite" />
    </circle>
  </svg>
);

/**
 * Sensor/Automation Icon
 */
export const SensorIcon = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 64 64" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
      <filter id="icon-glow">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    <rect x="14" y="14" width="36" height="36" rx="10" stroke="var(--accent)" strokeWidth="2" strokeOpacity="0.5" />
    <circle cx="32" cy="32" r="8" stroke="var(--accent)" strokeWidth="2" filter="url(#icon-glow)" />
    <path d="M32 10V14 M32 50V54 M10 32H14 M50 32H54" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
    <circle cx="32" cy="32" r="3" fill="var(--accent)" />
  </svg>
);

/**
 * Ad Flow / Marketing Graphic
 * Visualizes a funnel or sequence of steps.
 */
export const AdFlowGraphic = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <defs>
      <linearGradient id="flow-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.1" />
        <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    
    {/* Connecting Line */}
    <path d="M 100 300 C 250 300, 250 150, 400 150 C 550 150, 550 450, 700 450" stroke="url(#flow-line)" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10">
      <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" repeatCount="indefinite" />
    </path>

    {/* Nodes */}
    {[100, 400, 700].map((x, i) => (
      <g key={i}>
        <circle cx={x} cy={i === 1 ? 150 : (i === 2 ? 450 : 300)} r="40" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
        <circle cx={x} cy={i === 1 ? 150 : (i === 2 ? 450 : 300)} r="15" fill="var(--accent-soft)" />
      </g>
    ))}

    {/* Floating Elements */}
    <rect x="350" y="100" width="100" height="100" rx="20" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
    <rect x="650" y="400" width="100" height="100" rx="20" stroke="var(--accent)" strokeWidth="1" opacity="0.3" />
  </svg>
);

/**
 * Integrations Network Graphic
 * Visualizes a central hub connecting to external nodes.
 */
export const IntegrationsGraphic = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    {/* Central Hub */}
    <circle cx="400" cy="300" r="80" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
    <circle cx="400" cy="300" r="60" fill="var(--accent-soft)" opacity="0.5">
      <animate attributeName="r" values="60;70;60" dur="4s" repeatCount="indefinite" />
    </circle>

    {/* Satellites */}
    {[0, 60, 120, 180, 240, 300].map((deg, i) => {
      const rad = deg * (Math.PI / 180);
      const x = 400 + Math.cos(rad) * 220;
      const y = 300 + Math.sin(rad) * 220;
      return (
        <g key={i}>
          <line x1="400" y1="300" x2={x} y2={y} stroke="var(--border)" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx={x} cy={y} r="30" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
          <circle cx={x} cy={y} r="10" fill="var(--accent)" opacity="0.8" />
        </g>
      );
    })}
  </svg>
);

/**
 * Dashboard / Analytics Graphic
 * Visualizes charts and data.
 */
export const DashboardGraphic = ({ className = "w-full h-full" }) => (
  <svg viewBox="0 0 800 600" className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
    <rect x="100" y="100" width="600" height="400" rx="20" fill="var(--surface)" stroke="var(--border)" strokeWidth="2" />
    
    {/* Header */}
    <rect x="140" y="140" width="100" height="20" rx="10" fill="var(--accent)" opacity="0.3" />
    <rect x="260" y="140" width="60" height="20" rx="10" fill="var(--border)" opacity="0.5" />

    {/* Bar Chart */}
    <g transform="translate(140, 400) scale(1, -1)">
      {[50, 120, 80, 160, 100, 200, 140].map((h, i) => (
        <rect key={i} x={i * 70} y="0" width="40" height={h} rx="4" fill="var(--accent)" opacity={0.4 + (i * 0.1)}>
          <animate attributeName="height" values={`${h};${h * 0.8};${h}`} dur={`${2 + i}s`} repeatCount="indefinite" />
        </rect>
      ))}
    </g>

    {/* Line Chart Overlay */}
    <polyline points="160,350 230,280 300,320 370,240 440,300 510,200 580,260" fill="none" stroke="var(--text)" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
  </svg>
);