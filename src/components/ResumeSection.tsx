export default function ExperienceEducation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

      {/* EXPERIENCE */}
      <div className="card-color rounded-3xl p-6 md:p-8 border border-color h-[250px] flex flex-col">
        <h2 className="text-xl md:text-2xl font-bold text-fill-color mb-4">
          EXPERIENCE
        </h2>

        <div className="overflow-y-auto pr-3 flex-grow">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-fill-color">
                Freelance Full-Stack Developer
              </h3>
              <p className="text-fill-color/70 text-sm mt-1">
                Built various client projects including dashboards, authentication systems, 
                mobile UI prototypes, and automation tools. Skilled in REST API integration, 
                secure backend development with Golang, and deploying full-stack products 
                using Next.js, Vercel, and cloud platforms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-fill-color">
                Software Development Intern
              </h3>
              <p className="text-fill-color/70 text-sm mt-1">
                Supported development of internal company tools, enhanced UI components,
                and maintained microservices. Collaborated with senior developers, 
                participated in code reviews, and improved system performance and reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* EDUCATION */}
      <div className="card-color rounded-3xl p-6 md:p-8 border border-color h-[250px] flex flex-col">
        <h2 className="text-xl md:text-2xl font-bold text-fill-color mb-4">
          EDUCATION
        </h2>

        <div className="overflow-y-auto pr-3 flex-grow">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-fill-color">
                Bachelor's Degree in Computer Science
              </h3>

              <p className="text-fill-color/70 text-sm mt-1">
                Learned core concepts of computing, software engineering, and modern development 
                practices. Focused on backend, cloud architecture, and full-stack application design.
              </p>

              <ul className="list-disc pl-5 text-fill-color/70 text-sm mt-2 space-y-1">
                <li>Web Services & REST API Development</li>
                <li>Cloud Computing & Deployment Fundamentals</li>
                <li>Database Engineering & Query Optimization</li>
                <li>Software Architecture & System Design Patterns</li>
                <li>Mobile Application Development Basics</li>
                <li>Cybersecurity & Basic Network Security</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}