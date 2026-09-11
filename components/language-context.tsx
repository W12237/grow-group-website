"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

export type Language = "en" | "ar"

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
  isAr: boolean
  t: (en: string, ar?: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  isAr: false,
  t: (en: string) => en,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("growl_lang") as Language | null
    if (stored === "ar" || stored === "en") {
      setLangState(stored)
      document.documentElement.dir = stored === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = stored
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    if (typeof window !== "undefined") {
      localStorage.setItem("growl_lang", newLang)
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = newLang
    }
  }

  const toggleLang = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    // Fade out
    setTimeout(() => {
      const nextLang = lang === "en" ? "ar" : "en"
      setLang(nextLang)
      
      // Wait for React to render new language, then fade in
      requestAnimationFrame(() => {
        setTimeout(() => setIsTransitioning(false), 50)
      })
    }, 300)
  }

  const isAr = lang === "ar"

  const t = (en: string, ar?: string) => {
    if (isAr && ar) return ar
    return en
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, isAr, t }}>
      <div 
        dir={isAr ? "rtl" : "ltr"} 
        className={`transition-opacity duration-300 ease-in-out ${isTransitioning ? "opacity-0" : "opacity-100"} ${isAr ? "font-sans font-arabic" : "font-sans"}`}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
