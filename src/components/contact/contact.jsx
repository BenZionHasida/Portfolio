import { IconButton } from "@mui/material";
import styles from "./contact.module.scss";
import contactMethods from "./contactMethodes";
// import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";

export default function Contact() {
  return (
    <div className={styles.container}>
      {contactMethods.map(({ title, description, Icon, link, microCopy }, index) => (
        <div className={styles.contactCard}             key={index}
>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton
              className={styles.icon}
              data-tooltip-id={`${title}-${index}`}
              data-tooltip-content={microCopy}
              data-tooltip-place="top"
            >
              <Icon style={{ fontSize: "3.5rem" }} />
            </IconButton>
            <Tooltip id={`${title}-${index}`} />
            </a>


            <div className={styles.text}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
        </div>
      ))}
    </div>
  );
}
