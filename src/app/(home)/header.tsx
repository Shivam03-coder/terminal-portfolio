import { Terminal } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className="sticky left-0 top-0 flex h-full w-full items-center gap-2 bg-gray-800 p-2">
    <div className="flex gap-1.5">
      <div className="h-3 w-3 rounded-full bg-red-500" />
      <div className="h-3 w-3 rounded-full bg-yellow-500" />
      <div className="h-3 w-3 rounded-full bg-green-500" />
    </div>
    <div className="mx-auto flex items-center gap-2">
      <Terminal size={18} />
      <span className="font-semibold text-lg text-blue-400">
        Terminal Portfolio Shivam Anand
      </span>
    </div>
  </div>
  )
}

export default Header