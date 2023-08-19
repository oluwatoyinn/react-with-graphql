import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react";

const GET_CHARACTERS_LOCATION = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

const Search = () => {
  const [name, setName] = useState("");

  const [getLocationByName, { loading, data }] = useLazyQuery(
    GET_CHARACTERS_LOCATION,
    {
      variables: {
        name,
      },
    }
  );

  if (loading) return <h2>Loading search data ...</h2>;

  console.log({ data });

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocationByName()}>Search</button>

      {data?.characters?.results?.map((res) => (
        <li key={res.location.name}> {res.location.name} </li>
      ))}
    </div>
  );
};

export default Search;
