import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import CourseList from './components/CourseList';
import Enrollment from './components/Enrollment';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/courses" component={CourseList} />
          <Route path="/enrollment" component={Enrollment} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;