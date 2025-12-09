import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter, FaSun } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6 items-stretch">

      {/* PFP */}
      <div className="flex justify-center lg:justify-start">
        <div className="bg-white rounded-3xl overflow-hidden w-full max-w-[220px] h-[160px] lg:max-w-full lg:h-full flex items-center justify-center">
          <img
            src="https://www.nekowawolf.xyz/img/neko.png"
            alt="Profile Picture"
            className="object-cover w-full h-full rounded-3xl"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-between">

        {/* Self Summary */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-3">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-extrabold text-white">SELF-SUMMARY</h1>
            <FaSun className="w-8 h-8" />
          </div>
        </div>

        {/* Card About */}
        <div className="bg-[#243049] rounded-3xl p-6 border border-[#3d4f6f] w-full h-full">
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
            薄暗い森の奥で、揺れる木々が古い秘密を静かに語っていた。足を踏み進めるたび、忘れていた記憶がそっと蘇るようだった, 
            薄暗い森の奥で、揺れる木々が古い秘密を静かに語っていた。足を踏み進めるたび、忘れていた記憶がそっと蘇るようだった。
          </p>

          {/* Buttons + Social */}
          <div className="flex flex-wrap items-center gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium text-white">
              Download CV
            </button>

            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" className="text-gray-300 hover:text-white">
                <FaGithub className="w-5 h-5" />
              </a>

              <a href="https://twitter.com" target="_blank" className="text-gray-300 hover:text-white">
                <FaXTwitter className="w-5 h-5" />
              </a>

              <a href="https://linkedin.com" target="_blank" className="text-gray-300 hover:text-white">
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a href="mailto:example@email.com" className="text-gray-300 hover:text-white">
                <SiGmail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}