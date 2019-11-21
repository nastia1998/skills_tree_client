import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import LoginPage from './components/LoginPage';

export default function App() {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Log in</Link>
            </li>
          </ul>
        </nav> */}
        <Switch>
          <Route name='login' path='/' component={LoginPage}>

          </Route>
        </Switch>
      </div>
    </Router>
  )
}