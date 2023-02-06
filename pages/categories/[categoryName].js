import { useRouter } from 'next/router'
import axios from 'axios';

export default function CategoryName( {games} ) {
  return(
  <>
  {
    games.map((game) => (
      <div key={game.id}>{game.title}</div>
    ))}
  </>
  );
}



export async function getServerSideProps (context){

  {console.log("BASE_URL: "+process.env.BASE_URL)}
  {console.log("API_KEY: "+process.env.API_KEY)}
  {console.log("API_HOST "+process.env.API_HOST)}
  const categoryName = context.query.categoryName;
  try {
    const headers = {
      'X-RapidAPI-Key': process.env.API_KEY,
      'X-RapidAPI-Host': process.env.API_HOST,
    }
  var {data} = await axios.get(process.env.BASE_URL + `category=${categoryName}`, headers);
  return ({
    props: {
      games: data
    }
  })
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

