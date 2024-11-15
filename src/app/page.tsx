import Image from "next/image";
import { IconsPath } from "./utils/icon";
import Intro from "./components/Intro";
import TechSection from "./components/TechSection";
import Card from "./components/Card";
import WorkExperience from "./components/WorkExperience";
import React, { Suspense } from "react";

export default function Home() {
  return (
    <React.Fragment>
      <main
        className="max-w-screen-large mx-auto flex flex-wrap justify-between p-2 md:p-5 h-screen"
        style={{
          backgroundImage: "url('/images/background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-2/5">
          <Suspense fallback={<div>Loading...</div>}>
            <Intro />
          </Suspense>
          <section className="mt-2 md:mt-3">
            <TechSection />
          </section>
          <section className="flex justify-between gap-2 md:gap-3 mt-2 md:mt-3">
            <Card text="5+" chipText="Clients" />
            <Card text="2yrs+" chipText="Expertise" />
            <Card text="8+" chipText="Projects" />
          </section>
        </div>
        <div className="w-full md:w-[59%]">
          <section className="border-[1px] p-2 border-gray-300 border-opacity-30 bg-gray-400 bg-opacity-[0.01] backdrop-blur-sm rounded-xl hover:border-opacity-70 transition-all duration-200 ease-in-out mt-2 md:mt-0">
            <WorkExperience />
          </section>
        </div>
      </main>
      <footer className="">
        {/* Footer content here */}
      </footer>
    </React.Fragment>
  );
}
