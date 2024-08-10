import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import SchoolIcon from "@mui/icons-material/School";
import CorporateFareRoundedIcon from '@mui/icons-material/CorporateFareRounded';
import Typography from "@mui/material/Typography";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import styles from "./timeLine.module.scss";

export default function CustomizedTimeline() {
  const theme = useTheme();
  const isNarrowScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const timelineStyle = {
    height: isNarrowScreen ? 'auto' : 'auto',
    '& .MuiTimelineItem-root': {
      minHeight: isNarrowScreen ? 'auto' : '33.33%',
    },
    '& .MuiTimelineItem-root:before': {
      flex: 0,
      padding: 0,
    },
  };

  const commonStyles = {
    fontSize: isNarrowScreen ? '1rem' : '1.25rem',
  };

  const oppositeContentStyles = {
    ...commonStyles,
    fontWeight: 600,
    color: "#6699CC",
  };

  const titleStyles = {
    fontSize: isNarrowScreen ? '1.25rem' : '1.5rem',
    fontWeight: 'bold',
  };

  const contentStyles = {
    ...commonStyles,
    color: "#505050",
  };

  return (
      <Timeline position="alternate" className={styles.container} sx={timelineStyle}>
        <TimelineItem>
          <TimelineOppositeContent
              sx={{ ...oppositeContentStyles, m: "auto 0" }}
              align="right"
              variant="body2"
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
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={titleStyles}>
              Talmud Studies
            </Typography>
            <Typography sx={contentStyles}>
              Focused on analytical thinking skills.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
              sx={{ ...oppositeContentStyles, m: "auto 0" }}
              variant="body2"
          >
            2022 - 2024
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
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={titleStyles}>
              ORT College
            </Typography>
            <Typography component="div" sx={contentStyles}>
              <ul style={{ textAlign: "left", listStyleType: "disc" }}>
                <li>Certified by MAHAT (The Government Institute for Technology and Science Training)</li>
                <li>
                  Focused on Python programming, database fundamentals, and
                  data structures.
                </li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
              sx={{ ...oppositeContentStyles, m: "auto 0" }}
              variant="body2"
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
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={titleStyles}>
              Pareto academy
            </Typography>
            <Typography component="div" sx={contentStyles}>
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
        <TimelineItem>
          <TimelineOppositeContent
              sx={{ ...oppositeContentStyles, m: "auto 0" }}
              align="right"
              variant="body2"
          >
            02/2024 - Present
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
              <CorporateFareRoundedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ backgroundColor: "#003366" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "12px", px: 2 }}>
            <Typography variant="h6" component="span" sx={titleStyles}>
              Automation Engineer at Nice LTD
            </Typography>
            <Typography sx={contentStyles}>
              Contractor via RavTech
            </Typography>
            <Typography component="div" sx={contentStyles}>
              <ul style={{textAlign: "left", listStyleType: "disc"}}>
                <li>Crafting intricate test scenarios for call recording and
                  playback systems
                </li>
                <li>Orchestrating a suite of automation tools across 120+ clusters in 10 regions
                </li>
                <li>Bridging the gap between test results and development teams, turning insights into improvements
                </li>
              </ul>
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
  );
}