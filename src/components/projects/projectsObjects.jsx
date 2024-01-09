import memorySrc from "../../assets/gifs/memory_project.gif"
import othelloSrc from "../../assets/gifs/othello_project.gif"
import snakeSrc from "../../assets/gifs/snake_project.gif"
import wheatherSrc from "../../assets/gifs/wheatherapp_project.gif"
const projects = [
    {
      name: "Mishnah Memorization App",
      description: "A web application for Mishnah memorization using React, integrated with speech recognition and React Diff Viewer for text comparison.",
      src: memorySrc,
      link: "https://benzionhasida.github.io/Speach_recognition/", 
      git: "https://github.com/BenZionHasida/Speach_recognition" 
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
  
   // {
    //   name: "Business Loan Application Interface",
    //   description: "Developed during an internship at Clevir.ai, this project involved creating an interface for business loan applications using React, FastAPI, and other technologies.",
    //   src: "", // Add path to project GIF or image
    //   link: "", // Add link to live site
    //   git: "" // Add link to GitHub repository
    // },