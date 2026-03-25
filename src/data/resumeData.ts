export interface BilingualText {
  zh: string
  en: string
}

export interface BilingualStringArray {
  zh: string[]
  en: string[]
}

export const personalInfo = {
  name: '您的姓名',
  logo: '姓名.',
  roles: {
    zh: ['您的职位头衔', '前端工程师', '全栈开发工程师', 'UI/UX 设计师', '产品经理'],
    en: ['Your Job Title', 'Frontend Engineer', 'Full Stack Developer', 'UI/UX Designer', 'Product Manager'],
  },
  description: {
    zh: '热爱技术与创新，致力于打造优质的数字产品体验。\n欢迎来到我的在线简历页面。',
    en: 'Passionate about technology and innovation, dedicated to crafting exceptional digital experiences.\nWelcome to my online résumé.',
  },
  location: '所在城市，中国',
  email: 'your@email.com',
  phone: '+86 1XX XXXX XXXX',
  education: {
    zh: '您的学历',
    en: 'Your Degree',
  },
  languages: '中文 / English',
  availableForWork: true,
  social: {
    github: '#',
    linkedin: '#',
    weixin: '#',
    weibo: '#',
    twitter: '#',
  },
}

export const aboutInfo = {
  yearsExperience: '5',
  projectsCount: '20+',
  intro1: {
    zh: '我是一名充满热情的[您的职业]，拥有超过 X 年的行业经验。我专注于[您的专业领域]，热爱用技术解决实际问题并创造有价值的产品。',
    en: 'A passionate [Your Role] with X+ years of experience. I specialize in [Your Field], and love building products that make a real difference.',
  },
  intro2: {
    zh: '在我的职业生涯中，我曾服务于多家知名企业，积累了丰富的实战经验。我相信持续学习和团队协作是成功的关键，并始终致力于在工作中追求卓越。',
    en: "I've had the privilege of working with leading companies across the industry. I believe continuous learning and strong teamwork are the foundation of great work.",
  },
}

export interface Skill {
  name: string
  level: number
}

export interface SkillCategory {
  icon: string
  title: BilingualText
  skills?: Skill[]
  tags?: string[] | BilingualStringArray
}

export const skillCategories: SkillCategory[] = [
  {
    icon: 'fas fa-code',
    title: { zh: '技术技能', en: 'Technical Skills' },
    skills: [
      { name: 'Skill One', level: 90 },
      { name: 'Skill Two', level: 85 },
      { name: 'Skill Three', level: 80 },
      { name: 'Skill Four', level: 75 },
    ],
  },
  {
    icon: 'fas fa-layer-group',
    title: { zh: '框架 & 工具', en: 'Frameworks & Tools' },
    skills: [
      { name: 'Framework/Tool One', level: 88 },
      { name: 'Framework/Tool Two', level: 82 },
      { name: 'Framework/Tool Three', level: 78 },
      { name: 'Framework/Tool Four', level: 70 },
    ],
  },
  {
    icon: 'fas fa-tools',
    title: { zh: '其他技能', en: 'Other Skills' },
    tags: [
      'Skill Tag One', 'Skill Tag Two', 'Skill Tag Three', 'Skill Tag Four',
      'Skill Tag Five', 'Skill Tag Six', 'Skill Tag Seven', 'Skill Tag Eight',
      'Skill Tag Nine', 'Skill Tag Ten',
    ],
  },
  {
    icon: 'fas fa-heart',
    title: { zh: '软技能', en: 'Soft Skills' },
    tags: {
      zh: ['团队协作', '项目管理', '沟通表达', '解决问题', '快速学习', '创新思维', '领导力', '抗压能力'],
      en: ['Team Collaboration', 'Project Management', 'Communication', 'Problem Solving', 'Fast Learner', 'Creative Thinking', 'Leadership', 'Resilience'],
    },
  },
]

export interface ExperienceItem {
  period: BilingualText
  title: BilingualText
  company: string
  description: BilingualText
  tags: string[]
}

export const experiences: ExperienceItem[] = [
  {
    period: { zh: '20XX 年 MM 月 — 至今', en: 'MMM 20XX — Present' },
    title: { zh: '高级[职位名称]', en: 'Senior [Job Title]' },
    company: 'Company A · City',
    description: {
      zh: '负责[核心工作描述]，主导了[重要项目或成就]。带领团队[X] 人，通过[具体方法]将[指标]提升了[X]%。参与[其他重要工作]，积累了丰富的[领域]经验。',
      en: 'Led [core responsibilities], spearheading [key project or achievement]. Managed a team of [X], improving [metric] by [X]% through [approach]. Gained deep expertise in [domain].',
    },
    tags: ['Skill One', 'Skill Two', 'Skill Three', 'Skill Four'],
  },
  {
    period: { zh: '20XX 年 MM 月 — 20XX 年 MM 月', en: 'MMM 20XX — MMM 20XX' },
    title: { zh: '[职位名称]', en: '[Job Title]' },
    company: 'Company B · City',
    description: {
      zh: '主要负责[工作职责描述]。参与[项目名称]的研发，贡献了[具体贡献]。在[方面]取得了显著成果，获得了[奖项/认可]。',
      en: 'Responsible for [key responsibilities]. Contributed to [Project Name], delivering [specific contribution]. Achieved notable results in [area], earning [award/recognition].',
    },
    tags: ['Skill One', 'Skill Two', 'Skill Three'],
  },
  {
    period: { zh: '20XX 年 MM 月 — 20XX 年 MM 月', en: 'MMM 20XX — MMM 20XX' },
    title: { zh: '初级[职位名称]', en: 'Junior [Job Title]' },
    company: 'Company C · City',
    description: {
      zh: '作为初级成员，参与[工作内容]。在导师指导下快速成长，独立完成了[具体任务]，为团队带来了[价值]。',
      en: 'Joined as a junior member, working on [responsibilities]. Grew quickly under mentorship, independently delivering [specific task] and contributing [value] to the team.',
    },
    tags: ['Skill One', 'Skill Two'],
  },
]

export interface EducationItem {
  icon: string
  degree: BilingualText
  major: BilingualText
  school: BilingualText
  schoolIcon: string
  period: BilingualText
}

export const educations: EducationItem[] = [
  {
    icon: 'fas fa-university',
    degree: { zh: '硕士研究生', en: "Master's Degree" },
    major: { zh: '您的专业方向', en: 'Your Major' },
    school: { zh: '您就读的大学名称', en: 'Your University Name' },
    schoolIcon: 'fas fa-map-marker-alt',
    period: { zh: '20XX 年 — 20XX 年', en: '20XX — 20XX' },
  },
  {
    icon: 'fas fa-graduation-cap',
    degree: { zh: '本科（学士学位）', en: "Bachelor's Degree" },
    major: { zh: '您的本科专业', en: 'Your Undergraduate Major' },
    school: { zh: '您的本科院校名称', en: 'Your Undergraduate University' },
    schoolIcon: 'fas fa-map-marker-alt',
    period: { zh: '20XX 年 — 20XX 年', en: '20XX — 20XX' },
  },
  {
    icon: 'fas fa-certificate',
    degree: { zh: '专业认证', en: 'Professional Certification' },
    major: { zh: '认证名称', en: 'Certification Name' },
    school: { zh: '颁发机构名称', en: 'Issuing Organization' },
    schoolIcon: 'fas fa-building',
    period: { zh: '20XX 年获得', en: 'Obtained 20XX' },
  },
]

export interface ProjectItem {
  gradient: string
  icon: string
  title: BilingualText
  description: BilingualText
  tags: string[]
  github: string
  demo: string
}

export const projects: ProjectItem[] = [
  {
    gradient: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
    icon: 'fas fa-rocket',
    title: { zh: '项目名称一', en: 'Project Name One' },
    description: {
      zh: '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
      en: 'A brief overview of the project background, goals, and your key contributions. Highlight the core technologies, the problem solved, and the impact achieved.',
    },
    tags: ['Tech One', 'Tech Two', 'Tech Three'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#06b6d4,#0284c7)',
    icon: 'fas fa-mobile-alt',
    title: { zh: '项目名称二', en: 'Project Name Two' },
    description: {
      zh: '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
      en: 'A brief overview of the project background, goals, and your key contributions. Highlight the core technologies, the problem solved, and the impact achieved.',
    },
    tags: ['Tech One', 'Tech Two', 'Tech Three'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#f59e0b,#ef4444)',
    icon: 'fas fa-chart-bar',
    title: { zh: '项目名称三', en: 'Project Name Three' },
    description: {
      zh: '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
      en: 'A brief overview of the project background, goals, and your key contributions. Highlight the core technologies, the problem solved, and the impact achieved.',
    },
    tags: ['Tech One', 'Tech Two', 'Tech Three'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#10b981,#059669)',
    icon: 'fas fa-leaf',
    title: { zh: '项目名称四', en: 'Project Name Four' },
    description: {
      zh: '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
      en: 'A brief overview of the project background, goals, and your key contributions. Highlight the core technologies, the problem solved, and the impact achieved.',
    },
    tags: ['Tech One', 'Tech Two', 'Tech Three'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#ec4899,#8b5cf6)',
    icon: 'fas fa-paint-brush',
    title: { zh: '项目名称五', en: 'Project Name Five' },
    description: {
      zh: '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
      en: 'A brief overview of the project background, goals, and your key contributions. Highlight the core technologies, the problem solved, and the impact achieved.',
    },
    tags: ['Tech One', 'Tech Two', 'Tech Three'],
    github: '#',
    demo: '#',
  },
  {
    gradient: 'linear-gradient(135deg,#64748b,#334155)',
    icon: 'fas fa-cog',
    title: { zh: '项目名称六', en: 'Project Name Six' },
    description: {
      zh: '简要描述这个项目的背景、目标和您所做的贡献。说明使用了哪些核心技术，解决了什么问题，以及取得了哪些成果。',
      en: 'A brief overview of the project background, goals, and your key contributions. Highlight the core technologies, the problem solved, and the impact achieved.',
    },
    tags: ['Tech One', 'Tech Two', 'Tech Three'],
    github: '#',
    demo: '#',
  },
]
