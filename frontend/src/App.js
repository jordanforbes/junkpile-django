import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ProjectList from "./Components/ProjectList/ProjectList/ProjectList";
import { Button, ButtonGroup } from "react-bootstrap";

const App = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [appProjectList, setAppProjectList] = useState([]);
  const [displayMode, setDisplayMode] = useState("art");

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
    setDisplayMode("art");
  };
  const toggleApps = () => {
    setDisplayMode("apps");
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <h1>Jordan Forbes</h1>
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
      </div>
      {displayMode === "apps" ? (
        <ProjectList projectList={appProjectList} />
      ) : displayMode === "art" ? (
        <ProjectList projectList={artworkList} />
      ) : (
        "Error, no display mode"
      )}
    </div>
  );
};

export default App;
