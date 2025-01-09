import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArt,
  selectApp,
  selectList,
} from "./../../features/viewSelectorSlice/viewSelectorSlice";

const Navibar = () => {
  const viewState = useSelector((state) => state.viewSelector.view);
  const modeState = useSelector((state) => state.viewSelector.mode);
  const dispatch = useDispatch();
  const toggleArt = () => {
    dispatch(selectArt());
    dispatch(selectList());
  };
  const toggleApps = () => {
    dispatch(selectApp());
    dispatch(selectList());
  };
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-center w-100">
              <Nav.Link onClick={toggleArt}>Artwork</Nav.Link>
              <Nav.Link onClick={toggleApps}>Apps</Nav.Link>
              <Nav.Link href="https://soundcloud.com/dirkdammit">
                Music
              </Nav.Link>
              <Nav.Link href="https://shonenflop.com">Podcast</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navibar;
