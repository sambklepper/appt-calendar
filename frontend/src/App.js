import './App.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import About from "./pages/About";
import Appointment from "./components/Appointment";
import AppointmentItem from "./components/AppointmentItem";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Calendar from "./components/Calendar";

function App() {
    return (
        <>
            <Router>
                <Header/>
                <div className="app-wrapper">
                    <Routes>
                        <Route path="/" element={<Home/>} exact />
                        <Route path='/appointment/:id' element={<AppointmentItem/>} exact/>
                        <Route path='/edit/appointment/:id' element={<Appointment/>} exact/>
                        <Route path="/add" element={<Add/>} exact/>
                        <Route path="/about" element={<About/>} exact/>
                        <Route path='/calendar' element={<Calendar />} exact/>
                    </Routes>
                </div>
            </Router>
            <ToastContainer/>
        </>
    );
}

export default App;
