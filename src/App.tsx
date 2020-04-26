import React from 'react';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { persistor, store } from './store/store';
import { Home } from './pages/home';
import { GlucoseMeasurements } from './pages/glucose-measurements';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <main>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home page</Link>
                  <Link to="/glucose">Glucose page</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/glucose" component={GlucoseMeasurements} />
            </Switch>
          </main>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
