import { gql, useQuery } from "@apollo/client";

export const GET_SINGLE_CHARACTER = gql`
  query GetCharacter($id: ID!) {
    character(id: $id) {
      id
      name
      image
      gender
      episode {
        name
        episode
      }
    }
  }
`;

export const useSingleCharacter = (id) => {
  const { data, loading } = useQuery(GET_SINGLE_CHARACTER, {
    variables: {
      id,
    },
  });

  return {
    data,
    loading,
  };
};
