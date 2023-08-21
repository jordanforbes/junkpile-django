import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArt,
  selectApp,
  selectList,
  selectDetail,
} from "./features/viewSelectorSlice/viewSelectorSlice";
import "./App.css";
import "./styles/styles.css";
import axios from "axios";
import ProjectList from "./Components/ProjectList/ProjectList";
import ProjectDetails from "./Components/ProjectList/ArtCard/ProjectDetails/ProjectDetails";
import Header from "./Components/Header/Header";
import { Button, ButtonGroup } from "react-bootstrap";

const App = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [appProjectList, setAppProjectList] = useState([]);
  const [data, setData] = useState([]);
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
        axios.get();
      } catch (e) {
        console.error("error fetching app list data", e);
      }
    };

    const fetchData = () => {
      axios
        .get("/db/data.json")
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => {
          console.error("Error fetching data", e);
        });
    };
    // fetchArtworkData();
    // fetchAppProjects();
    fetchData();
  }, []);

  useEffect(() => {
    console.log("data");
    console.log(data.artwork);
    // console.log(data.app_projects);
    setAppProjectList(data.app_project);
    // setArtworkList(data.artwork);
    console.log("app project list", appProjectList);
    console.log("artwork list", artworkList);
  }, [data]);

  const toggleArt = () => {
    dispatch(selectArt());
    dispatch(selectList());
  };
  const toggleApps = () => {
    dispatch(selectApp());
    dispatch(selectList());
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header />
        </div>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
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
          <div className="row">
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
      </div>
      <div className="col-md-3"></div>
    </div>
  );
};

export default App;
