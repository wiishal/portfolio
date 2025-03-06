import { JSX } from "react";

export default function Intro(): JSX.Element {
  return (
    <div className="flex flex-col gap-5 border-blue-500">
      <h1 className="text-3xl text-white">
        Hi, I&rsquo;m Vishal {"\u{1F44B}"}
      </h1>

      <p className="font-thin text-base text-neutral-200">
        Hello,  I&rsquo;m a{" "}
        <span className="text-orange-400 font-medium">Software Developer</span>.
        I specialize in building scalable and high-performance applications with
        MERN, TypeScript, PostgreSQL, and{" "}
        <span className="text-orange-400 font-medium">AI integration</span>. I
        build real-time systems and AI-powered
        solutions to enhance digital experiences.
      </p>
      <div className="border border-transparent text-white mt-5 flex flex-row gap-3 align-middle">
        <a className="hover:text-blue-600" href="https://github.com/wiishal">
          <p className="text-sm">Github </p>
        </a>
        <p className="text-sm">/</p>{" "}
        <a
          className="hover:text-blue-600"
          href="https://www.linkedin.com/in/vishalnanaware/"
        >
          <p className="text-sm">Linkedin</p>
        </a>
      </div>
    </div>
  );
}
