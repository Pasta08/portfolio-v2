import Image from "next/image";
import { IconsPath } from "./utils/icon";
import Intro from "./components/Intro";
import TechSection from "./components/TechSection";
import Card from "./components/Card";

export default function Home() {
  return (
    <div className="">
      <main
        className="max-w-screen-xlarge mx-auto flex flex-wrap justify-between p-2 md:p-5"
        style={{
          backgroundImage: "url('/images/background-image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full md:w-2/5">
          <div className="">
            <Intro />
          </div>
          <div className="mt-2 md:mt-3">
            <TechSection />

          </div>
          <div className="flex justify-between gap-2 md:gap-3 mt-2 md:mt-3">
            <Card text="5+" chipText="Clients" />
            <Card text="2yrs+" chipText="Expertise" />
            <Card text="8+" chipText="Projects" />
          </div>
        </div>
        <div className="w-full md:w-[59%]">
          <div className="border-[1px] p-2 border-gray-300 border-opacity-30 rounded-xl">
          test
          </div>
        </div>
      </main>
      <footer className="">
        {/* Footer content here */}
      </footer>
    </div>
  );
}
