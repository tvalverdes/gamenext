export function ContactForm() {
  return (
    <>
      <div>
        <form action="" method="post">
          <div className="w-full h-[calc(100vh-90px)] flex items-center justify-center">
            <div className="w-3/4 sm:w-1/2 lg:w-1/3 h-2/4 flex justify-center text-white items-center bg-slate-800">
              <div class="relative z-0">
                <input
                  type="text"
                  id="name"
                  class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                />
                <label
                  for="name"
                  class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Name
                </label>
                <input
                  type="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=" "
                />
                <label
                  for="email"
                  class="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-14 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-600 peer-focus:dark:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Email
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
