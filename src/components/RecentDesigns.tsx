import { FiArrowRight } from "react-icons/fi";

export default function RecentDesigns() {
  const projects = [
    {
      title: "ナオカ・ウエノ",
      description: "を務めた日本のアニメーションテレビシリーズです。",
      image: "https://i.pinimg.com/736x/93/cf/b2/93cfb20e8801be4a6b747d2ea41ff6a8.jpg",
    },
    {
      title: "ナオカ・ウエノ",
      description: "を務めた日本のアニメーションテレビシリーズです。",
      image: "https://i.pinimg.com/736x/93/cf/b2/93cfb20e8801be4a6b747d2ea41ff6a8.jpg",
    },
    {
      title: "ナオカ・ウエノ",
      description: "を務めた日本のアニメーションテレビシリーズです。",
      image: "https://i.pinimg.com/736x/93/cf/b2/93cfb20e8801be4a6b747d2ea41ff6a8.jpg",
    },
  ];

  return (
    <div className="bg-[#243049] rounded-3xl p-6 md:p-8 border border-[#3d4f6f]">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">RECENT DESIGN</h2>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-[#1a1f35] rounded-2xl overflow-hidden border border-[#3d4f6f] group hover:border-blue-500 transition-all duration-300"
            >
              <div
                className="h-[160px] bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800 relative"
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-white font-bold text-lg">{project.title}</h3>
                  <p className="text-gray-400 text-sm mt-1">{project.description}</p>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors p-2 rounded-full flex-shrink-0 ml-2">
                  <FiArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}