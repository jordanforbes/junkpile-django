import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setArt,
  setApp,
  getDetails,
} from "../../../features/detailSelectorSlice/detailSelectorSlice";
import { selectDetail } from "../../../features/viewSelectorSlice/viewSelectorSlice";

const ArtCard = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const modeState = useSelector((state) => state.viewSelector.mode);
  const projectState = useSelector((state) => state.detailSelector);

  const setDetails = () => {
    // console.log("setDetails");
    viewState === "Art"
      ? dispatch(setArt(props.project))
      : dispatch(setApp(props.project));
    // console.log(viewState);
    // if (viewState === "Art") {
    //   console.log("art list selected");
    // }
    // if (viewState === "App") {
    //   console.log("app list selected");
    // }
    dispatch(selectDetail());
    console.log(modeState);
  };

  return (
    <div>
      <button onClick={setDetails}>
        <img
          key={props.image.id}
          src={props.image.image}
          style={{ maxWidth: "400px" }}
          alt="project"
        />
        <p>{props.title}</p>
      </button>
    </div>
  );
};

export default ArtCard;
