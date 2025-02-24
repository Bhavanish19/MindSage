import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ShimmerUIProps {
  type: 'music' | 'podcasts' | 'audiobooks'
}

export function ShimmerUI({ type }: ShimmerUIProps) {
  const shimmerClass = "animate-pulse bg-gray-200 dark:bg-gray-700 rounded"

  const MusicShimmer = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[...Array(4)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardHeader>
            <div className={`${shimmerClass} h-6 w-3/4`}></div>
          </CardHeader>
          <CardContent>
            <div className={`${shimmerClass} h-80 w-full`}></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const PodcastsShimmer = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(9)].map((_, i) => (
        <Card key={i}>
          <CardContent className="p-4">
            <div className={`${shimmerClass} h-[152px] w-full`}></div>
          </CardContent>
        </Card>
      ))}
    </div>
  )

  const AudiobooksShimmer = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <Card key={i} className="flex flex-col h-full">
          <CardContent className="flex-grow p-6">
            <div className="flex items-center space-x-4">
              <div className={`${shimmerClass} h-[100px] w-[100px]`}></div>
              <div className="space-y-2">
                <div className={`${shimmerClass} h-4 w-32`}></div>
                <div className={`${shimmerClass} h-3 w-24`}></div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className={`${shimmerClass} h-10 w-full`}></div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )

  switch (type) {
    case 'music':
      return <MusicShimmer />
    case 'podcasts':
      return <PodcastsShimmer />
    case 'audiobooks':
      return <AudiobooksShimmer />
    default:
      return null
  }
}