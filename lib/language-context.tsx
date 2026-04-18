"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import content from "./content.json"

/**
 * Type that represents the language of the application.
 * @param es - Spanish
 * @param en - English
 */
type Language = "es" | "en"

/**
 * Type that represents the content of the application.
 * @param es - Spanish content
 * @param en - English content
 */
type Content = typeof content.es

/**
 * Interface that represents the language context.
 * @param language - The language of the application.
 * @param setLanguage - The function to set the language.
 * @param t - The content of the application.
 */
interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Content
}

/**
 * Context that represents the language of the application.
 * @param language - The language of the application.
 * @param setLanguage - The function to set the language.
 * @param t - The content of the application.
 */
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

/**
 * Provider that represents the language of the application.
 * @param children - The children of the provider.
 * @returns The language provider.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null
    if (saved && (saved === "es" || saved === "en")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = content[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

/**
 * Hook that represents the language of the application.
 * @returns The language of the application.
 */
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
