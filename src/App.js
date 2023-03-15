import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Setings from './components/Setings/Setings';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className='app-wrapper'>
                    <Header/>
                    <Nav/>
                    <div className='app-wrapper-content'>

                        <Routes>
                            <Route path="/dialog" element={<Dialogs dialogs={props.state.messagesPage.dialogs}
                                                                    messages={props.state.messagesPage.messages}/>}/>
                            <Route path="/profile"
                                   element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>

                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/setings" element={<Setings/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
