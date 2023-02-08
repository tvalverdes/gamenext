
export function Button({ text, link, target }){
  return(
    <div className="flex items-center justify-center w-auto my-10">
    <a href={link} target={target} className="select-none bg-neutral-900 hover:bg-neutral-700 w-96 h-11 mx-5 text-white text-center font-bold py-2 px-4 rounded"> {text} </a>
    </div>
  );
}