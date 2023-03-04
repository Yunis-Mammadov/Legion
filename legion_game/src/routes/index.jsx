import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Setlər from "../pages/Setlər"
import İçkilər from "../pages/İçkilər"


const Routing = () =>{
    return(
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/setler" element={<Setlər />} />
                <Route path="/ickiler" element={<İçkilər />} />
            </Routes>
        </>
    )
}

export default Routing;