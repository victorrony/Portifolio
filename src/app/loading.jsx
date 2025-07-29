export default function Loading() {
   return (
      <div className="min-h-screen flex items-center justify-center bg-primary">
         <div className="text-center">
            <div className="relative">
               {/* Animated loading spinner */}
               <div className="w-20 h-20 border-4 border-secondary border-t-white rounded-full animate-spin mx-auto mb-4"></div>
               
               {/* Pulsing dots */}
               <div className="flex justify-center space-x-2 mb-4">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
               </div>
            </div>
            
            <h2 className="text-white text-xl font-semibold mb-2">Carregando...</h2>
            <p className="text-secondary text-sm">Preparando uma experiência incrível para você</p>
         </div>
      </div>
   );
}