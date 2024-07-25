import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query GetCharacter($id:ID!) {
    character(id:$id){
   
        id
        name
        image
      episode
      {
      name
      episode
      }
    }
  }
`;

const useCharacter = () => {
  const { error, loading, data } = useQuery(GET_CHARACTERS,{
    variables:{
        id
    }
  });

return{
    data,error,loading
}
};

export default useCharacter;
