import axios from "axios";


//API restrictions, needed to create the array
export const categories = [
  {"id": 123, "url":"mmorpg.webp", "alt": "mmorpg category", "category": "MMORPG", "sendTo": "/mmorpg"},
{"id": 131, "url":"shooter.webp", "alt": "shooter category", "category": "SHOOTER", "sendTo": "/shooter"},
{"id": 132, "url":"strategy.webp", "alt": "strategy category", "category": "STRATEGY", "sendTo": "/strategy"},
{"id": 139, "url":"moba.webp", "alt": "moba category", "category": "MOBA", "sendTo": "/moba"},
{"id": 145, "url":"racing.webp", "alt": "racing category", "category": "RACING", "sendTo": "/racing"},
{"id": 147, "url":"sports.webp", "alt": "sports category", "category": "SPORTS", "sendTo": "/sports"},
{"id": 150, "url":"social.webp", "alt": "social category", "category": "SOCIAL", "sendTo": "/social"},
{"id": 159, "url":"sandbox.webp", "alt": "sandbox category", "category": "SANDBOX", "sendTo": "/sandbox"},
{"id": 162, "url":"open-world.webp", "alt": "open-world category", "category": "OPEN-WORLD", "sendTo": "/open-world"},
{"id": 170, "url":"survival.webp", "alt": "survival category", "category": "SURVIVAL", "sendTo": "/survival"},
{"id": 178, "url":"pvp.webp", "alt": "pvp category", "category": "PVP", "sendTo": "/pvp"},
{"id": 184, "url":"pve.webp", "alt": "pve category", "category": "PVE", "sendTo": "/pve"},
{"id": 185, "url":"pixel.webp", "alt": "pixel category", "category": "PIXEL", "sendTo": "/pixel"},
{"id": 188, "url":"voxel.webp", "alt": "voxel category", "category": "VOXEL", "sendTo": "/voxel"},
{"id": 196, "url":"zombie.webp", "alt": "zombie category", "category": "ZOMBIE", "sendTo": "/zombie"},
{"id": 204, "url":"turn-based.webp", "alt": "turn-based category", "category": "TURN-BASED", "sendTo": "/turn-based"},
{"id": 210, "url":"first-person.webp", "alt": "first-person category", "category": "FIRST-PERSON", "sendTo": "/first-person"},
{"id": 220, "url":"third-person.webp", "alt": "third-Person category", "category": "THIRD-PERSON", "sendTo": "/third-person"},
{"id": 222, "url":"top-down.webp", "alt": "top-down category", "category": "TOP-DOWN", "sendTo": "/top-down"},
{"id": 229, "url":"tank.webp", "alt": "tank category", "category": "TANK", "sendTo": "/tank"},
{"id": 239, "url":"space.webp", "alt": "space category", "category": "SPACE", "sendTo": "/space"},
{"id": 240, "url":"sailing.webp", "alt": "sailing category", "category": "SAILING", "sendTo": "/sailing"},
{"id": 244, "url":"side-scroller.webp", "alt": "side-scroller category", "category": "SIDE-SCROLLER", "sendTo": "/side-scroller"},
{"id": 251, "url":"superhero.webp", "alt": "superhero category", "category": "SUPERHERO", "sendTo": "/superhero"},
{"id": 257, "url":"permadeath.webp", "alt": "permadeath category", "category": "PERMADEATH", "sendTo": "/permadeath"},
{"id": 264, "url":"card.webp", "alt": "card category", "category": "CARD", "sendTo": "/card"},
{"id": 273, "url":"battle-royale.webp", "alt": "battle-royale category", "category": "BATTLE-ROYALE", "sendTo": "/battle-royale"},
{"id": 279, "url":"mmo.webp", "alt": "mmo category", "category": "MMO", "sendTo": "/mmo"},
{"id": 282, "url":"mmofps.webp", "alt": "mmofps category", "category": "MMOFPS", "sendTo": "/mmofps"},
{"id": 285, "url":"mmotps.webp", "alt": "mmotps category", "category": "MMOTPS", "sendTo": "/mmotps"},
{"id": 291, "url":"3d.webp", "alt": "3d category", "category": "3D", "sendTo": "/3d"},
{"id": 299, "url":"2d.webp", "alt": "2d category", "category": "2D", "sendTo": "/2d"},
{"id": 308, "url":"anime.webp", "alt": "anime category", "category": "ANIME", "sendTo": "/anime"},
{"id": 311, "url":"fantasy.webp", "alt": "fantasy category", "category": "FANTASY", "sendTo": "/fantasy"},
{"id": 317, "url":"sci-fi.webp", "alt": "sci-fi category", "category": "SCI-FI", "sendTo": "/sci-fi"},
{"id": 326, "url":"fighting.webp", "alt": "fighting category", "category": "FIGHTING", "sendTo": "/fighting"},
{"id": 328, "url":"action-rpg.webp", "alt": "action-rpg category", "category": "ACTION-RPG", "sendTo": "/action-rpg"},
{"id": 335, "url":"action.webp", "alt": "action category", "category": "ACTION", "sendTo": "/action"},
{"id": 343, "url":"military.webp", "alt": "military category", "category": "MILITARY", "sendTo": "/military"},
{"id": 344, "url":"martial-arts.webp", "alt": "martial-arts category", "category": "MARTIAL-ARTS", "sendTo": "/martial-arts"},
{"id": 352, "url":"flight.webp", "alt": "flight category", "category": "FLIGHT", "sendTo": "/flight"},
{"id": 360, "url":"low-spec.webp", "alt": "low-spec category", "category": "LOW-SPEC", "sendTo": "/low-spec"},
{"id": 362, "url":"tower-defense.webp", "alt": "tower-defense category", "category": "TOWER-DEFENSE", "sendTo": "/tower-defense"},
{"id": 369, "url":"horror.webp", "alt": "horror category", "category": "HORROR", "sendTo": "/horror"},
{"id": 370, "url":"mmorts.webp", "alt": "mmorts category", "category": "MMORTS", "sendTo": "/mmorts"},

];

export const filterCategory = async (genre) => {
  try {
    const res = await axios.get(process.env.NEXT_PUBLIC_BASE_URL, {
      params: { platform: 'pc' , category: genre },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST,
      },
    });
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

export const similarGames = (arr, num, id) => {
  const arrayIndex = arr.findIndex((arr) => arr.id === id);
  if (arrayIndex > -1) {
    arr.splice(arrayIndex, 1);
  }
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}
//context.query.categoryName;