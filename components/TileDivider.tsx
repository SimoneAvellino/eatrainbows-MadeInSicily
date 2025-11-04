import React from 'react'

export default function TileDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      width="100%"
      height="24"
      viewBox="0 0 1200 24"
      preserveAspectRatio="none"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="6" cy="6" r="4" fill="#f8db74" />
          <circle cx="18" cy="18" r="3" fill="#03267e" />
        </pattern>
      </defs>
      <rect width="1200" height="24" fill="url(#dots)" />
    </svg>
  )
}
