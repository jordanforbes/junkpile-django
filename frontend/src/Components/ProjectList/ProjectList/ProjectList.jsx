const ProjectList = (props) => {
  return (
    <div className="appProjectList">
      {props.projectList.map((app) => (
        <>
          <p>{app.title}</p>
          {app.images.map((image) => (
            <img
              key={image.id}
              src={image.image}
              style={{ maxWidth: "200px" }}
              alt="app project"
            />
          ))}
        </>
      ))}
    </div>
  );
};

export default ProjectList;
