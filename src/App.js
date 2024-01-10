import React from "react";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat:person">
            <Header backButton="/" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header  backButton="/" />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
//<Header />

        {/*Tinder Cards*/}
        {/*Buttons below*/}

        {/*Chat screens*/}
        {/*Indivdual chat screens*/}
//