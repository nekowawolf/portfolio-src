export interface BaseItem {
  id: string
}

export interface Certificate extends BaseItem {
  title: string
  image_url: string
}

export interface Design extends BaseItem {
  title: string
  description: string
  image_url: string
  link: string
}

export interface Project extends BaseItem {
  title: string
  description: string
  image_url: string
  link: string
}

export interface Experience extends BaseItem {
  role: string
  company: string
  description: string
  start_year: number
  end_year: number
}

export interface Education extends BaseItem {
  degree: string
  institution: string
  description: string
  subjects: string[]
}

export interface SkillItem extends BaseItem {
  name: string
  icon_url: string
}

export interface Portfolio {
  hero: {
    name: string
    summary: string
    avatar_url: string
    cv_url: string
    github: string
    twitter: string
    linkedin: string
    email: string
  }
  certificates: Certificate[]
  designs: Design[]
  projects: Project[]
  experience: Experience[]
  education: Education[]
  skills: {
    tech: SkillItem[]
    design: SkillItem[]
  }
}