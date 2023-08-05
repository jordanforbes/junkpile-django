import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ProjectList from "./Components/ProjectList/ProjectList/ProjectList";

const App = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [appProjectList, setAppProjectList] = useState([]);

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

  return (
    <div className="App">
      <div className="container">
        <h1>Jordan Forbes</h1>
      </div>
      <ProjectList projectList={appProjectList} />
      <ProjectList projectList={artworkList} />
    </div>
  );
};

export default App;
