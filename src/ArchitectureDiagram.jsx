"use client"

export default function ArchitectureDiagram() {
  return (
    <div className="flex justify-center">
      <svg
        viewBox="0 0 800 200"
        width="800"
        height="200"
        className="max-w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* VaultKit */}
        <rect
          x="40"
          y="60"
          width="200"
          height="64"
          rx="14"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />
        <text
          x="140"
          y="98"
          textAnchor="middle"
          fontSize="18"
          fontWeight="600"
          fill="#111"
        >
          VaultKit
        </text>

        {/* React Portal */}
        <rect
          x="560"
          y="60"
          width="200"
          height="64"
          rx="14"
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />
        <text
          x="660"
          y="98"
          textAnchor="middle"
          fontSize="18"
          fontWeight="600"
          fill="#111"
        >
          CLI
        </text>

        {/* Left connector */}
        <line
          x1="240"
          y1="92"
          x2="350"
          y2="92"
          stroke="#111"
          strokeWidth="2"
        />

        {/* Right connector */}
        <line
          x1="450"
          y1="92"
          x2="560"
          y2="92"
          stroke="#111"
          strokeWidth="2"
        />

        {/* FUNL funnel */}
        <path
          d="
            M370 58
            L430 58
            L405 92
            L405 112
            C405 122 395 122 395 112
            L395 92
            Z
          "
          fill="white"
          stroke="#111"
          strokeWidth="2"
        />

        {/* FUNL label */}
        <text
          x="400"
          y="150"
          textAnchor="middle"
          fontSize="16"
          fontWeight="600"
          fill="#111"
        >
          FUNL
        </text>

        {/* Dotted vertical continuation */}
        <line
          x1="400"
          y1="156"
          x2="400"
          y2="185"
          stroke="#111"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  )
}
