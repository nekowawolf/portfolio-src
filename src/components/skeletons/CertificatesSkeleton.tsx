export default function CertificatesSkeleton() {
  return (
    <div className="card-color rounded-3xl p-6 md:p-8 border border-color animate-pulse">
      <div className="h-6 w-40 bg-gray-300 rounded mb-6" />

      <div className="flex gap-6 overflow-x-auto">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="w-[280px] md:w-[320px] h-[160px] bg-gray-300 rounded-2xl flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}