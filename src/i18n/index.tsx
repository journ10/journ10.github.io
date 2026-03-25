import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { zh, type Locale } from './zh'
import { en } from './en'

export type Lang = 'zh' | 'en'

interface LocaleContextValue {
  lang: Lang
  t: Locale
  setLang: (lang: Lang) => void
}

const LocaleContext = createContext<LocaleContextValue>({
  lang: 'zh',
  t: zh,
  setLang: () => {},
})

function getSavedLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'zh' || saved === 'en') return saved
  } catch {}
  return 'zh'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getSavedLang)

  const setLang = (l: Lang) => {
    try {
      localStorage.setItem('lang', l)
    } catch {}
    setLangState(l)
  }

  const t = lang === 'zh' ? zh : en

  return (
    <LocaleContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
