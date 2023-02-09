import { Button } from "@/components/button";
import { CategoryCard } from "@/components/categoryCard";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { categories } from "@/global";
import { useState } from "react";

export default function Categories() {

  const imagesPerRow = 12;
  const [next, setNext] = useState(imagesPerRow)
  const handleMoreImage = () => {
    setNext(next + imagesPerRow);
  };

  return (
    <>
      <Navbar title="Categories" description="Categories Page of GameNext"/>
      <div className="w-full flex justify-center items-center my-10">
        <h1 className="text-2xl">Showing all Categories</h1>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4">
          <div className="w-full pb-5 grid justify-items-center grid-cols-1 gap-5 md:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.slice(0, next).map((category) => (
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
      {categories.length >= next ? <Button text="Show more" click={handleMoreImage}/> : ""}
      <Footer />

    </>
  );
}
