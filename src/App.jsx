import { useEffect } from "react";
import { Route,Routes } from "react-router-dom";
import Form from "./Components/Form";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";


function App() {
  useEffect(() => {
   document.body.setAttribute("data-theme","light")
  }, [])
  return (
   <div className="container min-h-[100vh] bg-slate-100 w-100 max-w-none">
    <Navbar/>
    <div className="secondary-container pt-[70px] w-full padding h-100 min-h-[100vh">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/form" element={<Form/>} />
    </Routes>
    </div>
   </div>
  );
}

export default App;
