import { useRouter } from 'next/router'
import axios from 'axios';

export default function CategoryName( {games} ) {
  return(
  <>
  {
    games.map((game) => (
      <div key={game.id}>{game.title}</div>
    ))
    }
  </>
  );
}



export async function getServerSideProps (context){
  
  const categoryName = context.query.categoryName;

  try {
    const res = await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      params: {category: categoryName},
      headers: {
        'X-RapidAPI-Key': 'ce05883f43mshaf479100dd336ddp1cfe63jsna553dcf6e95c',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    });
    return ({
      props: {
        games: res.data
      }
    })
  } catch (error) {
    return {
      notFound: true,
    }
  }

  console.log(res);
 /*  const options = {
    method: 'GET',
    url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
    params: {category: "shooter"},
    headers: {
      'X-RapidAPI-Key': 'ce05883f43mshaf479100dd336ddp1cfe63jsna553dcf6e95c',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  
  var info = {}
  await axios.request(options).then(function (response) {
    info = response.data
  }).catch(function (error) {
    console.error(error);
  }).finally(() => {
    return ({
      props: {
        games: info
      }
    })
  }); */

 /*  try {
    const games = axios.request(options);
    console.log(games.data);
    return ({
      props: {game: games.data}
    })
  } catch (error) {
    return{
      notFound: true
    }
  } */

  /* 
  {console.log("BASE_URL: "+process.env.BASE_URL)}
  {console.log("API_KEY: "+process.env.API_KEY)}
  {console.log("API_HOST "+process.env.API_HOST)}
  
  try {
    const headers = {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST,
    }
  var {data} = await axios.get(process.env.BASE_URL + `category=${categoryName}`,headers);
  return ({
    props: {
      games: data
    }
  })
  } catch (error) {

    return {
      notFound: true,
    }
  } */
}

