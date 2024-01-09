import styles from "./about.module.scss";
import CustomizedTimeline from "./timeLine/timeLine";
export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.aboutMe}>
          As a software developer, my journey began in the world of Talmud
          studies, where I developed keen analytical skills and a
          problem-solving mindset. This unique foundation led me to pursue a
          career in software development, driven by a deep interest in
          technology and innovation. I excel in creating well-structured code
          and am adept at both self-learning and collaborating in team
          environments.
      </div>
      <div className={styles.timeLine}>
        <CustomizedTimeline />
      </div>
    </div>
  );
}
