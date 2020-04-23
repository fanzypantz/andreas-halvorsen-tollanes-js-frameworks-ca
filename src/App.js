/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

// Components
import { GameProvider } from "./context/GameContext";
import Library from "./components/Library";
import Game from "./components/games/Game";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

function App() {
  const [pageFade, setPageFade] = useState(true);
  const [loadingImages, setLoadingImages] = useState(true);

  useEffect(() => {
    // console.log("history: ", history.action);
  }, []);

  return (
    <GameProvider
      value={{
        setPageFade: setPageFade,
        loadingImages: loadingImages,
        setLoadingImages: setLoadingImages
      }}
    >
      <div className={"pageFade" + (pageFade ? " pageFade__anim" : "")} />
      <Router>
        <Menu />
        <Switch>
          <Route path={"/contact"}>
            <Contact />
          </Route>
          <Route path={"/game"}>
            <Game />
          </Route>
          <Route path={"/:page"}>
            <Library />
          </Route>
          <Route exact path={"/"}>
            <Library />
          </Route>
        </Switch>
      </Router>
    </GameProvider>
  );
}

export default App;
