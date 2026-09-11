import React from "react"

interface LogoProps {
  className?: string
  color?: string
}

export function LogoOdoo({ className = "h-8 w-auto", color = "#714B67" }: LogoProps) {
  return (
    <svg viewBox="0 0 160 46" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Odoo">
      <path d="M23.1 45.6C10.3 45.6 0 35.4 0 22.8C0 10.2 10.3 0 23.1 0C35.9 0 46.2 10.2 46.2 22.8C46.2 35.4 35.9 45.6 23.1 45.6ZM23.1 11.2C16.8 11.2 11.6 16.4 11.6 22.8C11.6 29.2 16.8 34.4 23.1 34.4C29.4 34.4 34.6 29.2 34.6 22.8C34.6 16.4 29.4 11.2 23.1 11.2Z" fill={color} />
      <path d="M69.8 45.6C57 45.6 46.7 35.4 46.7 22.8C46.7 10.2 57 0 69.8 0C76.2 0 82 2.6 86.2 6.9V0.8H97.4V44.8H86.2V38.7C82 43 76.2 45.6 69.8 45.6ZM72.1 11.2C65.8 11.2 60.6 16.4 60.6 22.8C60.6 29.2 65.8 34.4 72.1 34.4C78.4 34.4 83.6 29.2 83.6 22.8C83.6 16.4 78.4 11.2 72.1 11.2Z" fill={color} />
      <path d="M121.2 45.6C108.4 45.6 98.1 35.4 98.1 22.8C98.1 10.2 108.4 0 121.2 0C134 0 144.3 10.2 144.3 22.8C144.3 35.4 134 45.6 121.2 45.6ZM121.2 11.2C114.9 11.2 109.7 16.4 109.7 22.8C109.7 29.2 114.9 34.4 121.2 34.4C127.5 34.4 132.7 29.2 132.7 22.8C132.7 16.4 127.5 11.2 121.2 11.2Z" fill={color} />
    </svg>
  )
}

export function LogoMeta({ className = "h-7 w-auto", color = "#000823" }: LogoProps) {
  return (
    <svg viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Meta">
      <path d="M17.4 0.6C12.8 0.6 8.5 2.8 5.6 6.5C2.1 10.9 0 16.8 0 23.1C0 28.5 3.3 31.4 7.6 31.4C12.4 31.4 16.8 26.5 19.8 20.3C22.6 14.6 26.6 8.7 31.5 8.7C34.5 8.7 36.7 10.6 36.7 14.5C36.7 19.2 33.6 24.8 30.6 29C29.6 30.4 28.6 31.4 28.6 31.4H36.9C37.3 30.9 37.8 30.2 38.4 29.2C41.8 24.3 45.5 17.5 45.5 11.7C45.5 4.3 40.5 0.6 32.8 0.6C26.5 0.6 21.2 4.6 17.4 10.1C16.8 6.4 14.8 0.6 17.4 0.6ZM8 24.2C8 20.5 9.4 16.6 11.7 13.6C13.2 11.7 15.1 10.2 17 9.4C14.7 15.2 11.4 21.6 8.7 24.2H8Z" fill="#0668E1" />
      <text x="54" y="24" fill={color} fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="24" letterSpacing="-0.02em">Meta</text>
    </svg>
  )
}

export function LogoGoogle({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 148 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Google">
      <path d="M15.7 12.8v5.8h8.8c-.8 4.2-4.4 7.2-8.8 7.2-5.3 0-9.6-4.4-9.6-9.8s4.3-9.8 9.6-9.8c2.4 0 4.6.9 6.3 2.5l4.3-4.3C23.3 1.8 19.7.5 15.7.5 7.1.5.1 7.4.1 16s7 15.5 15.6 15.5c8.9 0 14.9-6.3 14.9-15.1 0-1-.1-2.1-.3-3.6H15.7z" fill="#4285F4" />
      <text x="40" y="24" fill="#000823" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="23" letterSpacing="-0.03em">Google</text>
    </svg>
  )
}

export function LogoAWS({ className = "h-8 w-auto", color = "#000823" }: LogoProps) {
  return (
    <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="AWS">
      <text x="4" y="26" fill={color} fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="28" letterSpacing="0.04em">aws</text>
      <path d="M12 34C35 41 68 41 96 32" stroke="#FF9900" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M93 28L98 32L92 36" fill="#FF9900" stroke="#FF9900" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function LogoAzure({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Microsoft Azure">
      <path d="M12.5 1.5L1.5 19.5H9.5L15.5 8.5L21.5 19.5H29.5L18.5 1.5H12.5Z" fill="#0078D4" />
      <path d="M14.5 21.5L9.5 30.5H29.5L25.5 21.5H14.5Z" fill="#50E6FF" opacity="0.9" />
      <text x="36" y="23" fill="#000823" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="18" letterSpacing="-0.02em">Azure</text>
    </svg>
  )
}

export function LogoOracle({ className = "h-6 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 140 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Oracle">
      <text x="0" y="23" fill="#C74634" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="26" letterSpacing="0.12em">ORACLE</text>
    </svg>
  )
}

export function LogoSAP({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 90 34" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="SAP">
      <rect width="90" height="34" rx="4" fill="#007DB8" />
      <text x="12" y="25" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="24" letterSpacing="0.08em">SAP</text>
    </svg>
  )
}

export function LogoAnthropic({ className = "h-7 w-auto", color = "#000823" }: LogoProps) {
  return (
    <svg viewBox="0 0 170 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Anthropic Claude">
      <path d="M7 25L13.5 6H18.5L25 25H20.2L18.7 20.5H13.3L11.8 25H7ZM14.4 16.5H17.6L16 11.2L14.4 16.5Z" fill="#D97706" />
      <text x="32" y="23" fill={color} fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.02em">Anthropic</text>
    </svg>
  )
}

export function LogoOpenAI({ className = "h-7 w-auto", color = "#000823" }: LogoProps) {
  return (
    <svg viewBox="0 0 145 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="OpenAI">
      <path d="M26.2 13.5c-.3-2.4-1.7-4.5-3.8-5.7-1.4-.8-3-1.1-4.6-.9-.6-.9-1.5-1.6-2.5-2.1-2.4-1.1-5.2-.9-7.4.4-1.3.8-2.3 2-2.8 3.5-1.2.3-2.3.9-3.2 1.8-1.9 2-2.7 4.7-2.2 7.4.3 1.5 1 2.9 2.1 4-.3 1.4-.1 2.8.5 4.1 1.2 2.3 3.4 3.9 6 4.3 1 .2 2 .1 3-.2.8 1.1 1.9 1.9 3.2 2.4 2.4.9 5.1.5 7.1-.9 1.3-.9 2.2-2.2 2.7-3.7 1.1-.3 2.1-.9 2.9-1.7 1.8-2 2.5-4.7 2-7.3-.2-1.6-.9-3.1-2-4.2zm-9 12.8c-.8.5-1.8.6-2.7.4-.3-.1-.6-.2-.8-.4l3.8-2.2c.3-.2.5-.5.5-.8v-5.4l1.6.9v5.9c0 .7-.4 1.3-1 1.6l-1.4.8z" fill={color} />
      <text x="36" y="24" fill={color} fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.03em">OpenAI</text>
    </svg>
  )
}

export function LogoCisco({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 110 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Cisco">
      <path d="M4 14V18M12 10V22M20 6V26M28 10V22M36 14V18" stroke="#049FD9" strokeWidth="3" strokeLinecap="round" />
      <text x="46" y="23" fill="#049FD9" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.06em">CISCO</text>
    </svg>
  )
}

export function LogoFortinet({ className = "h-6 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 150 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Fortinet">
      <rect x="0" y="4" width="7" height="7" fill="#EE3124" />
      <rect x="10" y="4" width="7" height="7" fill="#EE3124" />
      <rect x="0" y="14" width="7" height="7" fill="#EE3124" />
      <rect x="10" y="14" width="7" height="7" fill="#EE3124" />
      <text x="24" y="21" fill="#000823" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.04em">FORTINET</text>
    </svg>
  )
}

export function LogoCloudflare({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 160 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Cloudflare">
      <path d="M20.5 12c-.5-3.3-3.3-5.8-6.7-5.8-3.1 0-5.7 2.1-6.5 5-2.8.3-5 2.7-5 5.6 0 3.1 2.5 5.7 5.7 5.7h13.2c2.4 0 4.4-2 4.4-4.4 0-2.3-1.8-4.2-4.1-4.4z" fill="#F38020" />
      <text x="32" y="23" fill="#000823" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="19" letterSpacing="-0.02em">Cloudflare</text>
    </svg>
  )
}

export function LogoNextjs({ className = "h-7 w-auto", color = "#000823" }: LogoProps) {
  return (
    <svg viewBox="0 0 135 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Next.js">
      <polygon points="12,2 26,26 2,26" fill={color} />
      <text x="34" y="24" fill={color} fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="22" letterSpacing="-0.03em">Next.js</text>
    </svg>
  )
}

export function LogoStripe({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 100 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Stripe">
      <text x="2" y="25" fill="#635BFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="26" letterSpacing="-0.04em">stripe</text>
    </svg>
  )
}

export function LogoHubSpot({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 140 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="HubSpot">
      <circle cx="16" cy="16" r="7" stroke="#FF7A59" strokeWidth="4" />
      <circle cx="27" cy="11" r="3" fill="#FF7A59" />
      <text x="36" y="24" fill="#000823" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="22" letterSpacing="-0.02em">HubSpot</text>
    </svg>
  )
}

export function LogoDocker({ className = "h-7 w-auto" }: LogoProps) {
  return (
    <svg viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Docker">
      <rect x="2" y="10" width="4" height="4" fill="#2496ED" />
      <rect x="8" y="10" width="4" height="4" fill="#2496ED" />
      <rect x="8" y="5" width="4" height="4" fill="#2496ED" />
      <rect x="14" y="10" width="4" height="4" fill="#2496ED" />
      <rect x="14" y="5" width="4" height="4" fill="#2496ED" />
      <path d="M2 16C2 16 5 24 18 24C24 24 28 20 28 17H2Z" fill="#2496ED" />
      <text x="34" y="23" fill="#000823" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="20" letterSpacing="-0.02em">docker</text>
    </svg>
  )
}
