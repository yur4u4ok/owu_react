import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {RegisterPage} from "./pages/RegisterPage/RegisterPage";
import {LoginPage} from "./pages/LoginPage/LoginPage";
import {CarsPage} from "./pages/CarsPage/CarsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/register'}/>}/>
                    <Route path={'/login'} element={<LoginPage/>}/>
                    <Route path={'/register'} element={<RegisterPage/>}/>
                    <Route path={'/cars'} element={<CarsPage/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
