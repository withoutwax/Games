import React from "react";
// import { useParams } from 'react-router-dom';

interface GamesProps {
  title: string;
  id: string;
  description: string;
  localGame: boolean;
}

const Games: React.FC<GamesProps> = ({ title, id, description }) => {
  // console.log(title, id);

  return (
    <main className="m-4">
      {/* {game} */}
      <div className="flex flex-col items-center">
        {/* <a href="./"> */}
        <img
          className="w-[300px]"
          src={new URL(`../assets/games/${id}.png`, import.meta.url).href}
          alt=""
        />
        {/* </a> */}
        <br />
        {/* <a href="./"> */}
        {title}
        {/* </a> */}
        <p>{description}</p>
      </div>
    </main>
  );
};

export default Games;
