import { GameCard } from "@/components/gameCard";
import { Button } from "@/components/button";
import { Navbar } from "@/components/navbar";
import { filterCategory } from "@/global"
import { useState } from "react";
import { Footer } from "@/components/footer";



export default function CategoryName({ games }) {

  const imagesPerRow = 12;
  const [next, setNext] = useState(imagesPerRow)
  const handleMoreImage = () => {
    setNext(next + imagesPerRow);
  };

  return (
    <>
      <Navbar title={games[0].genre} description={games[0].genre + "Category"}/>
      <div className="w-full py-5 flex items-center justify-center">
        <div className="w-3/4">
          <div className="w-full grid justify-items-center grid-cols-1 gap-5 md:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {games.slice(0, next).map((game) => (
              <div key={game.id}>
                <GameCard
                  img={game.thumbnail}
                  alt={game.title}
                  name={game.title}
                  sendTo={"/games/" + game.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {games.length >= next ? <Button text="Show more" click={handleMoreImage}/> : ""}
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {

  return filterCategory(context.query.categoryName);
}
