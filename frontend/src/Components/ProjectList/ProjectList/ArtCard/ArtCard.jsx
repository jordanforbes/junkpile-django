const ArtCard = (props) => {
  return (
    <>
      <img
        key={props.image.id}
        src={props.image.image}
        style={{ maxWidth: "400px" }}
        alt="project"
      />
    </>
  );
};

export default ArtCard;
