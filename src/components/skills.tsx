import Image from "next/image";

export function TechStack() {
  const techIcons = [
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/nextjs-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/nextjs-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/nextjs-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/nextjs-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/nextjs-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/nextjs-auto.svg",
  ];

  return (
    <div className="w-full rounded-2xl border p-6 shadow card-color border-color text-fill-color">
      <h2 className="text-xl font-semibold mb-4">TECH STACK</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
        {techIcons.map((icon, index) => (
          <div key={index} className="flex-shrink-0">
            <Image src={icon} alt="tech-icon" width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function DesignTools() {
  const designIcons = [
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/figma-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/figma-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/figma-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/figma-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/figma-auto.svg",
    "https://raw.githubusercontent.com/LelouchFR/skill-icons/69fa46e75e198c966d5ab12d3af58e0afd4b6d80/assets/figma-auto.svg",
  ];

  return (
    <div className="w-full rounded-2xl border p-6 shadow card-color border-color text-fill-color">
      <h2 className="text-xl font-semibold mb-4">DESIGN TOOLS</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
        {designIcons.map((icon, index) => (
          <div key={index} className="flex-shrink-0">
            <Image src={icon} alt="design-icon" width={50} height={50} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <TechStack />
      <DesignTools />
    </div>
  );
}