import axios from "axios";
import { Navbar } from "@/components/navbar";
import { similarGames } from "@/global";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/button";
import { Footer } from "@/components/footer";
import { GoPrimitiveDot } from "react-icons/go";
import { BsCameraFill } from "react-icons/bs";
import { Link } from "react-feather";

export default function GameId({ games, categories }) {
  const fullDescription = games.description;
  const description = fullDescription.slice(0, 250);
  const sysReq = games.minimum_system_requirements;
  let sysValidate = true;
  let executed = false

  //Validate if the game has min requirements to prevent errors
  if (sysReq != null) {
    if (sysReq["os"] == null) {
      const values = Object.keys(sysReq);
      values.forEach((value) => {
        sysReq[value] = "Unknown";
      });
    }
  } else {
    sysValidate = false;
  }

  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Navbar title={games.title} description={games.genre + "Category"} />
      <div
        className="bg-slate-100 h-full text-neutral-700"
      >
        {/* First Column */}
        <div className="w-full md:grid md:grid-cols-2">
          <div className="md:sticky top-0 py-10 w-full">
            <div className="flex flex-row justify-center px-3">
              <div className="relative">
              <Image
                loader={() => games.thumbnail}
                src={games.thumbnail}
                placeholder="blur"
                blurDataURL="/loading.svg"
                alt={games.title + " Image"}
                width={330}
                height={330}
                className="rounded-md"
              />
              <div className="absolute top-0 rounded-t-md w-full bg-slate-900 bg-opacity-25">
              <GoPrimitiveDot className={`text-xl ${games.status.toLowerCase() == "live" ? "text-green-500" : "text-red-500"}`}/>
              </div>
              <p className="absolute -top-1 left-5 text-slate-100">{games.status}</p>
              </div>
            </div>
            <Button text="Play now!" link={games.game_url} target="_blank" />

            <div className="flex flex-row justify-center -mt-5">
              
              <h2 className="py-5 flex items-center justify-center gap-2 text-lg"><BsCameraFill /> Screenshots</h2>
            </div>
            <div className="flex flex-row justify-center">
              {games.screenshots.length > 0 ? (
                games.screenshots.slice(0, 3).map((game) => (
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
                ))
              ) : (
                <p>Not available</p>
              )}
            </div>
          </div>

          {/* Second Column */}
          <div className="w-full mt-5 px-5">
            <h1 className="border-b-2 text-lg mb-2 text-center border-purple-600  font-bold">
              General information
            </h1>
            <div className="grid lg:grid-cols-2 border-b-2 border-purple-200">
              <div className="flex flex-col">
                <p className="flex flex-row pb-2">
                  <b>Genre:&nbsp;</b>
              <a href={"/categories/"+games.genre.replace(' ', '-').trim().toLowerCase()} className="text-purple-600 underline underline-offset-2 font-bold">
                  {games.genre}
                  </a>
                </p>
                <p className="flex flex-row pb-2">
                  <b>Publisher:&nbsp;</b>
                  {games.publisher}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="flex flex-row pb-2">
                  <b>Release date:&nbsp;</b>
                  {games.release_date}
                </p>
                <p className="flex flex-row pb-2">
                  <b>Developer:&nbsp;</b>
                  {games.developer}
                </p>
              </div>
            </div>
            <div className="flex flex-row border-b-2 border-purple-200 py-2">
              <b>Name:&nbsp;</b>
              {games.title}
            </div>
            <div className="flex flex-row border-b-2 text-justify border-purple-200 mb-2 py-2">
              {games.short_description}
            </div>
            <div className="flex flex-row text-justify mr-4 border-b-2 border-purple-200 py-2">
              <p>
                <b>Description:&nbsp;</b>
                {showMore ? fullDescription + " " : description + "... "}
                <button onClick={() => setShowMore(!showMore)}>
                  <p className="underline text-purple-600 decoration-1 underline-offset-2">
                    {showMore ? "Show less" : "Show more"}
                  </p>
                </button>
              </p>
            </div>

            <h2 className="border-b-2 mb-2 text-center border-purple-600 pt-4 font-bold text-lg">
              Minimum System Requirements:
            </h2>
            <div className="grid md:grid-cols-2 border-b-2 border-purple-200">
              <div className="flex flex-col pr-4">
                <p className="flex flex-row pb-2">
                  <b>OS:&nbsp;</b>
                  {sysValidate ? sysReq.os : "Not specified"}
                </p>
                <p className="flex flex-row pb-2">
                  <b>Processor:&nbsp;</b>
                  {sysValidate ? sysReq.processor : "Not specified"}
                </p>
                <p className="flex flex-row pb-2">
                  <b>Storage:&nbsp;</b>
                  {sysValidate ? sysReq.storage : "Not specified"}
                </p>
              </div>
              <div className="flex flex-col">
                <p className="flex flex-row pb-2">
                  <b>Memory:&nbsp;</b>
                  {sysValidate ? sysReq.memory : "Not specified"}
                </p>
                <p className="flex flex-row pb-2">
                  <b>Graphics:&nbsp;</b>
                  {sysValidate ? sysReq.graphics : "Not specified"}
                </p>
              </div>
            </div>
            <h2 className="border-b-2 mb-2 text-center border-purple-600 pt-4 font-bold text-lg">
              Similar Games:
            </h2>
            <div className="grid grid-cols-1 pt-2 sm:grid-cols-2 place-items-center lg:grid-cols-3 gap-3 md:gap-5 lg:gap-5 border-b-2 border-purple-200">
              {executed ? "" : similarGames(categories, 3, games.id).map((similar) => (
                <div key={similar.id}>
                  <a href={similar.id}>
                    <Image
                      loader={() => similar.thumbnail}
                      src={similar.thumbnail}
                      width={300}
                      height={150}
                      alt=""
                      placeholder="blur"
                      blurDataURL="/loading.svg"
                      className="rounded-md screenshot"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-7">
          <Footer />
        </div>
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

    //API inconsistencies
    if (res.data.genre=="Card Game") {
      res.data.genre = "Card";
    }
    else if (res.data.genre== "ARPG" || res.data.genre== "MMOARPG"){
      res.data.genre = "mmorpg";
    }

    //Adding '-' because API GET allows only that, but specific game data is separated
    const resCategory = await axios.get(process.env.NEXT_PUBLIC_BASE_URL, {
      params: { category: res.data.genre.replace(/\s+/g, '-').toLowerCase() },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
      },
    });
    return {
      props: {
        games: res.data,
        categories: resCategory.data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
