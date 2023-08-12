import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../../../../../../features/viewSelectorSlice/viewSelectorSlice";
const ProjectDetails = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const projectState = useSelector((state) => state.detailSelector);

  const handleClick = () => {
    dispatch(selectList());
  };
  const placeholder =
    viewState === "Art" ? "Art Details Page" : "App Details Page";
  return (
    <>
      <h1>{placeholder}</h1>
      <p>{projectState.title}</p>
      <button onClick={handleClick}>back</button>
    </>
  );
};

export default ProjectDetails;
