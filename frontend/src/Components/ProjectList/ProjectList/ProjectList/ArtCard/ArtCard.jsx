import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  reset,
  setArt,
  getDetails,
} from "../../../../../features/detailSelectorSlice/detailSelectorSlice";

const ArtCard = (props) => {
  const dispatch = useDispatch();
  const projectState = useSelector((state) => state);

  const setDetails = () => {
    dispatch(setArt(props.project));
  };

  useEffect(() => {
    console.log("!!!!!!details!!!!!");
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
