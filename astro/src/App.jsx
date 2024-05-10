import {Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar.jsx';
import Hero from "./components/hero/Hero.jsx";
import Astros from "./components/astros/Astros.jsx"
import RocketIcon from '@mui/icons-material/Rocket';
import './App.css';

function App() {

  const links = [

    {
      id: 1,
      text: 'Home',
      link: "/",
    },
    {
      id: 2,
      text: 'apod',
      link: "/spod",
    },
    {
      id: 3,
      text: 'astros',
      link: "/astros",
    },

  ];

  return (
    <>
    <Navbar header = "space-app" links = {links} />
    <Routes>
      <Route element = {<Hero />} path = "/" />
      <Route element = {<Astros />} path = "/astros" />
    </Routes>
    </>
  );

}

export default App;