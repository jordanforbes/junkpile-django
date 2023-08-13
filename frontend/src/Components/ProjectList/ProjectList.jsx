import ArtCard from "./ArtCard/ArtCard.jsx";

const ProjectList = (props) => {
  console.log(props.projectList);

  return (
    <div className="projectList">
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
