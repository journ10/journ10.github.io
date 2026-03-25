import { useState, useRef, useEffect } from 'react'
import { themes, type ThemeId } from '../../theme/themes'
import { useLocale } from '../../i18n/index'
import './ThemeSwitcher.css'

interface Props {
  theme: ThemeId
  setTheme: (t: ThemeId) => void
}

export default function ThemeSwitcher({ theme, setTheme }: Props) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { lang, t } = useLocale()
  const current = themes.find((th) => th.id === theme) ?? themes[0]

  // Close on outside click
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      if (
        open &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open])

  // Close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="theme-switcher" ref={containerRef}>
      <button
        className={`ts-trigger${open ? ' ts-trigger--open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-label={t.themeSwitcher.trigger}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        <span className={`ts-dot ts-dot--${theme}`} aria-hidden="true" />
        <span className="ts-label">{current.label[lang]}</span>
        <svg
          className="ts-chevron"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          aria-hidden="true"
        >
          <path
            d="M2 4l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={`ts-panel${open ? ' ts-panel--open' : ''}`}
        role="listbox"
        aria-label={t.themeSwitcher.panel}
      >
        {themes.map((th) => (
          <button
            key={th.id}
            className={`ts-option${theme === th.id ? ' ts-option--active' : ''}`}
            onClick={() => {
              setTheme(th.id)
              setOpen(false)
            }}
            role="option"
            aria-selected={theme === th.id}
          >
            <span className={`ts-swatch ts-swatch--${th.id}`} aria-hidden="true" />
            <span className="ts-option-info">
              <span className="ts-option-name">{th.label[lang]}</span>
              <span className="ts-option-desc">{th.desc[lang]}</span>
            </span>
            {theme === th.id && (
              <svg
                className="ts-check"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                aria-hidden="true"
              >
                <path
                  d="M2 7l4 4 6-6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
