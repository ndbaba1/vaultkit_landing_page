"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"

const CLI_COMMAND = `vkit request --aql '{
  "source_table": "customers",
  "columns": ["address"]
}' \\
  --env production \\
  --requester_region US \\
  --dataset_region US`  

export default function TerminalBlock() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(CLI_COMMAND)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950 shadow-xl">
      {/* Terminal header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900 rounded-t-2xl">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
          <span className="ml-3 text-xs text-zinc-400 font-mono">
            Example CLI request
          </span>
        </div>

        <button
          onClick={copy}
          aria-label="Copy CLI command"
          className="text-zinc-400 hover:text-zinc-200 transition"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
      </div>

      {/* Terminal body */}
      <pre className="px-6 py-5 text-sm text-zinc-100 font-mono leading-relaxed overflow-x-auto">
        <div className="flex">
          <span className="text-zinc-500 pr-3 select-none">$</span>
          <span className="whitespace-pre">{CLI_COMMAND}</span>
        </div>
      </pre>
    </div>
  )
}
