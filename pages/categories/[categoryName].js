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

