export interface ThemeEntry {
  id: string
  label: { zh: string; en: string }
  desc: { zh: string; en: string }
}

export const themes: ThemeEntry[] = [
  {
    id: 'light',
    label: { zh: '晨光', en: 'Dawn' },
    desc: { zh: '玻璃质感 清冽', en: 'Glass & Crisp Light' },
  },
  {
    id: 'dark',
    label: { zh: '暗火', en: 'Ember' },
    desc: { zh: '低燃 · 深夜余热', en: 'Smoldering After Midnight' },
  },
  {
    id: 'blue-tech',
    label: { zh: '深海基站', en: 'Deep Sea' },
    desc: { zh: '数据流与冷蓝', en: 'Data Streams in Cold Blue' },
  },
  {
    id: 'warm-paper',
    label: { zh: '旧书摊', en: 'Old Paper' },
    desc: { zh: '泛黄 · 有墨香', en: 'Yellowed Pages & Ink' },
  },
  {
    id: 'purple-neon',
    label: { zh: '地下街道', en: 'Neon Underground' },
    desc: { zh: '霓虹混沌', en: 'Chaotic Glow' },
  },
  {
    id: 'retro-terminal',
    label: { zh: '机房', en: 'Terminal' },
    desc: { zh: '绿字 · 无声运转', en: 'Green Text, Silent Hum' },
  },
]

export type ThemeId = ThemeEntry['id']

export const DEFAULT_THEME: ThemeId = 'light'