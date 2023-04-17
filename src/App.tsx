import {Routes, Route, BrowserRouter} from 'react-router-dom'
import {Login} from "./components/Login";
import {Requests} from "./components/Requests";
import {Import} from "./components/Import";
import {Tools} from "./components/Tools";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/requests" element={<Requests/>}/>
                <Route path="/import" element={<Import/>}/>
                <Route path="/tools" element={<Tools/>}/>
            </Routes>
        </BrowserRouter>
    )
}
