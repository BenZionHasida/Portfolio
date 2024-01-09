import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import MainLayout from "./components/mainLayout/mainLayout.jsx"
import Projects from "./components/projects/projects.jsx";
import About from "./components/about/about.jsx";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="projects" element={<Projects />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);
export default router;
