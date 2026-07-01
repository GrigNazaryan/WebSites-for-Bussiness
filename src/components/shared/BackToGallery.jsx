import { Link } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'

// Small persistent affordance so anyone viewing a live demo can get back
// to the template gallery or the main agency site without using the
// browser back button.
export default function BackToGallery({ light = false }) {
  return (
    <Link
      to="/"
      className={`fixed left-6 top-6 z-[70] flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold backdrop-blur-md transition-transform hover:scale-105 ${
        light
          ? 'border-black/10 bg-white/80 text-black'
          : 'border-white/10 bg-black/50 text-white'
      }`}
    >
      <LayoutGrid size={14} />
      All Templates
    </Link>
  )
}
