"use client"

import { useEffect, useRef, useState } from "react"

interface PageHeaderProps {
  tag: string
  headline: string | React.ReactNode
  description?: string
  className?: string
}

function RevealHeadline({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold: 0.1 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <h1
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        filter: inView ? "blur(0px)" : "blur(16px)",
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), filter 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
        whiteSpace: "pre-line",
      }}
    >
      {children}
    </h1>
  )
}

export function PageHeader({ tag, headline, description, className = "" }: PageHeaderProps) {
  return (
    <div className={`pt-36 pb-20 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto ${className}`}>
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] tracking-widest font-sans text-[#000823]/50 bg-black/[0.04] mb-6 block w-fit">
        {tag}
      </span>
      <RevealHeadline className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] text-[#000823] max-w-4xl">
        {headline}
      </RevealHeadline>
      {description && (
        <p className="mt-6 text-base md:text-lg text-[#000823]/60 leading-relaxed max-w-2xl font-normal">
          {description}
        </p>
      )}
    </div>
  )
}
