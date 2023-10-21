import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login"
import SignUp from "../pages/Signup";
import Protected from "../pages/Protected";
import MainPage from "../pages/MainPage";
import Donor from "../pages/Donor";
import Accepter from "../pages/Acceptor";



export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Protected Screen={MainPage} />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/donor" element={<Donor />} />
                    <Route path="/acceptor" element={<Accepter />} />
                </Routes>
            </Router>
        </>
    )
}
