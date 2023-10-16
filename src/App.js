import './scss/app.scss';
import {Header} from "./components";
import {Home} from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import {Cart} from "./pages/Cart";

function App() {

    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <Routes>

                        <Route path={'/pizza'} element={<Home/>}/>
                        <Route path={'cart'} element={<Cart/>}/>
                    </Routes>

                </div>
            </div>

        </div>
    );
}

export default App;
