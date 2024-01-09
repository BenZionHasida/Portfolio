import { NavLink, useLocation } from "react-router-dom"
import styles from "./navBar.module.scss"
import { useEffect, useState } from "react"
export default function NavBar({isCoverMode}) {
  const [projectsRouteActive, setProjectsRouteActive] = useState(false)
  const [aboutRouteActive, setAboutRouteActive] = useState(false)
  const location = useLocation()
  useEffect(()=>{
    if (location.pathname === "/projects"){
      console.log(location.pathname);
      setProjectsRouteActive(true)
    }
    else(
      setProjectsRouteActive(false)
    )
    if (location.pathname === "/about"){
      setAboutRouteActive(true)
    }
    else{
      setAboutRouteActive(false)
    }
  },[location.pathname])
  return (
    <div className={isCoverMode? styles.container: `${styles.container} ${styles.containerHeaderMode}`}>
      <NavLink className={projectsRouteActive?`${styles.navLink} ${styles.active}`:styles.navLink} to={projectsRouteActive?"/":"projects"}>
       View My Projects
      </NavLink>
      <NavLink className={aboutRouteActive? `${styles.navLink} ${styles.active}`:styles.navLink} to={aboutRouteActive?"/":"about"}>
      Discover My Story
      </NavLink>
      <NavLink className={styles.navLink}>
       Contact Me
      </NavLink>
    </div>
  )
}
