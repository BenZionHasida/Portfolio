import { IconButton } from "@mui/material";
import styles from "./about.module.scss";
import CustomizedTimeline from "./timeLine/timeLine";
import TimelineIcon from "@mui/icons-material/Timeline";
export default function About() {
  const isNarrowScreen = window.innerWidth < 600;
  
  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
        <span>
          Driven automation engineer and full-stack developer with expertise in JavaScript, Python, and cloud technologies. I excel at rapidly learning new systems and diving deep into technical details. My approach combines a commitment to excellence with proactive problem-solving, allowing me to thrive in dynamic environments. I'm passionate about leveraging my strong communication skills and adaptability to collaborate effectively across teams and deliver high-quality solutions.
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
