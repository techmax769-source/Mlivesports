export default function SkeletonMatchCard() {
  return (
    <div className="glass-card p-4 animate-pulse">
      <div className="flex items-center justify-between mb-3">
        <div className="h-4 bg-dark-800 rounded w-24"></div>
        <div className="h-4 bg-dark-800 rounded w-16"></div>
      </div>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex-1 text-center">
          <div className="h-6 bg-dark-800 rounded mb-2 mx-auto w-3/4"></div>
          <div className="h-3 bg-dark-800 rounded w-12 mx-auto"></div>
        </div>
        
        <div className="mx-4">
          <div className="flex items-center gap-2">
            <div className="h-10 bg-dark-800 rounded w-14"></div>
            <div className="h-4 bg-dark-800 rounded w-4"></div>
            <div className="h-10 bg-dark-800 rounded w-14"></div>
          </div>
        </div>
        
        <div className="flex-1 text-center">
          <div className="h-6 bg-dark-800 rounded mb-2 mx-auto w-3/4"></div>
          <div className="h-3 bg-dark-800 rounded w-12 mx-auto"></div>
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="h-3 bg-dark-800 rounded w-20"></div>
        <div className="h-3 bg-dark-800 rounded w-24"></div>
      </div>
    </div>
  );
}
