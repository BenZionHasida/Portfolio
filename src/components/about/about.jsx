import { IconButton } from "@mui/material";
import styles from "./about.module.scss";
import CustomizedTimeline from "./timeLine/timeLine";
import TimelineIcon from "@mui/icons-material/Timeline";
export default function About() {
  const isNarrowScreen = window.innerWidth < 414;
  
  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <span>
          As a software developer, my journey began in the world of Talmud
          studies, where I developed keen analytical skills and a
          problem-solving mindset. This unique foundation led me to pursue a
          career in software development, driven by a deep interest in
          technology and innovation. I excel in creating well-structured code
          and am adept at both self-learning and collaborating in team
          environments.
        </span>
        {isNarrowScreen && (
          <a href="#timeLine" className={styles.arrow}>
            <TimelineIcon style={{ fontSize: "1rem", fontWeight: "900" }} className={styles.button}/>

            {/* <IconButton ></IconButton> */}
            <span> Explore My Journey</span>
          </a>
        )}
      </div>
      <div className={styles.timeLine} id="timeLine">
        <CustomizedTimeline />
      </div>
    </div>
  );
}
