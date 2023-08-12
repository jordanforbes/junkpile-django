import logo from "./logo.svg";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArtList,
  selectAppList,
} from "./features/viewSelectorSlice/viewSelectorSlice";
import "./App.css";
import axios from "axios";
import ProjectList from "./Components/ProjectList/ProjectList/ProjectList/ProjectList";
import { Button, ButtonGroup } from "react-bootstrap";

const App = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [appProjectList, setAppProjectList] = useState([]);

  const dispatch = useDispatch();
  const viewState = useSelector((state) => state.viewSelector.view);

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
    dispatch(selectArtList());
  };
  const toggleApps = () => {
    dispatch(selectAppList());
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
        {viewState === "AppList" ? (
          <ProjectList projectList={appProjectList} />
        ) : viewState === "ArtList" ? (
          <ProjectList projectList={artworkList} />
        ) : (
          "Error, no display mode"
        )}
      </div>
    </div>
  );
};

export default App;
