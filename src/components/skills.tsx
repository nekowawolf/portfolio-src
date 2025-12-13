'use client'

import Image from "next/image"
import { usePortfolio } from "@/hooks/usePortfolio"

function TechStack() {
  const { data } = usePortfolio()
  if (!data) return null

  return (
    <div className="w-full rounded-2xl border p-6 shadow card-color border-color text-fill-color">
      <h2 className="text-xl font-semibold mb-4">TECH STACK</h2>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
        {data.skills.tech.map((skill) => (
          <div key={skill.id} className="flex-shrink-0">
            <Image
              src={skill.icon_url}
              alt={skill.name}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function DesignTools() {
  const { data } = usePortfolio()
  if (!data) return null

  return (
    <div className="w-full rounded-2xl border p-6 shadow card-color border-color text-fill-color">
      <h2 className="text-xl font-semibold mb-4">DESIGN TOOLS</h2>

      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
        {data.skills.design.map((skill) => (
          <div key={skill.id} className="flex-shrink-0">
            <Image
              src={skill.icon_url}
              alt={skill.name}
              width={50}
              height={50}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TechStack />
      <DesignTools />
    </div>
  )
}