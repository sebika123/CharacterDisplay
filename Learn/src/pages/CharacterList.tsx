import React from "react";
import useCharacterHook from "../hooks/useCharacterHook";

const CharacterList: React.FC = () => {
  const { error, loading, data } = useCharacterHook();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <>
      {data.characters.results.map(
        (character: { id: number; name: string; image: string }) => (
          <div key={character.id}>
            <h1>{character.name}</h1>
            <img src={character.image} alt={character.name} />
          </div>
        )
      )}
    </>
  );
};

export default CharacterList;
