import logo from './logo.svg';
import './App.css';
import SideBar from './Sidebar';
import TopBar from './TopBar';
import MainContentBody from './MainContentBody';


function App() {
  return (
    <p className= "flex bg-purple-999">
      <TopBar topText={"about_me"}/>
      <SideBar />
      <MainContentBody />
    </p>
  );
}

export default App;
