import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../../../../features/viewSelectorSlice/viewSelectorSlice";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const ProjectDetails = (props) => {
  const dispatch = useDispatch();
  // const viewState = useSelector((state) => state.viewSelector.view);
  const projectState = useSelector((state) => state.detailSelector);

  const [cover, setCover] = useState("");
  const [otherImages, setOtherImages] = useState([]);

  const handleClick = () => {
    dispatch(selectList());
  };

  const parseImages = () => {
    projectState.images.map((i) => {
      i.cover === true
        ? setCover(i.image)
        : setOtherImages([...otherImages, i.image]);
    });
    return cover;
  };

  useEffect(() => {
    parseImages();
  }, []);

  const ImageFormat = (props) => {
    return <img className="carouselImg" src={props.src} alt={props.alt} />;
  };

  const BuildCarousel = () => {
    return (
      <Carousel variant="dark">
        <Carousel.Item>
          <ImageFormat src={cover} alt={"cover"} />
        </Carousel.Item>
        {otherImages.map((i) => (
          <Carousel.Item>
            <ImageFormat src={i} alt={"other"} />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  return (
    <>
      <h1>{projectState.title}</h1>
      {otherImages[0] ? (
        <BuildCarousel />
      ) : (
        <img className="carouselImg" src={cover} alt="cover" />
      )}

      <p>{projectState.description}</p>
      <button onClick={handleClick}>back</button>
    </>
  );
};

export default ProjectDetails;
