export default function VaultKitLogo({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="VaultKit"
    >
      {/* Hexagon */}
      <path
        d="M32 4
           L54 16
           V48
           L32 60
           L10 48
           V16
           Z"
        fill="#0f172a"
      />

      {/* Shield */}
      <path
        d="M32 18
           C26 20 22 20 22 20
           V30
           C22 38 28 44 32 46
           C36 44 42 38 42 30
           V20
           C42 20 38 20 32 18
           Z"
        fill="#ffffff"
      />

      {/* Check */}
      <path
        d="M28 31l3 3 6-6"
        fill="none"
        stroke="#0f172a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
