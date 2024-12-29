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
import ProjectList from "./Components/ProjectList/ProjectList";
import Admin from "./Components/Admin/Admin";
import ProjectDetails from "./Components/ProjectList/ArtCard/ProjectDetails/ProjectDetails";
import Header from "./Components/Header/Header";
import Navibar from "./Components/Navibar/Navibar";

const App = () => {
  // const [artworkList, setArtworkList] = useState([]);
  // const [appProjectList, setAppProjectList] = useState([]);
  const [data, setData] = useState([]);
  const [artworkData, setArtworkData] = useState([]);
  const [appProjectData, setAppProjectData] = useState([]);
  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const modeState = useSelector((state) => state.viewSelector.mode);
  const [mode, setMode] = useState([]);

  // grab data from api and set it to the state
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:8000/api/artwork/")
        .then((res) => {
          console.log("artwork", res.data);
          setArtworkData(res.data);
        })
        .catch((e) => {
          console.error("Error fetching data", e);
        });

      axios
        .get("http://localhost:8000/api/app_projects/")
        .then((res) => {
          console.log("app project", res.data);
          setAppProjectData(res.data);
        })
        .catch((e) => {
          console.error("Error fetching data", e);
        });
    };
    fetchData();
  }, []);

  useEffect(() => {
    setData({
      app_project: appProjectData,
      artwork: artworkData,
    });
    console.log("full data", data);
  }, [artworkData, appProjectData]);

  useEffect(() => {
    console.log("data", data);
    if (data) {
      dispatch(populateList(data));
    }
  }, [data]);

  const toggleArt = () => {
    dispatch(selectArt());
    dispatch(selectList());
  };
  const toggleApps = () => {
    dispatch(selectApp());
    dispatch(selectList());
  };

  const checkMode = () => {
    if (viewState === "Admin") {
      setMode(<Admin />);
    } else if (modeState === "List") {
      setMode(<ProjectList />);
    } else if (modeState === "Detail") {
      setMode(<ProjectDetails />);
    }
  };

  useEffect(() => {
    checkMode();
  }, [mode]);

  return (
    <div className="App  ">
      <Container className="">
        <Row>
          <Col />
          <Col md={10}>
            <Navibar />
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
