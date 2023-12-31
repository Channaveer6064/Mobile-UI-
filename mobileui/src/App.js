import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Discover } from "./Pages/DiscoverPage/Discover";
import { Details } from "./Pages/DetailsPage/Details";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
