import './App.css';
import SideBar from './components/Sidebar';
import TopBar from './components/TopBar';
import MainContentBody from './MainContentBody';
import About_me from './components/About_Me';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <p className= "flex bg-purple-999 h-screen w-screen">
      <TopBar topText={"about_me"}/>
      <SideBar />

      <Router>
      <div className="mt-12 ml-20 mr-10 items-center justify-center content-center">
        <Routes>
          {/* <Route exact path="/">
            
          </Route> */}
          <Route path="/" element={<MainContentBody/>} />
          <Route path="/about" element={<About_me/>} />
        </Routes>
      </div>
    </Router>

      {/* <div className="text-green-600 mt-12 ml-20 mr-10 items-center justify-center">
        <About_me />
      </div> */}
    </p>
  );
}

export default App;
