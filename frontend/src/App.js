import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArt,
  selectApp,
} from "./features/viewSelectorSlice/viewSelectorSlice";
import "./App.css";
import "./styles/styles.css";
import axios from "axios";
import ProjectList from "./Components/ProjectList/ProjectList";
import ProjectDetails from "./Components/ProjectList/ArtCard/ProjectDetails/ProjectDetails";
import { Button, ButtonGroup } from "react-bootstrap";

const App = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [appProjectList, setAppProjectList] = useState([]);

  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);
  const modeState = useSelector((state) => state.viewSelector.mode);

  useEffect(() => {
    const fetchArtworkData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/artwork/");
        setArtworkList(res.data);
      } catch (e) {
        console.error("error fetching artwork data", e);
      }
    };

    const fetchAppProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/app_projects/");
        setAppProjectList(res.data);
      } catch (e) {
        console.error("error fetching app list data", e);
      }
    };
    fetchArtworkData();
    fetchAppProjects();
  }, []);

  const toggleArt = () => {
    dispatch(selectArt());
  };
  const toggleApps = () => {
    dispatch(selectApp());
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1 className="headerName">Jordan Forbes</h1>
        </div>
        <div className="row">
          <ButtonGroup>
            <Button
              onClick={toggleArt}
              className="mx-2 d-inline-block btn btn-primary float-left"
            >
              Art
            </Button>
            <Button
              onClick={toggleApps}
              className="mx-2 d-inline-block btn btn-primary  float-left"
            >
              Apps
            </Button>
          </ButtonGroup>
        </div>
        {modeState === "List" ? (
          viewState === "App" ? (
            <ProjectList projectList={appProjectList} />
          ) : viewState === "Art" ? (
            <ProjectList projectList={artworkList} />
          ) : (
            "Error, no display view"
          )
        ) : modeState === "Detail" ? (
          <ProjectDetails />
        ) : (
          "Error, no mode set"
        )}
      </div>
    </div>
  );
};

export default App;
