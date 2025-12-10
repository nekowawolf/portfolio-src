import { useEffect, useState } from 'react';
import { toggleDarkMode, initializeDarkMode } from '@/utils/darkmode';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaXTwitter, FaSun, FaMoon } from "react-icons/fa6";

export default function HeroSection() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeActive = initializeDarkMode();
    setIsDarkMode(darkModeActive);
  }, []);

  const handleThemeToggle = () => {
    const newMode = toggleDarkMode();
    setIsDarkMode(newMode);
  };

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
            <h1 className="text-4xl font-extrabold text-fill-color">SELF-SUMMARY</h1>
            <button
              onClick={handleThemeToggle}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                 <FaMoon className="w-8 h-8 text-fill-color" />
              ) : (
                 <FaSun className="w-8 h-8 text-fill-color" />
              )}
            </button>
          </div>
        </div>

        {/* Card About */}
        <div className="card-color rounded-3xl p-6 border border-color w-full h-full">
          <p className="text-fill-color/80 text-sm md:text-base leading-relaxed mb-6">
            薄暗い森の奥で、揺れる木々が古い秘密を静かに語っていた。足を踏み進めるたび、忘れていた記憶がそっと蘇るようだった, 
            薄暗い森の奥で、揺れる木々が古い秘密を静かに語っていた。足を踏み進めるたび、忘れていた記憶がそっと蘇るようだった。
          </p>

          {/* Buttons + Social */}
          <div className="flex flex-wrap items-center gap-4">

            <button className="bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg text-sm font-medium text-white">
              Download CV
            </button>

            <div className="flex items-center gap-3">
              <a href="https://github.com" target="_blank" className="text-fill-color/70 hover:text-fill-color">
                <FaGithub className="w-5 h-5" />
              </a>

              <a href="https://twitter.com" target="_blank" className="text-fill-color/70 hover:text-fill-color">
                <FaXTwitter className="w-5 h-5" />
              </a>

              <a href="https://linkedin.com" target="_blank" className="text-fill-color/70 hover:text-fill-color">
                <FaLinkedin className="w-5 h-5" />
              </a>

              <a href="mailto:example@email.com" className="text-fill-color/70 hover:text-fill-color">
                <SiGmail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}