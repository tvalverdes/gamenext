
export function Button({ text }){
  return(
    <div className="flex items-center justify-center w-auto my-10">
    <button className="bg-neutral-900 hover:bg-neutral-700 w-96 h-11 mx-5 text-white font-bold py-2 px-4 rounded"> {text} </button>
    </div>
  );
}