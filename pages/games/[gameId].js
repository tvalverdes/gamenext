import { useRouter } from "next/router";
import { GameCard } from "@/components/gameCard";
import axios from "axios";
import { Navbar } from "@/components/navbar";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";

export default function GameId({ games }) {
  const fullDescription = games.description;
  const description = fullDescription.slice(0, 250);
  const sysReq = games.minimum_system_requirements;
  if (sysReq["os"] == null) {
    const values = Object.keys(sysReq);
    values.forEach((value) => {
      sysReq[value] = "Unknown";
    });
  }

  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Navbar title={games.title} description={games.genre + "Category"} />
      <main className={`bg-slate-100  ${showMore ? "" : "md:h-[calc(100vh-90px)]"}`}>
        {/* First Column */}
        <div className="w-full md:grid md:grid-cols-2">
          <div className="md:sticky top-0 py-10 w-full">
            <div className="flex flex-row justify-center px-3">
              <Image
                loader={() => games.thumbnail}
                src={games.thumbnail}
                placeholder="blur"
                blurDataURL="/loading.svg"
                width={330}
                height={330}
                alt={games.title + " Image"}
                className="rounded-md"
              />
            </div>
            <Button text="Play now!" link={games.game_url} target="_blank" />
            
            <div className="flex flex-row justify-center -mt-5">
              <h2 className="py-5 text-lg">Screenshots</h2>
            </div>
            <div className="flex flex-row justify-center">
              {games.screenshots.slice(0, 3).map((game) => (
                <div key={game.id} className="px-3">
                  <a href={game.image} target="_blank" rel="noreferrer">
                    <Image
                      loader={() => game.image}
                      src={game.image}
                      placeholder="blur"
                      blurDataURL="/loading.svg"
                      width={150}
                      height={50}
                      alt=""
                      className="rounded-md screenshot"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full mt-5 px-5">
            <h1 className="border-b-2 text-lg mb-2 border-purple-600 font-bold">
              General information
            </h1>
            <div className="grid lg:grid-cols-2 border-b-2 border-purple-200">
              <div className="flex flex-col">
                <p className="flex flex-row pb-2"><b>Genre:&nbsp;</b>{games.genre}</p>
                <p className="flex flex-row pb-2">
                <b>Publisher:&nbsp;</b>{games.publisher}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="flex flex-row pb-2">
                <b>Release date:&nbsp;</b>{games.release_date}
                </p>
                <p className="flex flex-row pb-2">
                <b>Developer:&nbsp;</b>{games.developer}
                </p>
              </div>
            </div>
            <div className="flex flex-row border-b-2 border-purple-200 py-2">
            <b>Name:&nbsp;</b>{games.title}
            </div>
            <div className="flex flex-row border-b-2 border-purple-200 mb-2 py-2">
            {games.short_description}
            </div>
            <div className="flex flex-row text-justify mr-4 border-b-2 border-purple-200 py-2">
              <p>
              <b>Description:&nbsp;</b>{showMore ? fullDescription + " " : description + "... "}
                <button onClick={() => setShowMore(!showMore)}>
                  <p className="underline text-purple-600 decoration-1 underline-offset-2">
                    {showMore ? "Show more" : "Show less"}
                  </p>
                </button>
              </p>
            </div>
            <h2 className="border-b-2 mb-2 border-purple-600 pt-4 font-bold text-lg">
              Minimum System Requirements:
            </h2>
            <div className="grid md:grid-cols-2 border-b-2 border-purple-200">
              <div className="flex flex-col pr-4">
                <p className="flex flex-row pb-2"><b>OS:&nbsp;</b>{sysReq.os}</p>
                <p className="flex flex-row pb-2">
                <b>Processor:&nbsp;</b>{sysReq.processor}
                </p>
                <p className="flex flex-row pb-2">
                <b>Storage:&nbsp;</b>{sysReq.storage}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="flex flex-row pb-2"><b>Memory:&nbsp;</b>{sysReq.memory}</p>
                <p className="flex flex-row pb-2">
                <b>Graphics:&nbsp;</b>{sysReq.graphics}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="pt-7 bg-slate-100">
      <Footer />
      </div>
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
