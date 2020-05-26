import React from "react";
import CardSearch from "./components/CardSearch";
import CardDisplay from "./components/CardDisplay";

function App() {
  // useEffect(() => {
  //   localStorage.getItem("deck");
  // }, []);
  return (
    <div className="app">
      <h1>MTG Deck Builder</h1>
      <CardSearch />
      <CardDisplay />
    </div>
  );
}

export default App;
