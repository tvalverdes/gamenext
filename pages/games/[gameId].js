import { useRouter } from "next/router";
import { GameCard } from "@/components/gameCard";
import axios from "axios";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function GameId({ games }) {
  return (
    <>
      <Navbar title={games.title} description={games.genre + "Category"} />

      <main className="w-full grid grid-cols-2 bg-neutral-800">
        <div className="sticky top-0 py-7 w-full  place-items-center  grid grid-rows-2 ">
          <div className="grid grid-flow-col">
            <Image
              loader={() => games.thumbnail}
              src={games.thumbnail}
              width={330}
              height={330}
              alt={games.title + " Image"}
              className="rounded-md"
            />
          </div>
            <div>asd</div>            
          <div className="grid grid-flow-col">
            {
              games.screenshots.map((game) => (
                <div key={game.id} className="px-3">
                <a href={game.image} target="_blank" rel="noreferrer">
                <Image
                  loader={() => game.image}
                  src={game.image}
                  width={330}
                  height={330}
                  alt={"Game Screenshot"}
                  className="rounded-md"
                />
                </a>
                </div>
                
              ))
            }
          </div>
        </div>
        <div className="w-full h-screen">as</div>
      </main>
      {/* <Navbar title={games[0].genre} description={games[0].genre + "Category"}/>
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
      </div> */}
    </>
  );
}

export async function getServerSideProps(context) {
  const gameId = context.query.gameId;
  try {
    const res = await axios.get(
      "https://free-to-play-games-database.p.rapidapi.com/api/game",
      {
        params: { id: gameId },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
        },
      }
    );
    return {
      props: {
        games: res.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
