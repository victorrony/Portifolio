"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import { SectionWrapper } from "@/app/hoc";
import DynamicEarthCanvas from "./DynamicEarthCanvas";
// import Modal from "./Modal";

const Contact = () => {
   const [form, setForm] = useState({ name: "", email: "", message: "" });
   const [loading, setLoading] = useState(false);

   const [modalOpen, setModalOpen] = useState(false);
   const [modalSuccess, setModalSuccess] = useState(false);

   const handleChange = (e) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({ ...prevForm, [name]: value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         const res = await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
               name: form.name,
               to_name: "Victor",
               email: form.email,
               message: form.message,
            }),
         });

         if (res.ok) {
            setModalSuccess(true);
            setForm({ name: "", email: "", message: "" });
            setModalOpen(true);
         } else {
            alert("Failed to send message. Please try again.");
         }
      } catch (error) {
         console.error("Error sending email:", error);
      } finally {
         setLoading(false);
         setTimeout(() => window.location.reload(), 1000);
      }
   };

   return (
      <motion.section
         suppressHydrationWarning
         initial="hidden"
         whileInView="show"
         viewport={{ once: false, amount: 0.5 }} // ajuste here
         transition={{ staggerChildren: 0.2, delayChildren: 0.2 }} // ajuste here
         exit="hidden" // nova prop
         className="xl:mt-12 flex flex-wrap md:flex-nowrap  gap-10 overflow-hidden"
      >
         <motion.div
            variants={slideIn("left", "tween", 0.5, 1)}
            className="flex-[0.75] bg-black-100 p-8 w-full rounded-2xl m-auto"
         >
            <p className={styles.sectionHeadText}>Contact.</p>
            <h3 className={styles.sectionSubText}> Send me a message </h3>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
               {["name", "email", "message"].map((field) => (
                  <label key={field} className="flex flex-col">
                     <span className="text-white font-medium mb-4">
                        Your {field.charAt(0).toUpperCase() + field.slice(1)}
                     </span>
                     <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={`What's your ${field === "name" ? "good name" : "web address"}?`}
                        className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                     />
                  </label>
               ))}

               <button
                  type="submit"
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
               >
                  {loading ? "Sending..." : "Send"}
               </button>
            </form>

            {/* <Modal
               isOpen={modalOpen}
               onClose={() => setModalOpen(false)}
               isSuccess={modalSuccess}
               submittedEmail={form.email}
               message="Thank you for your message. I will get back to you as soon as possible."
            /> */}
         </motion.div>

         <motion.div
            variants={slideIn("right", "tween", 0.5, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
         >
            {/* <DynamicEarthCanvas /> */}
         </motion.div>
      </motion.section>
   );
};

export default SectionWrapper(Contact, "contact");
