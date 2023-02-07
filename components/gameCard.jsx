import Image from "next/image";
import { AiFillWindows } from "react-icons/ai";
import { GiMachineGunMagazine } from "react-icons/gi";

export function GameCard({ img, category, alt, sendTo, name }) {
  return (
    <div className="group relative max-w-[300px] max-h-[300px] min-w-300px">
      <a href={ sendTo }>  
      <div className="w-full justify-self-center h-1/3 absolute inset-x-0 bottom-0 rounded-lg bg-slate-800/60">
        <div className="flex w-full h-full justify-center items-center">
          <div className="absolute w-full h-1/3 left-[10%] top-[10%]">
            <AiFillWindows className="text-white "/>
          </div>
          <div className="flex w-full h-3/4 items-end justify-center ">
        <h3 className="text-white select-none">{name}</h3>
          </div>
        </div>
        </div>
      <Image
        loader={() => img}
        src={img}
        width={350}
        height={350}
        className="rounded-lg shadow-lg "
        alt={alt}
      />   
     </a>
    </div>
  );
}
