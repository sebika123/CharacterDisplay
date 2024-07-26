import React from "react";
import { Link } from "react-router-dom";
import useCharacterHook from "../hooks/useCharacterHook";
import "./CharacterList.css"; 

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
    <div className="character-list">
      {data.characters.results.map(
        (character: { id: number; name: string; image: string, description: string }) => (
          <div key={character.id} className="character-item">
            <h1>{character.name}</h1>
            <Link to={`/${character.id}`}>
              <img src={character.image} alt={character.name} />
            </Link>
            <p>{character.description}</p>
          </div>
        )
      )}
    </div>
  );
};

export default CharacterList;
