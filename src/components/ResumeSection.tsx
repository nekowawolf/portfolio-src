export default function ExperienceEducation() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
      
      <div className="card-color rounded-3xl p-6 md:p-8 border border-color min-h-[250px] flex flex-col">
        <h2 className="text-xl md:text-2xl font-bold text-fill-color mb-4">EXPERIENCE</h2>
        <div className="space-y-4 flex-1"></div>
      </div>

      <div className="card-color rounded-3xl p-6 md:p-8 border border-color min-h-[250px] flex flex-col">
        <h2 className="text-xl md:text-2xl font-bold text-fill-color mb-4">EDUCATION</h2>
        <div className="space-y-4 flex-1"></div>
      </div>

    </div>
  );
}