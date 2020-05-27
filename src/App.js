import React from "react";
import CardSearch from "./components/CardSearch";
import CardDisplay from "./components/CardDisplay";
import Deck from "./components/Deck";

function App() {
  // useEffect(() => {
  //   localStorage.getItem("deck");
  // }, []);
  return (
    <div className="app">
      <h1>MTG Deck Builder</h1>
      <CardSearch />
      <CardDisplay />
      <Deck />
    </div>
  );
}

export default App;
