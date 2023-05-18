import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setings/Setings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";



const App = (props) => {

    console.log(props)

    return (
        <BrowserRouter>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>

                        <Routes>
                            <Route path="/dialog" element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<Profile/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
