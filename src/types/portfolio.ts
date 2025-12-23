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

export interface ProjectDetails {
  image_url: string
  description: string
}

export interface Project extends BaseItem {
  title: string
  description: string
  image_url: string
  link: string
  github_url?: string
  screenshots?: string[]
  ss_desc?: string
  video_url?: string
  use_case?: ProjectDetails
  activity?: ProjectDetails
  erd?: ProjectDetails
  flowchart?: ProjectDetails
  stack?: string[]
}

export interface Experience extends BaseItem {
  title: string
  description: string
  subjects: string[]
  start_year: number
  end_year: number
}

export interface Education extends BaseItem {
  title: string
  description: string
  subjects: string[]
  start_year: number
  end_year: number
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