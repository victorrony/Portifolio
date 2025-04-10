"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import { slideIn } from "../../utils/motion";
import { SectionWrapper } from "@/app/hoc";
import EarthCanvas from "./Earth";

const Contact = () => {
   const [form, setForm] = useState({ name: "", email: "", message: "" });
   const [loading, setLoading] = useState(false);

   const handleChange = (e) => {
      setForm((prevForm) => ({ ...prevForm, [e.target.name]: e.target.value }));
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
         await emailjs.send(
            import.meta.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            import.meta.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            {
               from_name: form.name,
               to_name: "Victor Rony Fernandes",
               from_email: form.email,
               to_email: "victorronyfernandes@gmail.com",
               message: form.message,
            },
            import.meta.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
         );
         alert("Thank you. I will get back to you as soon as possible.");
         setForm({ name: "", email: "", message: "" });
      } catch (error) {
         console.error(error);
         alert("Ahh, something went wrong. Please try again.");
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="xl:mt-12 flex gap-10 overflow-hidden">
         <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="flex-[0.75] bg-black-100 p-8 w-full rounded-2xl"
         >
            <p className={styles.sectionHeadText}>Contact.</p>
            <h3 className={styles.sectionSubText}> Send me a message </h3>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-8">
               {["name", "email", "message"].map((field, index) => (
                  <label key={index} className="flex flex-col">
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
         </motion.div>

         <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
         >
            <EarthCanvas />
         </motion.div>
      </div>
   );
};

// export default Contact;
export default SectionWrapper(Contact, "contact");
