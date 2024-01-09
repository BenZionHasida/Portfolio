import { Outlet, useLocation } from "react-router-dom";
import styles from "./mainLayout.module.scss";
import Profile from "./profile/profile.jsx";
import NavBar from "./navBar/navBar.jsx";
import { useEffect, useState } from "react";


export default function MainLayout() {
  const [isCoverMode, setIsCoverMode] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsCoverMode(false);
    }else{
      setIsCoverMode(true)
    }
  }, [location.pathname]);

  return (
    <div>
      <div
        className={
          isCoverMode ? styles.mainLayoutCoverMode : styles.mainLayoutHeaderMode
        }
      >
        <Profile isCoverMode={isCoverMode}/>
        <NavBar isCoverMode={isCoverMode}/>
      </div>
      <div className={isCoverMode? styles.outletCoverMode: styles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
