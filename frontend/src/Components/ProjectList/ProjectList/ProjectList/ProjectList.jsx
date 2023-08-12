import ArtCard from "./ArtCard/ArtCard.jsx";
import "./ProjectList.css";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../../../../features/detailSelectorSlice/detailSelectorSlice.js";
import { Button } from "react-bootstrap";

const ProjectList = (props) => {
  console.log(props.projectList);
  const dispatch = useDispatch;

  return (
    <div className="projectList">
      <Button onClick={dispatch(reset())}>Reset</Button>

      {props.projectList.map((p) => (
        <div key={p.id} className="coverItem">
          <p>{p.title}</p>
          {p.images.map((i) =>
            i.cover ? <ArtCard image={i} project={p} /> : null
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
