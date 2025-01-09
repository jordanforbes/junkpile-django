import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setArt,
  setApp,
  getDetails,
} from "../../../features/detailSelectorSlice/detailSelectorSlice";
import { selectDetail } from "../../../features/viewSelectorSlice/viewSelectorSlice";
import styles from "./ArtCard.module.css";
import { motion } from "motion/react";

const ArtCard = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  // const modeState = useSelector((state) => state.viewSelector.mode);
  // const projectState = useSelector((state) => state.detailSelector);

  const setDetails = () => {
    viewState === "Art"
      ? dispatch(setArt(props.project))
      : dispatch(setApp(props.project));
    dispatch(selectDetail());
    // console.log(modeState);
  };

  return (
    <button onClick={setDetails} className={styles.artBtn}>
      <motion.div
        layout
        initial={{ opacity: 0, x: 0, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.imageContainer}>
          <img
            key={props.image.id}
            src={props.image.image}
            alt="project"
            loading="lazy"
          />
        </div>
      </motion.div>
    </button>
  );
};

export default ArtCard;
