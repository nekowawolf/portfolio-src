import { FiArrowRight } from "react-icons/fi";

export default function RecentProjects() {
  const projects = [
    {
      title: "ユズル",
      description: "ほとんど学校に通わず、代わりに写真を撮っている。",
      image: "https://i.pinimg.com/1200x/08/71/2f/08712fe41386cfeefdf6cbc3d69326c5.jpg",
    },
    {
      title: "ユズル",
      description: "ほとんど学校に通わず、代わりに写真を撮っている。",
      image: "https://i.pinimg.com/1200x/08/71/2f/08712fe41386cfeefdf6cbc3d69326c5.jpg",
    },
    {
      title: "ユズル",
      description: "ほとんど学校に通わず、代わりに写真を撮っている。",
      image: "https://i.pinimg.com/1200x/08/71/2f/08712fe41386cfeefdf6cbc3d69326c5.jpg",
    },
  ];

  return (
    <div className="card-color rounded-3xl p-6 md:p-8 border border-color">
      <h2 className="text-xl md:text-2xl font-bold text-fill-color mb-6">RECENT PROJECT</h2>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] card-color2 rounded-2xl overflow-hidden border border-color group hover:border-blue-500 transition-all duration-300"
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
                  <h3 className="text-fill-color font-bold text-lg">{project.title}</h3>
                  <p className="text-fill-color/60 text-sm mt-1">{project.description}</p>
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