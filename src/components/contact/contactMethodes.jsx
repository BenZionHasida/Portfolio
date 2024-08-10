import DescriptionIcon from "@mui/icons-material/Description";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import CV from "../../assets/documents/Resume-v2.pdf";

const contactMethods = [
  {
    title: "WhatsApp",
    description: "Chat with me on WhatsApp for quick queries or discussions.",
    microCopy: "Let's chat on WhatsApp!",
    Icon: WhatsAppIcon,
    link: "https://wa.me/+972509275506",
  },
  {
    title: "LinkedIn",
    description: "Connect with me on LinkedIn for professional networking.",
    microCopy: "Let's network on LinkedIn!",
    Icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/benzion-hasida/",
  },
  {
    title: "Email",
    description: "Drop me an email for formal inquiries or to get detailed responses.",
    microCopy: "Send me an email 📧",
    Icon: EmailOutlinedIcon,
    link: "mailto:b0583216809@gmail.com",
  },
  {
    title: "CV",
    description: "View my full professional journey and accomplishments in my CV.",
    microCopy: "Check out my CV 📄",
    Icon: DescriptionIcon,
    link: CV,
  },
  {
    title: "GitHub",
    description: "Explore my code and projects on GitHub.",
    microCopy: "Discover my code on GitHub!",
    Icon: GitHubIcon,
    link: "https://github.com/BenZionHasida",
  },
];

export default contactMethods;
