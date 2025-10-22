"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({ isOpen, onClose, message, isSuccess, submittedEmail, context = "newsletter" }) {
   if (!isOpen) return null;

   return (
      <AnimatePresence>
         {isOpen && (
            <motion.div
               className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               onClick={onClose}
            >
               <motion.div
                  className="bg-tertiary p-8 rounded-2xl max-w-md w-full mx-4 relative"
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.7, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
               >
                  <button
                     onClick={onClose}
                     className="absolute top-4 right-4 text-white hover:text-secondary text-2xl font-bold"
                  >
                     ×
                  </button>

                  {isSuccess ? (
                     <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                           </svg>
                        </div>
                     </div>
                  ) : (
                     <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                           <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M6 18L18 6M6 6l12 12"
                              />
                           </svg>
                        </div>
                     </div>
                  )}

                  <h2 className="text-white text-2xl font-bold text-center mb-4">
                     {isSuccess ? "Mensagem Enviada!" : "Erro ao Enviar"}
                  </h2>

                  <p className="text-secondary text-center mb-6">
                     {isSuccess
                        ? message
                        : `An error occurred while sending your message. Please try again.`}
                  </p>

                  <div className="flex justify-center">
                     <button
                        onClick={onClose}
                        className="bg-white text-tertiary px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                     >
                        {isSuccess ? "Fechar" : "Tentar Novamente"}
                     </button>
                  </div>
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
