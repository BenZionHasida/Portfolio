import memorySrc from "../../assets/gifs/memory_project.gif"
import othelloSrc from "../../assets/gifs/othello_project.gif"
import snakeSrc from "../../assets/gifs/snake_project.gif"
import wheatherSrc from "../../assets/gifs/wheatherapp_project.gif"
import playerSrc from "../../assets/gifs/Screen Recording 2024-08-10 225050.gif"
const projects = [
    {
      name: "Mishnah Memorization App",
      description: "A web application for Mishnah memorization using React, integrated with speech recognition and React Diff Viewer for text comparison.",
      src: memorySrc,
      link: "https://benzionhasida.github.io/Speach_recognition/", 
      git: "https://github.com/BenZionHasida/Speach_recognition" 
    },
    {
        name: "Audio Player + Windows Task",
        description: "Simple Audio Player for Automation purposes, including windows task for windows Automation EC2s",
        src: playerSrc,
        git: "https://github.com/BenZionHasida/audio-auto-player"
    },
    {
      name: "Othello Game",
      description: "A Python-based Othello game featuring player-vs-computer gameplay, developed with a Tkinter GUI. Includes intelligent AI move calculation and end-game scoring.",
      src: othelloSrc, 
      git: "https://github.com/BenZionHasida/Othello-game" 
    },
    {
      name: "Weather Forecast Application",
      description: "Displays maximum and minimum temperatures and weather icons, fetching data based on the user's location. Implemented asynchronous JavaScript functions for fetching and displaying weather data.",
      src: wheatherSrc,
      link: "https://benzionhasida.github.io/Weather-web-aplication/", // Add link to live site
      git: "https://github.com/BenZionHasida/Weather-web-aplication"
    },
    {
      name: "Catch The Snake Game",
      description: "An interactive game where players control a snake to catch targets, with increasing difficulty levels. Features dynamic target placement and score tracking.",
      src: snakeSrc, 
      link: "https://benzionhasida.github.io/Snake/", 
      git: "https://github.com/BenZionHasida/Snake" 
    }
  ];
  
  export default projects;
