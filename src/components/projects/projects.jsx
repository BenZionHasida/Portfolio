import { useState, useRef, useEffect } from "react";
import styles from "./projects.module.scss";
import projects from "./projectsObjects";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState("next");
  const handleNav = (newIndex, navDirection) => {
    setDirection(navDirection);
    setSlideIn(false);

    setTimeout(() => {
      setProjectIndex(newIndex);
      setSlideIn(true);
    }, 300);
  };
  const slideClass = () => {
    if (!slideIn) {
      return direction === "next" ? styles.slideOutNext : styles.slideOutPrev;
    } else {
      return direction === "next" ? styles.slideInNext : styles.slideInPrev;
    }
  };
  ///////////////////////
  const autoCycleInterval = useRef(null); // Use useRef to hold the interval id

  const handleNextProject = () => {
    setDirection("next");
    setSlideIn(false);

    setTimeout(() => {
      setProjectIndex((current) => (current + 1) % projects.length);
      setSlideIn(true);
    }, 300);
  };

  // Separate effect for automatic cycling
  useEffect(() => {
    autoCycleInterval.current = setInterval(handleNextProject, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(autoCycleInterval.current);
  }, []); // Empty dependency array to run only on mount

  // Event handler to stop the automatic cycling
  const stopAutoCycle = () => {
    clearInterval(autoCycleInterval.current);
  };
  const restartAutoCycle = () => {
    console.log("mouse up");
    clearInterval(autoCycleInterval.current);
    autoCycleInterval.current = setInterval(handleNextProject, 3000);
  };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        <div
          className={styles.navigator}
          onClick={() => {
            return handleNav(
              Math.floor((projectIndex + 1) % projects.length),
              "next"
            );
          }}
        >
          <IconButton sx={{ borderRadius: "50%" }}>
            <NavigateBeforeIcon fontSize="large" />
          </IconButton>
        </div>
        <div
          className={`${styles.content} ${slideClass()}`}
          onClick={stopAutoCycle}
          onTouchStart={stopAutoCycle}
          onMouseUp={restartAutoCycle} // Restart cycling on mouse up
          onTouchEnd={restartAutoCycle} // Restart cycling on touch end
        >
          <img
            src={projects[projectIndex].src}
            alt="Project GIF"
            className="project-gif"
          />
          <h2>{projects[projectIndex].name}</h2>
          <p>{projects[projectIndex].description}</p>
          <div className={styles.links}>
            {projects[projectIndex].link && (
              <a href={projects[projectIndex].link} target="_blank">
                <VisibilityIcon />
                View Live
              </a>
            )}
            <a
              href={projects[projectIndex].git}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub /> View on GitHub
            </a>
          </div>
        </div>
        <div
          className={styles.navigator}
          onClick={() => {
            return handleNav(
              Math.floor(
                (projectIndex - 1 + projects.length) % projects.length
              ),
              "prev"
            );
          }}
        >
          <IconButton sx={{ borderRadius: "50%" }}>
            <NavigateNextIcon fontSize="large" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
