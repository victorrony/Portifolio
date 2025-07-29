"use client";
import React from "react";

class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null };
   }

   static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
      return { hasError: true };
   }

   componentDidCatch(error, errorInfo) {
      // You can log the error to an error reporting service here
      console.error("Error caught by boundary:", error, errorInfo);
      this.setState({
         error: error,
         errorInfo: errorInfo,
      });
   }

   render() {
      if (this.state.hasError) {
         return (
            <div className="min-h-screen flex items-center justify-center bg-primary text-white">
               <div className="text-center p-8 max-w-md mx-auto">
                  <div className="mb-6">
                     <svg
                        className="mx-auto h-16 w-16 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                        />
                     </svg>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Oops! Algo deu errado</h2>
                  <p className="text-gray-300 mb-6">
                     Desculpe, ocorreu um erro inesperado. Por favor, recarregue a página ou tente novamente mais tarde.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                     <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-2 bg-white text-primary rounded-lg hover:bg-gray-100 transition-colors font-medium"
                     >
                        Recarregar Página
                     </button>
                     <button
                        onClick={() => (window.location.href = "/")}
                        className="px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-primary transition-colors font-medium"
                     >
                        Voltar ao Início
                     </button>
                  </div>
                  {process.env.NODE_ENV === "development" && this.state.error && (
                     <details className="mt-8 text-left">
                        <summary className="cursor-pointer text-sm text-gray-400 hover:text-white">
                           Detalhes do erro (desenvolvimento)
                        </summary>
                        <pre className="mt-2 text-xs text-red-400 bg-black bg-opacity-50 p-4 rounded overflow-auto">
                           {this.state.error.toString()}
                           {this.state.errorInfo.componentStack}
                        </pre>
                     </details>
                  )}
               </div>
            </div>
         );
      }

      return this.props.children;
   }
}

export default ErrorBoundary;
