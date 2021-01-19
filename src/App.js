import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from './Components/Profile/Profile';
import Messages from './Components/Messages/Messages';
import Music from './Components/Music/Music';
import News from './Components/News/News';
import Settings from './Components/Settings/Settings';
import Footer from './Components/Footer/Footer';

function App(props) {
  const profile = () => <Profile state={props.state.profilePage} thisUser={props.state.users[props.thisUserId]}/>;
  const messages = () => <Messages state={props.state.messagesPage} thisUserId={props.thisUserId}/>;
  const news = () => <News />;
  const music = () => <Music />;
  const settings = () => <Settings />;

  return (
    <BrowserRouter>
      <div className="mainWrapper">
        <Header />
        <Navbar friends={props.state.friends} users={props.state.users}/>
          <Route path='/profile' render={profile} />
          <Route path='/messages' render={messages} />
          <Route path='/news' render={news} />
          <Route path='/music' render={music} />
          <Route path='/settings' render={settings} />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
