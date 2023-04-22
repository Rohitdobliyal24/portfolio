import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailJs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sent, setSent] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    setSent(false);
    setError(false);
    e.preventDefault();
    setLoading(true);
    emailJs
      .send(
        "service_rk5h62b",
        "template_jn6mb93",
        {
          from_name: form.name,
          to_name: "Rohit",
          from_email: form.email,
          to_email: "rohit.2024it1091@kiet.com",
          message: form.message,
        },
        "BgqPxYH41rzGpUfWB"
      )
      .then(
        () => {
          setLoading(false);
          setSent(true);
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.log("🚀 ~ file: Contact.jsx:42 ~ .then ~ error:", error);
          alert("Something was wrong, Email did not sent.");
        }
      );
  };
  return (
    <div
      className="xl: mt-12 xl:flex-row
     flex-col-reverse flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {error && (
          <div
            class="p-4 mb-4 mt-4 text-center text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            Please fill all fields!
          </div>
        )}
        {sent && (
          <div
            id="alert-3"
            class=" p-4 mb-4 text-green-800 text-center rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 mt-5"
            role="alert"
          >
            <div class="ml-3 text-sm font-medium">
              Thank you, I will get to you ASAP!
            </div>
          </div>
        )}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              type="text"
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="resize-none bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            className="bg-tertiary py-3 px-8 outline-none w-fit
             text-white font-bold shadow-md shadow-primary rounded-xl"
            type="submit"
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

export default SectionWrapper(Contact, "contact");
