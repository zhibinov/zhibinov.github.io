import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className="b-app-wrapper">
        <Header/>
        <Nav/>
        <div className="b-app-wrapper__content">
          <Route path='/dialogs' component={Dialogs}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;