import ArtCard from "./ArtCard/ArtCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import styles from "./ProjectList.module.css";

const ProjectList = (props) => {
  const appList = useSelector(
    (state) => state.projectListSelector.app_projects
  );
  const artList = useSelector((state) => state.projectListSelector.artwork);
  const viewState = useSelector((state) => state.viewSelector.view);
  // const modeState = useSelector((state) => state.viewSelector.mode);

  const projectList =
    viewState === "Art" ? artList : viewState === "App" ? appList : [];

  return (
    <div className={styles.artGallery}>
      {projectList ? (
        projectList.map((p) => (
          <ArtCard key={p.id} title={p.title} image={p.images[0]} project={p} />
        ))
      ) : (
        <p>not loaded</p>
      )}
    </div>
  );
};

export default ProjectList;
