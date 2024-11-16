//component path
import Header from "./component/Header";
import Home from "./component/Home";
import Work from "./component/Work";
import Education from "./component/Education";
import Skill from "./component/Skill";

//route
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

//css
import "./App.css";

function App() {
  return (
    //route to each components
    <Router>
      <div className="my-background">
        <Header />
        <div className="container mt-4">
          <Routes>
            {/*Default component*/}
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skill" element={<Skill />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
