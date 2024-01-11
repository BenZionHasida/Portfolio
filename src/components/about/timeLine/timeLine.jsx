import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import Typography from "@mui/material/Typography";
import styles from "./timeLine.module.scss";
export default function CustomizedTimeline() {
  const isNarrowScreen = window.innerWidth < 414;
  return (
    <Timeline position="alternate" className={styles.container}>
      <TimelineItem>
        <TimelineOppositeContent
          sx={isNarrowScreen?{ m: "auto 0", fontWeight: 600 , fontSize:"0.6rem"}:{ m: "auto 0", fontWeight: 600 }}
          align="right"
          variant="body2"
          color="#6699CC"
        >
          Until 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ backgroundColor: "#003366" }} />
          <TimelineDot
            sx={{
              color: "#D3D3D3",
              fill: "#D3D3D3",
              backgroundColor: "#003366",
            }}
          >
            <MenuBookIcon />
          </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: "#003366" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }} color="#505050">
          <Typography variant="h6" component="span" sx={isNarrowScreen?{fontSize:"0.8rem"}:{}}>
            Intensive Talmud Studies
          </Typography>
          <Typography sx={isNarrowScreen?{fontSize:"0.6rem"}:{}}>
            Focused on analytical and critical thinking skills.
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={isNarrowScreen?{ m: "auto 0", fontWeight: 600 , fontSize:"0.6rem"}:{ m: "auto 0", fontWeight: 600 }}
          variant="body2"
          color="#6699CC"
        >
          2022 - 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ backgroundColor: "#003366" }} />
          <TimelineDot
            sx={{
              color: "#D3D3D3",
              fill: "#D3D3D3",
              backgroundColor: "#003366",
            }}
          >
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: "#003366" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }} color="#505050">
          <Typography variant="h6" component="span" sx={isNarrowScreen?{fontSize:"0.8rem"}:{}}>
            ORT College
          </Typography>
          <Typography component="div" sx={isNarrowScreen?{fontSize:"0.6rem"}:{}}>
            <ul style={{ textAlign: "left", listStyleType: "disc" }}>
              <li>Certificate Program in Software Engineering.</li>
              <li>
                Specialization in Python algorithms, database fundamentals, and
                data structures.
              </li>
              <li>Consistently high academic performance.</li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={isNarrowScreen?{ m: "auto 0", fontWeight: 600 , fontSize:"0.6rem"}:{ m: "auto 0", fontWeight: 600 }}
          variant="body2"
          color="#6699CC"
        >
          09/23 - 11/23
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ backgroundColor: "#003366" }} />
          <TimelineDot
            sx={{
              color: "#D3D3D3",
              fill: "#D3D3D3",
              backgroundColor: "#003366",
            }}
          >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ backgroundColor: "#003366" }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }} color="#505050">
          <Typography variant="h6" component="span" sx={isNarrowScreen?{fontSize:"0.8rem"}:{}}>
            Pareto academy
          </Typography>
          <Typography component="div" sx={isNarrowScreen?{fontSize:"0.6rem"}:{}}>
            <ul style={{ listStyleType: "disc" }}>
              <li>Completed a Full Stack Development Course.</li>
              <li>
                Gained expertise in web development fundamentals, including
                HTML, CSS, JavaScript, Node.js, and advanced training in React.
              </li>
            </ul>
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
