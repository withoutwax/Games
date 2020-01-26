import React from 'react';
// import '../scss/main.scss';

const About: React.FC = () => {
    return (
        <main className="About">
            <p>
                When Will created his very first <a href="https://github.com/withoutwax/Snake-Game" target="_blank" rel="noopener noreferrer"><span role="img" aria-label="snake">🐍</span> Snake Game</a>, he wanted to create a small forum where he can store score and also allow him to compete with his friends.
            </p>
            <p>
                Thus, this is a space where Will shares the games that he made and also allow his friends and other people in the world to play! <span role="img" aria-label="game">👾</span>
            </p>
            <p>
                Feel free to look around and play few games that seems interesting! You can also compete with Will
            </p>
            <p>
                Hope you enjoy!
            </p>
        </main>
    );
};

export default About;