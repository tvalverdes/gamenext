import Image from "next/image";

export function CategoryCard({ url, category, alt }) {
  const route = "/img/category/";
  return (
    <div className="group relative max-w-[300px] max-h-[300px] min-w-300px">
      <div className="w-full h-full absolute rounded-lg bg-slate-600/0 group-hover:bg-slate-800/40">
        <div className="flex w-full h-full justify-center items-center">
        <h3 className="absolute text-white select-none  opacity-0 group-hover:opacity-100">{ category }</h3>
        </div>
        </div>
      <Image
        src={route + url}
        width={220}
        height={220}
        className="rounded-lg shadow-lg "
        alt={alt}
      />     
    </div>
  );
}
