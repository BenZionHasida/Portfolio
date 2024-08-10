import { useState, useRef, useEffect } from "react";
import styles from "./projects.module.scss";
import projects from "./projectsObject.jsx";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { IconButton } from "@mui/material";
import { GitHub } from "@mui/icons-material";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Projects() {
  const [projectIndex, setProjectIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [direction, setDirection] = useState("next");
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  
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

  // New state to track auto slide status
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoCycleInterval = useRef(null);

  const handleNextProject = () => {
    setDirection("next");
    setSlideIn(false);

    setTimeout(() => {
      setProjectIndex((current) => (current + 1) % projects.length);
      setSlideIn(true);
    }, 300);
  };

  useEffect(() => {
    if (isAutoSliding) {
      autoCycleInterval.current = setInterval(handleNextProject, 6000);
    }
    return () => clearInterval(autoCycleInterval.current);
  }, [isAutoSliding]);

  const toggleAutoSlide = () => {
    setIsAutoSliding(!isAutoSliding); // Toggle auto slide status
  };
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    clearInterval(autoCycleInterval.current); // Stop auto-slide
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const threshold = 50;
    const swipeRight = touchEnd > touchStart + threshold;
    const swipeLeft = touchEnd < touchStart - threshold;

    if (swipeRight) {
      handleNav(
        Math.floor((projectIndex - 1 + projects.length) % projects.length),
        "prev"
      );
    } else if (swipeLeft) {
      handleNav(
        Math.floor((projectIndex + 1) % projects.length),
        "next"
      );
    } else {
      // If it's not a swipe, toggle auto-slide
      setIsAutoSliding(!isAutoSliding);
    }
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
          onClick={toggleAutoSlide} // Toggle auto slide on click
          // onTouchStart={toggleAutoSlide} // Toggle auto slide on touch
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}

          
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
