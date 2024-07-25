import React from "react";
import useCharacter from "../hooks/useCharacter";

const Character: React.FC = () => {
  const { error, loading, data } = useCharacter(1);

  if (error) return <div>Error: {error.message}</div>;
  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <>
      <img src={data.character.image} alt={data.character.name} />
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
      <div className="episodeDetails">
        {data.character.episode.map((episode: { name: string }, index: number) => (
          <div key={index}>{episode.name}</div>
        ))}
      </div>
    </>
  );
};

export default Character;
