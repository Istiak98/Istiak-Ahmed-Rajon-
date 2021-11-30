import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Shared/Navbar/Navbar";
import Blogs from "./components/Home/Blogs/Blogs";
import ProjectInfo from "./components/Home/ProjectInfo/ProjectInfo";
import NotFound from "./components/Shared/NotFound/NotFound";
import Footer from "./components/Shared/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/detailProject/:id">
            <ProjectInfo></ProjectInfo>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
