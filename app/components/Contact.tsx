import { JSX } from "react";

export default function Contact():JSX.Element{
    return (
      <div className=" py-5">
        <p className="text-white font-medium pb-2">Get in Touch :</p>
        <p className="text-white">Email me on  
            <a
            href="mailto:vishalnanaware7850@gmail.com"
            className="font-normal text-neutral-300 hover:text-neutral-100 pl-1"
          >
            vishalnanaware7850@gmail.com
          </a>
        </p>
        
      </div>
    );
}