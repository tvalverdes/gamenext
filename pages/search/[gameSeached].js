import { Footer } from "@/components/footer";
import { GameCard } from "@/components/gameCard";
import { Navbar } from "@/components/navbar";
import axios from "axios";

export default function GameSearched({ games , searchTerm}) {  

  if (games == "length") {
    return(<><Navbar title="Search" description="Searching game Page" /><h1 className="flex w-full pt-5 items-center justify-center text-center px-2 text-2xl">El término &nbsp;{`"${searchTerm}"`}&nbsp; es muy corto, mínimo son 3 caracteres</h1>
    <div className="relative h-screen w-full"><div className="absolute w-full bottom-0"><Footer /></div></div></>);
  }
  else if (games === undefined){
    return(<><Navbar title="Search" description="Searching game Page" /><h1 className="flex w-full pt-5 items-center justify-center text-center px-2 text-2xl">No se encontró el juego: &nbsp;{`"${searchTerm}"`}</h1>
    <div className="relative h-screen w-full"><div className="absolute w-full bottom-0"><Footer /></div></div></>);
  }
  else{
  return (
    <>
   
      <Navbar title="Search" description="Searching game Page" />

      <div className="w-full py-5 flex items-center justify-center">
        <div className="w-3/4">
            <h1 className="text-3xl py-5 mb-5">Search results for: {searchTerm}</h1>    
          <div className="w-full grid justify-items-center grid-cols-1 gap-5 md:gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
     
      {
        games.map((game) => (
          <div key={game.id}>
          <GameCard
                  img={game.thumbnail}
                  alt={game.title}
                  name={game.title}
                  placeholder="blur"
                  blurDataURL="/loading.svg"
                  sendTo={"/games/" + game.id}
                />
          </div>
        ))
      }
      </div>
      </div>
      </div>
    </>
  );
}
}

export async function getServerSideProps(context) {
  const gameSearched = context.query.gameSeached.trim().toLowerCase();

 if (gameSearched.length < 3) {
  return {
    props: {
      games: "length",
      searchTerm: gameSearched
    },
    }
  }
    else{
  let gamesFound = [];

  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_BASE_URL, {
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
      },
    });
    for (let i = 0; i < res.data.length; i++) {
      if (res.data[i].title.toLowerCase().includes(gameSearched)) {
        let stringToJSON =
          '{"id": ' +
          res.data[i].id +
          ', "title": "' +
          res.data[i].title +
          '", "thumbnail": "' +
          res.data[i].thumbnail +
          '"}';
        gamesFound.push(JSON.parse(stringToJSON));
      }
    }
      if (gamesFound.length != 0) {
        return {
          props: {
            games: gamesFound,
            searchTerm: gameSearched
          },
        };
      } else {
        return {
          props: {
            gameSearched: "data",
            searchTerm: gameSearched
          },
        };
      }
    
  } catch (error) {
    
    return {
      notFound: true,
    };
  }
}
}
