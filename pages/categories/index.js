import { CategoryCard } from "@/components/categoryCard";
import { Navbar } from "@/components/navbar";
import { categories } from "@/global";

export default function Categories() {
  return (
    <>
      <Navbar title="Categories" description="Categories Page of GameNext"/>
      <div className="w-full flex justify-center items-center my-10">
        <h1 className="text-2xl">Showing all Categories</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4">
          <div className="w-full grid justify-items-center grid-cols-1 gap-5 md:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category.id}>
                
                <CategoryCard
                  url={category.url}
                  alt={category.alt}
                  category={category.category}
                  sendTo={"/categories/"+category.sendTo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
