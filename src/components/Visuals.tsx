export function NetworkVisual({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none">
      {/* Central node */}
      <circle cx="200" cy="150" r="24" fill="#6366f1" fillOpacity="0.15" stroke="#6366f1" strokeWidth="1.5" />
      <circle cx="200" cy="150" r="8" fill="#6366f1" fillOpacity="0.6" />

      {/* Surrounding analyst nodes */}
      <circle cx="100" cy="80" r="18" fill="#818cf8" fillOpacity="0.1" stroke="#818cf8" strokeWidth="1" />
      <circle cx="100" cy="80" r="5" fill="#818cf8" fillOpacity="0.5" />

      <circle cx="300" cy="80" r="18" fill="#818cf8" fillOpacity="0.1" stroke="#818cf8" strokeWidth="1" />
      <circle cx="300" cy="80" r="5" fill="#818cf8" fillOpacity="0.5" />

      <circle cx="80" cy="200" r="18" fill="#818cf8" fillOpacity="0.1" stroke="#818cf8" strokeWidth="1" />
      <circle cx="80" cy="200" r="5" fill="#818cf8" fillOpacity="0.5" />

      <circle cx="320" cy="200" r="18" fill="#818cf8" fillOpacity="0.1" stroke="#818cf8" strokeWidth="1" />
      <circle cx="320" cy="200" r="5" fill="#818cf8" fillOpacity="0.5" />

      <circle cx="200" cy="260" r="18" fill="#818cf8" fillOpacity="0.1" stroke="#818cf8" strokeWidth="1" />
      <circle cx="200" cy="260" r="5" fill="#818cf8" fillOpacity="0.5" />

      {/* Connections */}
      <line x1="200" y1="150" x2="100" y2="80" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="150" x2="300" y2="80" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="150" x2="80" y2="200" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="150" x2="320" y2="200" stroke="#6366f1" strokeWidth="1" opacity="0.3" />
      <line x1="200" y1="150" x2="200" y2="260" stroke="#6366f1" strokeWidth="1" opacity="0.3" />

      {/* Cross connections */}
      <line x1="100" y1="80" x2="300" y2="80" stroke="#818cf8" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
      <line x1="80" y1="200" x2="320" y2="200" stroke="#818cf8" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
      <line x1="100" y1="80" x2="80" y2="200" stroke="#818cf8" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />
      <line x1="300" y1="80" x2="320" y2="200" stroke="#818cf8" strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" />

      {/* Glow */}
      <circle cx="200" cy="150" r="60" fill="#6366f1" fillOpacity="0.04" />
    </svg>
  );
}

export function LayersVisual({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none">
      {/* Bottom layer - warehouse */}
      <ellipse cx="200" cy="220" rx="150" ry="35" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
      <text x="200" y="224" textAnchor="middle" fill="#52525b" fontSize="11" fontFamily="system-ui">Warehouse</text>

      {/* Middle layer - platforms */}
      <ellipse cx="200" cy="160" rx="150" ry="35" fill="#1e1b4b" fillOpacity="0.4" stroke="#4338ca" strokeWidth="1" opacity="0.5" />
      <text x="200" y="164" textAnchor="middle" fill="#818cf8" fontSize="11" fontFamily="system-ui">Meta · Google · Tracking · BI</text>

      {/* Top layer - YouKnow */}
      <ellipse cx="200" cy="100" rx="150" ry="35" fill="#6366f1" fillOpacity="0.1" stroke="#6366f1" strokeWidth="1.5" />
      <text x="200" y="104" textAnchor="middle" fill="#a5b4fc" fontSize="12" fontWeight="600" fontFamily="system-ui">YouKnow</text>

      {/* Vertical connections */}
      <line x1="80" y1="120" x2="80" y2="200" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />
      <line x1="200" y1="130" x2="200" y2="190" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />
      <line x1="320" y1="120" x2="320" y2="200" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" strokeDasharray="3 3" />

      {/* Arrows going up */}
      <path d="M140 185L200 135L260 185" stroke="#6366f1" strokeWidth="1" opacity="0.2" fill="none" />
    </svg>
  );
}

export function SignalVisual({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none">
      {/* Noisy signal line */}
      <path d="M30 200 L60 180 L80 210 L100 170 L120 195 L140 160 L160 190 L180 140 L200 150 L220 120 L240 155 L260 100 L280 130 L300 90 L320 110 L340 70 L370 60"
        stroke="#3f3f46" strokeWidth="1.5" opacity="0.4" />

      {/* Clean signal */}
      <path d="M30 200 L100 175 L180 145 L260 105 L340 70 L370 60"
        stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />

      {/* Data points on clean signal */}
      <circle cx="100" cy="175" r="4" fill="#6366f1" fillOpacity="0.8" />
      <circle cx="180" cy="145" r="4" fill="#6366f1" fillOpacity="0.8" />
      <circle cx="260" cy="105" r="4" fill="#6366f1" fillOpacity="0.8" />
      <circle cx="340" cy="70" r="4" fill="#6366f1" fillOpacity="0.8" />

      {/* Anomaly highlight */}
      <circle cx="140" cy="160" r="16" stroke="#f59e0b" strokeWidth="1" fill="#f59e0b" fillOpacity="0.05" strokeDasharray="3 2" />
      <circle cx="140" cy="160" r="3" fill="#f59e0b" fillOpacity="0.7" />

      {/* Labels */}
      <text x="140" y="145" textAnchor="middle" fill="#f59e0b" fontSize="9" fontFamily="system-ui" opacity="0.8">anomaly</text>
      <text x="350" y="55" textAnchor="middle" fill="#6366f1" fontSize="9" fontFamily="system-ui" opacity="0.8">signal</text>

      {/* Baseline */}
      <line x1="30" y1="240" x2="370" y2="240" stroke="#27272a" strokeWidth="1" />
    </svg>
  );
}

export function MemoryVisual({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none">
      {/* Timeline */}
      <line x1="40" y1="150" x2="360" y2="150" stroke="#27272a" strokeWidth="2" />

      {/* Time markers */}
      {[80, 140, 200, 260, 320].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy={150} r={6 + i * 2} fill="#6366f1" fillOpacity={0.1 + i * 0.05} stroke="#6366f1" strokeWidth="1" opacity={0.3 + i * 0.15} />
          <circle cx={x} cy={150} r="2" fill="#6366f1" fillOpacity={0.3 + i * 0.15} />
        </g>
      ))}

      {/* Memory bubbles floating above */}
      <rect x="60" y="80" width="80" height="30" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
      <text x="100" y="99" textAnchor="middle" fill="#71717a" fontSize="9" fontFamily="system-ui">tracking issue</text>
      <line x1="100" y1="110" x2="80" y2="144" stroke="#27272a" strokeWidth="0.5" />

      <rect x="155" y="60" width="90" height="30" rx="6" fill="#18181b" stroke="#27272a" strokeWidth="1" />
      <text x="200" y="79" textAnchor="middle" fill="#71717a" fontSize="9" fontFamily="system-ui">product launch</text>
      <line x1="200" y1="90" x2="200" y2="144" stroke="#27272a" strokeWidth="0.5" />

      <rect x="260" y="75" width="90" height="30" rx="6" fill="#18181b" stroke="#4338ca" strokeWidth="1" />
      <text x="305" y="94" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontFamily="system-ui">campaign edit</text>
      <line x1="305" y1="105" x2="320" y2="144" stroke="#4338ca" strokeWidth="0.5" opacity="0.5" />

      {/* Now marker */}
      <circle cx="320" cy="150" r="10" fill="#6366f1" fillOpacity="0.2" stroke="#6366f1" strokeWidth="1.5" />
      <circle cx="320" cy="150" r="3" fill="#6366f1" />
      <text x="320" y="175" textAnchor="middle" fill="#6366f1" fontSize="10" fontFamily="system-ui">now</text>

      {/* Past label */}
      <text x="60" y="175" textAnchor="middle" fill="#3f3f46" fontSize="9" fontFamily="system-ui">past</text>

      {/* Arrow */}
      <path d="M350 150L360 150M355 145L360 150L355 155" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

export function PulseVisual({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none">
      {/* Central radar */}
      <circle cx="200" cy="150" r="100" stroke="#27272a" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="70" stroke="#27272a" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="40" stroke="#27272a" strokeWidth="0.5" />
      <circle cx="200" cy="150" r="10" fill="#6366f1" fillOpacity="0.3" stroke="#6366f1" strokeWidth="1" />

      {/* Sweep line */}
      <line x1="200" y1="150" x2="290" y2="90" stroke="#6366f1" strokeWidth="1" opacity="0.6" />
      <path d="M200 150 L290 90 A100 100 0 0 0 200 50 Z" fill="#6366f1" fillOpacity="0.05" />

      {/* Detected items */}
      <circle cx="240" cy="110" r="5" fill="#6366f1" fillOpacity="0.8" />
      <circle cx="240" cy="110" r="12" stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />

      <circle cx="160" cy="100" r="4" fill="#f59e0b" fillOpacity="0.7" />
      <circle cx="160" cy="100" r="10" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />

      <circle cx="270" cy="170" r="4" fill="#10b981" fillOpacity="0.7" />
      <circle cx="270" cy="170" r="10" stroke="#10b981" strokeWidth="0.5" opacity="0.3" />

      {/* Labels */}
      <text x="255" y="108" fill="#a5b4fc" fontSize="8" fontFamily="system-ui">insight</text>
      <text x="160" y="85" textAnchor="middle" fill="#fbbf24" fontSize="8" fontFamily="system-ui">risk</text>
      <text x="285" y="168" fill="#6ee7b7" fontSize="8" fontFamily="system-ui">opportunity</text>
    </svg>
  );
}

export function CustomVisual({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none">
      {/* Grid of metric cards */}
      <rect x="40" y="40" width="100" height="70" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="1" />
      <text x="90" y="65" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="system-ui">GENERIC CPA</text>
      <text x="90" y="90" textAnchor="middle" fill="#3f3f46" fontSize="20" fontFamily="system-ui">$24.50</text>

      <rect x="150" y="40" width="100" height="70" rx="8" fill="#18181b" stroke="#27272a" strokeWidth="1" />
      <text x="200" y="65" textAnchor="middle" fill="#52525b" fontSize="9" fontFamily="system-ui">GENERIC ROAS</text>
      <text x="200" y="90" textAnchor="middle" fill="#3f3f46" fontSize="20" fontFamily="system-ui">3.2x</text>

      {/* Arrow down */}
      <path d="M200 125L200 155M195 148L200 155L205 148" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* Custom metrics - highlighted */}
      <rect x="40" y="170" width="150" height="70" rx="8" fill="#1e1b4b" fillOpacity="0.3" stroke="#6366f1" strokeWidth="1" />
      <text x="115" y="195" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="system-ui">YOUR BLENDED iROAS</text>
      <text x="115" y="222" textAnchor="middle" fill="#a5b4fc" fontSize="22" fontWeight="600" fontFamily="system-ui">4.7x</text>

      <rect x="200" y="170" width="160" height="70" rx="8" fill="#1e1b4b" fillOpacity="0.3" stroke="#6366f1" strokeWidth="1" />
      <text x="280" y="195" textAnchor="middle" fill="#818cf8" fontSize="9" fontFamily="system-ui">YOUR CONTRIBUTION MARGIN</text>
      <text x="280" y="222" textAnchor="middle" fill="#a5b4fc" fontSize="22" fontWeight="600" fontFamily="system-ui">38.2%</text>
    </svg>
  );
}

export function JoinVisual({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 300" fill="none">
      {/* Team circle */}
      <circle cx="200" cy="150" r="90" stroke="#27272a" strokeWidth="1" strokeDasharray="4 4" />

      {/* Human team members */}
      {[
        { x: 140, y: 90 },
        { x: 260, y: 90 },
        { x: 120, y: 180 },
        { x: 280, y: 180 },
        { x: 200, y: 230 },
      ].map((pos, i) => (
        <g key={i}>
          <circle cx={pos.x} cy={pos.y} r="14" fill="#27272a" stroke="#3f3f46" strokeWidth="1" />
          <circle cx={pos.x} cy={pos.y - 2} r="4" fill="#52525b" />
          <path d={`M${pos.x - 7} ${pos.y + 8} A7 5 0 0 1 ${pos.x + 7} ${pos.y + 8}`} fill="#52525b" />
        </g>
      ))}

      {/* YouKnow node - entering */}
      <circle cx="200" cy="140" r="20" fill="#6366f1" fillOpacity="0.15" stroke="#6366f1" strokeWidth="1.5" />
      <text x="200" y="144" textAnchor="middle" fill="#a5b4fc" fontSize="9" fontWeight="600" fontFamily="system-ui">YK</text>

      {/* Connection lines */}
      {[
        { x: 140, y: 90 },
        { x: 260, y: 90 },
        { x: 120, y: 180 },
        { x: 280, y: 180 },
        { x: 200, y: 230 },
      ].map((pos, i) => (
        <line key={i} x1="200" y1="140" x2={pos.x} y2={pos.y} stroke="#6366f1" strokeWidth="0.5" opacity="0.3" />
      ))}
    </svg>
  );
}

const visuals: Record<string, (props: { className?: string }) => React.ReactElement> = {
  network: NetworkVisual,
  layers: LayersVisual,
  signal: SignalVisual,
  memory: MemoryVisual,
  pulse: PulseVisual,
  custom: CustomVisual,
  join: JoinVisual,
};

export default function Visual({ name, className = "" }: { name: string; className?: string }) {
  const V = visuals[name];
  if (!V) return null;
  return <V className={className} />;
}
