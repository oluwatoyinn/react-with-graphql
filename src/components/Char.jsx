import { useParams } from "react-router-dom";
import { useSingleCharacter } from "./GraphQL/useSingle";

const Char = () => {
  
  const { id } = useParams();
  const { data, loading } = useSingleCharacter(id);
  if (loading) return <h2>Loading data ....</h2>;

  return (
    <>
      <button>Go Back</button>
      <div className="character">
        <img src={data?.character?.image} width={750} height={750} />
        <div className="character-item">
          <h1> {data?.character?.name} </h1>
          <h1> {data?.character?.gender} </h1>
          <div className="character-epi">
            {data?.character?.episode.map((item) => {
              return (
                <div key={item.id}>
                  {item.name} - <b> {item.episode}</b>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Char;
