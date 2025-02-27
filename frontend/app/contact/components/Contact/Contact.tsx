"use client";
import React, { useState } from "react";
import HoverCard from "./ContactCard";
import { motion } from "framer-motion";
import { Send, Phone, MapPin } from "lucide-react";
import { heading1, heading2 } from "../../../../fonts/font";


type Direction = "up" | "down" | "left" | "right";

const FadeIn = (direction: Direction, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const Contact = () => {
  const [hovered, setHovered] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company_name: "",
    phone_number: "",
    subject:"",
    description: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Form submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          company_name: "",
          phone_number: "",
          subject: "",
          description: "",
          email: "",
        });
      } else {
        setMessage("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-[1280px] mx-auto">
      <div className="flex md:pl-10 space-x-3 md:space-x-10">
        <div className="md:w-10/12 mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            viewport={{ once: false }}
            className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
            style={{ transitionDelay: "300ms" }}
          >
            <h3
              className="text-[28px] md:text-[40px] max-md:leading-8 max-lg:leading-10 lg:text-5xl mb-7 font-medium text-white js-build-in-item build-in-slideX-left build-in-animate"
              style={{ transitionDelay: "300ms" }}
            >
              <p className={`text-[#939aff] ${heading1.className}`}>Tell Us About Your Project</p>
            </h3>
          </motion.h3>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-center max-lg:mt-10">
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            <HoverCard backgroundColor="#ffa28b" direction="left" left="0">
              <div className="md:flex flex-col md:space-y-20 flex-1 py-0 p-10 justify-between">
                <div className="px6 container flex flex-col justify-between py-1 text-lg md:flex-row">
                  <motion.div
                    variants={FadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.8 }}
                    className="mb-12 mr-6 flex items-center py-6"
                  >
                    <h1 className={`text-[40px] font-bold uppercase leading-[3rem] text-white ${heading2.className}`}>
                      let&apos;s work <br />{" "}
                      <span className="under-line">together</span>
                    </h1>
                  </motion.div>
                  <motion.form
                    onSubmit={handleSubmit}
                    variants={FadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.8 }}
                    className="flex max-w-3xl flex-1 flex-col items-start gap-y-8 rounded-md bg-secondary/80 p-10"
                  >
                    <input
                      type="text"
                      name="first_name"
                      placeholder="First Name"
                      required
                      value={formData.first_name}
                      onChange={handleChange}
                      className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none placeholder:text-white/30"
                    />
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name"
                      required
                      value={formData.last_name}
                      onChange={handleChange}
                      className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none placeholder:text-white/30"
                    />
                    <input
                      type="text"
                      name="company_name"
                      placeholder="Company Name"
                      required
                      value={formData.company_name}
                      onChange={handleChange}
                      className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none placeholder:text-white/30"
                    />
                    <input
                      type="text"
                      name="phone_number"
                      placeholder="Phone Number"
                      required
                      value={formData.phone_number}
                      onChange={handleChange}
                      className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none placeholder:text-white/30"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="E-mail"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none placeholder:text-white/30"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border-b border-white/25 bg-transparent py-3 text-white outline-none placeholder:text-white/30"
                    />
                    <textarea
                      name="description"
                      placeholder="Project Description"
                      required
                      value={formData.description}
                      onChange={handleChange}
                      className="mb-12 w-full resize-none border-b border-white/25 bg-transparent py-12 text-white outline-none placeholder:text-white/30"
                    ></textarea>

                    <button
                      type="submit"
                      onMouseEnter={() => setHovered(true)}
                      onMouseLeave={() => setHovered(false)}
                      disabled={loading}
                      className="flex items-center text-white font-bold justify-center space-x-2 text-[20px] border-[1px] border-neutral-500 px-4 py-3 rounded-md"
                    >
                      {loading ? "Submitting..." : "Submit Your Inquiry"}
                      <Send
                        className={`ml-2 transition ease-in duration-150 ${hovered ? "translate-x-2" : "-translate-x-0"
                          }`}
                        size={20}
                        color="currentColor"
                      />
                    </button>

                    {message && <p className="text-white">{message}</p>}
                  </motion.form>
                </div>
              </div>
            </HoverCard>

            <HoverCard backgroundColor="#ffa28b" direction="right" left="auto">
              <div className="md:flex flex-col md:space-y-5 flex-1 py-0 p-6 justify-between">
                {" "}
                {/* Changed space-y-10 to space-y-5 */}
                <div className="px6 container flex flex-col justify-between py-1 text-lg md:flex-row"></div>
                <motion.div
                  variants={FadeIn("right", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.8 }}
                  className="flex flex-col gap-8 p-6"
                >
                  <h1 className={`text-[40px] font-bold uppercase leading-[3rem] text-white ${heading2.className}`}>
                    let&apos;s work <br />{" "}
                    <span className="under-line">together</span>
                  </h1>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#939aff] p-4">
                      <Send size={24} color="white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white">Email</h4>
                      <a
                        href="mailto:info@risedigital.com"
                        className="text-gray-400 hover:text-[#939aff]"
                      >
                        info@risedigital.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#939aff] p-4">
                      <Phone size={24} color="white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white">Phone</h4>
                      <a
                        href="tel:+1234567890"
                        className="text-gray-400 hover:text-[#939aff]"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#939aff] p-4">
                      <MapPin size={24} color="white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-medium text-white">
                        Location
                      </h4>
                      <a
                        href="https://maps.google.com/?q=123+Business+Street+New+York+NY+10001"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#939aff]"
                      >
                        123 Business Street, New York, NY 10001
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </HoverCard>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "160px" }}
        transition={{ delay: 0.2 }}
        className="md:ml-10 ml-3 h-[160px] mt-[-20px] w-[3px] rounded-md bg-transparent"
      ></motion.div>
    </div>
  );
};

export default Contact;
