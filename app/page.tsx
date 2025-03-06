import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex items-start justify-center absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] overflow-auto">
      <div className="flex flex-col w-screen h-full  lg:w-2/4 mt-10 lg:m-10 m-2 gap-15">
        <div className="">
          <a
            href="mailto:vishalnanaware7850@gmail.com"
            className="font-normal text-neutral-300 hover:text-neutral-100"
          >
            vishalnanaware7850@gmail.com
          </a>
        </div>
        <Intro />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}


// <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div></div>