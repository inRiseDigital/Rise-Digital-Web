"use client";

import Capabilities from "./components/Capabilities/Capabilities";
import Expertise from "./components/Expertise/Expertise";
import Footer from "../components/Footer/Footer";
import Clients from "./components/Clients/Clients";
import Tools from "./components/Tools/Tools";
import Nav from "../components/Nav/Nav";
import Contact from "./components/Contact/Contact";
import dynamic from "next/dynamic";
import About from "./components/About/About";
import Hero from "./components/Hero-section/Hero";

const Model = dynamic(
  () => import("../components/Bot/Bot").then((mod) => mod.Model),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <div className=" ">
        <div className="relative z-40">
          <div className="absolute"></div>
          </div>
        <div>
          <div className="overflow-hidden">
            <div className="relative min-h-screen w-screen overflow-x-hidden">
              <Hero />
            </div>
            <div
              id="about"
              className="home-campaign-productivity px-4 pt-8 overflow-hidden"
            >
              <About />
            </div>
            <div
              id="clients"
              className="home-campaign-productivity px-4 pt-8 overflow-hidden"
            >
              <Clients />
            </div>
            <div
              id="tools"
              className="home-campaign-productivity px-4 pt-8 overflow-hidden"
            >
              <Tools />
            </div>
            <div
              id="capabilities"
              className="home-campaign-productivity px-4 pt-8 overflow-hidden"
            >
              <Capabilities />
            </div>
            <div
              id="expertise"
              className="home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden"
            >
              <Expertise />
            </div>
            <div
              id="contact"
              className="home-campaign-productivity px-4 pt-8 pb-16 overflow-hidden"
            >
              <Contact />
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <Nav />
      <div
        className="fixed bottom-4 right-4 z-50 pointer-events-none"
        onClick={() => (window.location.href = "/")}
      >
        <Model />
      </div>
    </>
  );
}
