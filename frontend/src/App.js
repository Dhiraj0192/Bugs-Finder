import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./landing-page/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./landing-page/components/SignUp";
import SignIn from "./landing-page/components/SignIn";
import BugFinder from "./landing-page/components/BugFinder";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/bugfinder" element={<BugFinder></BugFinder>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
