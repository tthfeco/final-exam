import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RoomsListScreen from './components/RoomListScreen';
import RoomDetails from './RoomDetails';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <RoomsListScreen />
          </Route>
          <Route path="/details/:id">
            <RoomDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;