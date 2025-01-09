import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup, Container, Row, Col } from "react-bootstrap";
import {
  selectArt,
  selectApp,
  selectList,
  // selectDetail,
  // selectAdmin,
} from "./features/viewSelectorSlice/viewSelectorSlice";
import { populateList } from "./features/projectListSelectorSlice/projectListSelectorSlice";
import "./App.css";
import "./styles/styles.css";
import axios from "axios";
import { motion } from "motion/react";
import ProjectList from "./Components/ProjectList/ProjectList";
import Admin from "./Components/Admin/Admin";
import ProjectDetails from "./Components/ProjectList/ArtCard/ProjectDetails/ProjectDetails";
import Header from "./Components/Header/Header";
// import xmlJs from "xml-js";

const App = () => {
  // const [artworkList, setArtworkList] = useState([]);
  // const [appProjectList, setAppProjectList] = useState([]);
  const [data, setData] = useState([]);
  const [artworkData, setArtworkData] = useState([]);
  const [appProjectData, setAppProjectData] = useState([]);
  // const [podcastData, setPodcastData] = useState([]);
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const modeState = useSelector((state) => state.viewSelector.mode);
  const [mode, setMode] = useState([]);

  // grab data from api and set it to the state
  const fetchData = (url, hook) => {
    axios
      .get(url)
      .then((res) => {
        // console.log("artwork", res.data);
        hook(res.data);
      })
      .catch((e) => {
        console.error("Error fetching data", e);
      });
  };

  useEffect(() => {
    fetchData("http://localhost:8000/api/artwork/", setArtworkData);
    fetchData("http://localhost:8000/api/app_projects/", setAppProjectData);
  }, []);

  useEffect(() => {
    const newData = {
      app_project: appProjectData,
      artwork: artworkData,
    };
    setData(newData);
    // console.log("full data", data);
  }, [artworkData, appProjectData]);

  useEffect(() => {
    // console.log("data", data);
    if (data) {
      dispatch(populateList(data));
    }
  }, [data]);

  // const toggleArt = () => {
  //   dispatch(selectArt());
  //   dispatch(selectList());
  // };
  // const toggleApps = () => {
  //   dispatch(selectApp());
  //   dispatch(selectList());
  // };

  useEffect(() => {
    if (viewState === "Admin") {
      setMode(<Admin />);
    } else if (modeState === "List") {
      setMode(<ProjectList />);
    } else if (modeState === "Detail") {
      setMode(<ProjectDetails />);
    }
  }, [viewState, modeState]);

  return (
    <div className="App  ">
      <Container>
        <Row>
          <Col />
          <Col md={10}>
            <Header />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />

          <Col md={10}>{mode}</Col>

          <Col />
        </Row>
      </Container>
    </div>
  );
};

export default App;
