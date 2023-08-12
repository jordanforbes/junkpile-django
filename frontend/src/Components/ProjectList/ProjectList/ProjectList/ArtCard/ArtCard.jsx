import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  setArt,
  setApp,
  getDetails,
} from "../../../../../features/detailSelectorSlice/detailSelectorSlice";

const ArtCard = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const projectState = useSelector((state) => state.detailSelector);
  const setDetails = () => {
    viewState === "ArtList"
      ? dispatch(setArt(props.project))
      : dispatch(setApp(props.project));
  };

  useEffect(() => {
    console.log("PROJECTSTATE!!!!");
    console.log(projectState);
  }, [projectState]);

  return (
    <button onClick={setDetails}>
      <img
        key={props.image.id}
        src={props.image.image}
        style={{ maxWidth: "400px" }}
        alt="project"
      />
    </button>
  );
};

export default ArtCard;
