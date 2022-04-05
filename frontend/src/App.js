import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import About from "./pages/About";
import Appointment from "./components/Appointment";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <div className="app-wrapper">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path='/appointment/:id' element={<Appointment />} />
                        <Route path="/add" element={<Add/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </div>
            </Router>
        </>
    );
}

export default App;
