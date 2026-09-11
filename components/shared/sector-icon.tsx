"use client"

import React from "react"

export interface SectorIconProps {
  slug: string
  size?: number
  className?: string
  color?: string
}

export function SectorIcon({
  slug,
  size = 18,
  className = "",
  color = "currentColor", // Still accept it so we don't break types, even though images don't use it
}: SectorIconProps) {
  const normalized = slug.toLowerCase().replace("growl-", "").replace("growl ", "")

  let src = ""

  switch (normalized) {
    case "ai":
    case "ai-automation":
      src = "/growl-icons/growl-ai icon.png"
      break
    case "technology":
    case "tech":
      src = "/growl-icons/growl-tech.png"
      break
    case "cybersecurity":
    case "system-integrator":
    case "system-integrator-cybersecurity":
    case "systems-integrator":
    case "systems-integration":
    case "security":
    case "cyber":
      src = "/growl-icons/growl-cyber.png"
      break
    case "marketing":
    case "branding":
      src = "/growl-icons/growl-marketing.png"
      break
    case "saas":
    case "ventures":
      src = "/growl-icons/growl-saas.png"
      break
    case "hub":
    case "platform":
      src = "/growl-icons/growl-hub.png"
      break
    default:
      src = "/growl-icons/growl-group-icon.png"
  }

  return (
    <img 
      src={src} 
      alt={`${slug} icon`} 
      width={size} 
      height={size} 
      className={`object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  )
}
