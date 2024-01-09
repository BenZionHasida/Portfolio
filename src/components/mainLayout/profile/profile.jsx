import styles from "./profile.module.scss";
// import src from "../../../assets/images/profile.jpg";
import src from "../../../assets/images/profile_final_image_without_removal.jpg";
export default function Profile({ isCoverMode }) {
  return (
    <div className={isCoverMode? styles.containerCoverMode: styles.containerHeaderMode}>
      <img
        className={isCoverMode ? styles.imgCoverMode : styles.imgHeaderMode}
        src={src}
        alt="profile image"
      />
      <div className={styles.descripition}>
        <h1 className={styles.firstHeader}>Ben zion Hasida</h1>
        <h2 className={styles.secondHeader}>Software Developer</h2>
      </div>
    </div>
  );
}
