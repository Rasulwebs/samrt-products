import { useState } from "react";
// import reactLogo from './assets/react.svg'
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";





function App() {
  const [count, setCount] = useState(0);

  return (

    <>
      <Navbar />
      
      
      <Main/>
      
      <Footer />
    </>
  );
};

export default App;


