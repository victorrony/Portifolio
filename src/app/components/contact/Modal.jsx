export default function Modal({ isOpen, onClose, message, isSuccess, submittedEmail, context = "newsletter" }) {
   if (!isOpen) return null;

   return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
         <div className="bg-white p-4 sm:p-6 rounded shadow-md max-w-xs sm:max-w-sm w-full">
            <div className="flex justify-center">
               <button
                  onClick={onClose}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-danson"
               >
                  {"close"}
               </button>
            </div>
         </div>
      </div>
   );
}
