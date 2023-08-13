import { useSelector, useDispatch } from "react-redux";
import { selectList } from "../../../../features/viewSelectorSlice/viewSelectorSlice";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const ProjectDetails = (props) => {
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
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
    console.log("COVERIMAGE");
    console.log(cover);
    return cover;
  };

  useEffect(() => {
    parseImages();
  }, []);

  const BuildCarousel = () => {
    return (
      <Carousel>
        <Carousel.Item>
          <img src={cover} alt="cover" />
        </Carousel.Item>
        {otherImages.map((i) => (
          <Carousel.Item>
            <img src={i} alt="other" />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  };

  return (
    <>
      <h1>{projectState.title}</h1>
      <BuildCarousel />
      <p>{projectState.description}</p>
      <button onClick={handleClick}>back</button>
    </>
  );
};

export default ProjectDetails;
