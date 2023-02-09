import { useRouter } from "next/router";
import { GameCard } from "@/components/gameCard";
import axios from "axios";
import { Navbar } from "@/components/navbar";
import { filterCategory } from "@/global"



export default function CategoryName({ games }) {
  return (
    <>
      <Navbar title={games[0].genre} description={games[0].genre + "Category"}/>
      <div className="w-full py-5 flex items-center justify-center">
        <div className="w-3/4">
          <div className="w-full grid justify-items-center grid-cols-1 gap-5 md:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {games.map((game) => (
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
    </>
  );
}

export async function getServerSideProps(context) {

  return filterCategory(context.query.categoryName);
}
