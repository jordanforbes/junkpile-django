const ArtCard = (props) => {
  return (
    <>
      <img
        key={props.image.id}
        src={props.image.image}
        style={{ maxWidth: "200px" }}
        alt="project"
      />
    </>
  );
};

export default ArtCard;
