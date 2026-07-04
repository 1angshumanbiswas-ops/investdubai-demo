interface VideoCardProps {
  youtubeId: string
  title: string
  subtitle: string
  isShort?: boolean
}

export default function VideoCard({ youtubeId, title, subtitle, isShort = false }: VideoCardProps) {
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition">
      <div className={`relative w-full ${isShort ? 'pb-[177%]' : 'pb-[56.25%]'}`}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-4">
        <p className="font-semibold text-navy text-sm mb-1">{title}</p>
        <p className="text-gray-500 text-xs leading-relaxed">{subtitle}</p>
      </div>
    </div>
  )
}
