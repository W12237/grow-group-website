"use client"

import React from "react"

interface MarqueeProps {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  className?: string
  separator?: string
}

export function Marquee({
  items,
  direction = "left",
  speed = "normal",
  className = "",
  separator = "·",
}: MarqueeProps) {
  const speedMap = { slow: "60s", normal: "40s", fast: "25s" }
  const duration = speedMap[speed]

  // Duplicate items for seamless loop
  const doubled = [...items, ...items]

  return (
    <div
      className={`overflow-hidden border-y border-[#000823]/[0.06] py-5 ${className}`}
      aria-hidden="true"
    >
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: `${direction === "left" ? "marquee-left" : "marquee-right"} ${duration} linear infinite`,
        }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-[12px] tracking-[0.2em] uppercase text-[#000823]/35 font-medium px-6">
              {item}
            </span>
            {i < doubled.length - 1 && (
              <span className="text-[#000823]/15 text-xs">{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
