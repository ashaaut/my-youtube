import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonListNames = [
    "All",
    "Music",
    "1990s",
    "Mixes",
    "Jukebox",
    "Movie Musicals",
    "Marathi cinema",
    "Arjit Singh",
    "Dubbing",
    "Lo-fi",
    "Live",
    "Kishor Kumar",
    "Folk Music"
  ];
  return (
    <div className="flex overflow-x-auto ...">
      {buttonListNames.map((name) => (
        <Button name={name}  key={name}/>
      ))}
    </div>
  );
};

export default ButtonList;
