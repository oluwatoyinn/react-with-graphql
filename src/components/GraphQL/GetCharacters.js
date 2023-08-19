import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;

export const useCharacters = () => {
  const { data, loading } = useQuery(GET_CHARACTERS);

  return {
    data,
    loading,
  };
};
