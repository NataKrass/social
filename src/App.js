import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Friends from './components/Friends/Friends';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={ () => 
              <DialogsContainer />} />
          <Route path="/profile" render={ () => 
              <Profile />} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/music" component={ () => <Music />} />
          <Route path="/settings" component={Settings} />
          <Route path="/friends" render={ () => <Friends friendState={props.state.sidebar}/>} />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
