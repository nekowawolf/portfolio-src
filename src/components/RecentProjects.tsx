'use client'

import { usePortfolio } from "@/hooks/usePortfolio"
import { FiArrowRight } from "react-icons/fi"

export default function RecentProjects() {
  const { data } = usePortfolio()
  if (!data) return null

  return (
    <div className="card-color rounded-3xl p-6 md:p-8 border border-color">
      <h2 className="text-xl md:text-2xl font-bold text-fill-color mb-6">
        RECENT PROJECTS
      </h2>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {data.projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] card-color2 rounded-2xl overflow-hidden border border-color group hover:border-blue-500 transition-all duration-300"
            >
              <div
                className="h-[160px] relative"
                style={{
                  backgroundImage: `url(${project.image_url})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-fill-color font-bold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-fill-color/60 text-sm mt-1">
                    {project.description}
                  </p>
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 transition-colors p-2 rounded-full flex-shrink-0 ml-2"
                  >
                    <FiArrowRight className="w-5 h-5 text-white" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}