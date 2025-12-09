export default function Certificates() {
  const designs = [
    {
      image: "https://i.pinimg.com/736x/86/40/2c/86402c744ab576b541b935500937acdc.jpg",
    },
    {

      image: "https://i.pinimg.com/736x/86/40/2c/86402c744ab576b541b935500937acdc.jpg",
    },
    {
      image: "https://i.pinimg.com/736x/86/40/2c/86402c744ab576b541b935500937acdc.jpg",
    },
  ];

  return (
    <div className="bg-[#243049] rounded-3xl p-6 md:p-8 border border-[#3d4f6f]">
      <h2 className="text-xl md:text-2xl font-bold text-white mb-6">CERTIFICATE</h2>

      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin">
          {designs.map((design, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] md:w-[320px] bg-[#1a1f35] rounded-2xl overflow-hidden border border-[#3d4f6f] group hover:border-blue-500 transition-all duration-300"
            >
              <div
                className="h-[160px] relative"
                style={{
                  backgroundImage: `url(${design.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}