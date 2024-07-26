import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";
import "./Character.css"; 

const Character: React.FC = () => {
  const { id } = useParams();
  const { error, loading, data } = useCharacter(id);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <div className="character-details">
      <img src={data.character.image} alt={data.character.name} />
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
      <div className="episode-details">
        {data.character.episode.map((episode: { name: string }, index: number) => (
          <div key={index}>{episode.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Character;
