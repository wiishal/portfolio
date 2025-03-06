import { JSX } from "react";
import { projects } from "../util/project";

export default function Projects(): JSX.Element {
  return (
    <div className="flex flex-col">
      <p className="text-white font-medium">Projects</p>
      <div className="mt-4">
        {projects.map((p, i) => (
          <div
            key={i}
            className="border flex flex-col gap-1 border-blue-800 p-3 text-white hover:border-orange-500 hover:p-5 my-5 transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-row items-center justify-between font-medium">
              <p>🚀{p.name}</p>
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm font-mono">
                🔗
              </a>
            </div>
            <p className="font-thin text-sm">{p.des}</p>
            <div className="flex flex-row flex-wrap gap-2 my-2 text-sm font-sans  ">
              {p.techStack.map((item, itemKey) => (
                <TechStackDesign item={item} key={itemKey} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TechStackDesign({ item }: { item: string }) {
  return (
    <div className=" w-fit px-2 font-mono text-sm text-neutral-300 bg-neutral-700 rounded-sm">
      {item}
    </div>
  );
}
