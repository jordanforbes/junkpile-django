import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Sparkle from "react-sparkle";
import {
  selectArt,
  selectApp,
  selectList,
  selectDetail,
  selectAdmin,
} from "../../features/viewSelectorSlice/viewSelectorSlice";

import styles from "./Header.module.css";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();
  const toggleAdmin = () => {
    dispatch(selectAdmin());
  };
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="headerBox "
    >
      <h1 className={styles.headerName}>Jordan Forbes</h1>
      {isHovered ? (
        <Sparkle count={100} minSize={10} maxSize={20} overflowPx={0} />
      ) : (
        ""
      )}
      {/* <br />
      <button onClick={toggleAdmin}>Admin</button> */}
    </div>
  );
};

export default Header;
