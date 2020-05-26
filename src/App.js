import React from "react";
import CardSearch from "./components/CardSearch";
import CardDisplay from "./components/CardDisplay";

function App() {
  // useEffect(() => {
  //   localStorage.getItem("deck");
  // }, []);
  return (
    <div className="app">
      <CardSearch />
      <CardDisplay />
    </div>
  );
}

export default App;
