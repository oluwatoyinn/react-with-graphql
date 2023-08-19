import { Link } from "react-router-dom";
import { useCharacters } from "./GraphQL/GetCharacters";

const CharactersList = () => {
  const { data, loading } = useCharacters();

  if (loading) return <h2>Loading ...</h2>;

  return (
    <div className="single_character">
      {data?.characters?.results.map((char) => {
        return (
          <Link to={`/${char.id}`} key={char.id} className="char">
            <img src={char.image} />
            <h2> {char.name} </h2>
            <h2> {char.gender} </h2>
          </Link>
        );
      })}
    </div>
  );
};

export default CharactersList;
