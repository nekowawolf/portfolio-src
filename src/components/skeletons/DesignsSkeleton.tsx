export default function DesignsSkeleton() {
  return (
    <div className="card-color rounded-3xl p-6 md:p-8 border border-color animate-pulse">
      <div className="h-6 w-48 bg-gray-300 rounded mb-6" />

      <div className="flex gap-6 overflow-x-auto">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="w-[280px] md:w-[320px] rounded-2xl overflow-hidden border border-color"
          >
            <div className="h-[160px] bg-gray-300" />
            <div className="p-4 space-y-2">
              <div className="h-4 w-3/4 bg-gray-300 rounded" />
              <div className="h-3 w-full bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}