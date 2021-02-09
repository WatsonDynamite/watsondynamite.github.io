import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import '../src/assets/styles/main.scss';
import HomePage from "./screens/HomePage";
import {Routes} from "./consts/routes";

function App() {
  return (
      <div>
          <BrowserRouter>
              <Switch>
                  <Route path={Routes.HOME_ROUTE} component={HomePage}/>
              </Switch>
          </BrowserRouter>
      </div>
  );
}

export default App;
