import ArtCard from "./ArtCard/ArtCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const ProjectList = (props) => {
  const appList = useSelector(
    (state) => state.projectListSelector.app_projects
  );
  const artList = useSelector((state) => state.projectListSelector.artwork);
  const viewState = useSelector((state) => state.viewSelector.view);
  // const modeState = useSelector((state) => state.viewSelector.mode);

  const projectList =
    viewState === "Art" ? artList : viewState === "App" ? appList : [];
  useEffect(() => {
    console.log("artlist", artList);
  });
  return (
    <div className="projectList">
      {projectList ? (
        projectList.map((p) => (
          <ArtCard title={p.title} image={p.images[0]} project={p} />
        ))
      ) : (
        <p>not loaded</p>
      )}
    </div>
  );
};

export default ProjectList;
