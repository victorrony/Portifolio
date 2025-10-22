"use client";
import React, { Component } from "react";
import PropTypes from "prop-types";

class Canvas3DErrorBoundary extends Component {
   constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
   }

   static getDerivedStateFromError(error) {
      return { hasError: true, error };
   }

   componentDidCatch(error, errorInfo) {
      console.error("Canvas 3D Error:", error, errorInfo);
   }

   render() {
      if (this.state.hasError) {
         return (
            <div className="w-full h-full flex items-center justify-center bg-tertiary/50 rounded-lg p-4">
               <div className="text-center">
                  <p className="text-white text-sm">
                     {this.props.fallbackMessage || "Unable to load 3D content"}
                  </p>
                  {this.props.showRetry && (
                     <button
                        onClick={() => this.setState({ hasError: false, error: null })}
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                     >
                        Try Again
                     </button>
                  )}
               </div>
            </div>
         );
      }

      return this.props.children;
   }
}

Canvas3DErrorBoundary.propTypes = {
   children: PropTypes.node.isRequired,
   fallbackMessage: PropTypes.string,
   showRetry: PropTypes.bool,
};

Canvas3DErrorBoundary.defaultProps = {
   showRetry: false,
};

export default Canvas3DErrorBoundary;
