import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex-1 w-full h-full border-red-500 flex items-center justify-center">
      <div className="flex items-center justify-center text-center">
        <p className="text-6xl">
          Welcome to Games!
          <span role="img" aria-label="joystick" className="ml-4">
            🕹️
          </span>
        </p>
      </div>
    </main>
  );
};

export default Home;
