import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import { Route, BrowserRouter } from 'react-router-dom';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={ () => 
              <DialogsContainer />} />
          <Route path="/profile/:userId?" render={ () => 
              <ProfileContainer />} />
          <Route path="/news" render={ () => <News />} />
          <Route path="/music" component={ () => <Music />} />
          <Route path="/settings" component={Settings} />
          <Route path="/users" render={ () => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  )
}


export default App;
