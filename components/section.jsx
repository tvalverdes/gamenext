import Image from "next/image";

export function Section() {
  return (
    <section className="flex items-center justify-center ">
      <div className="py-40 bg-right-top h-screen w-full fondo bg-cover md:py-20 ">
        <div className="px-5 pt-20 flex items-center justify-center md:pt-40">
          <h1 className="text-4xl text-center text-white select-none sm:text-5xl md:text-6xl">
            The best place for gamers
          </h1>
        </div>
        <div className="px-3 flex justify-center">
          <button className=" p-2 md:bg-transparent  mt-10 w-2/3 border-2 md:w-1/3 border-white button text-white font-bold">
            Game List
          </button>
        </div>
      </div>
    </section>
  );
}
