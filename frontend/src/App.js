import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [artworkList, setArtworkList] = useState([]);
  const [appProjectList, setAppProjectList] = useState([]);

  useEffect(() => {
    const fetchArtworkData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/artwork/");
        console.log(res.data);
        setArtworkList(res.data);
      } catch (e) {
        console.error("error fetching artwork data", e);
      }
    };
    fetchArtworkData();

    console.log(artworkList);
  }, []);

  return (
    <div className="App">
      {artworkList.map((piece) => (
        <p>{piece.title}</p>
      ))}
    </div>
  );
};

export default App;
