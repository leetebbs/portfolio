import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const send = (e) => {
    e.preventDefault();
    const name = document.getElementById("from_name").value.trim();
    const message = document.getElementById("message").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !message || !email) {
      setError("All fields are required.");
      return;
    }

    setError(""); // Clear error message if all fields are filled

    var templateParams = {
      to_name: "tebbo",
      from_name: name,
      message: message,
      reply_to: email,
    };

    emailjs
      .send("service_4nxmolf", "template_ik1wrs9", templateParams, "-t6F1GeYkHc9EtVgd")
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            setSent(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mb-20">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            onSubmit={send}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              id="from_name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Name"
            />
            <input
              id="email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your Email"
            />
            <textarea
              id="message"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your Message"
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-lg" type="submit" value="Send">
              Send Message
            </button>
            {sent && (
              <div className="mb-[-30px]">
                <h4>Thank you for your message</h4>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
