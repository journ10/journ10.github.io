export const themes = [
  { id: 'light', label: '晨光', desc: '玻璃质感 清冽' },
  { id: 'dark', label: '暗火', desc: '低燃 · 深夜余热' },
  { id: 'blue-tech', label: '深海基站', desc: '数据流与冷蓝' },
  { id: 'warm-paper', label: '旧书摊', desc: '泛黄 · 有墨香' },
  { id: 'purple-neon', label: '地下街道', desc: '霓虹混沌' },
  { id: 'retro-terminal', label: '机房', desc: '绿字 · 无声运转' },
] as const

export type ThemeId = (typeof themes)[number]['id']

export const DEFAULT_THEME: ThemeId = 'light'