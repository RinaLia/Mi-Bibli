import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import login from "./pages/login";
import register from "./pages/register";
import topnav from "./pages/topNav";
import profile from "./pages/profile";
import detail from "./pages/detail";
import home from "./pages/home";

class App extends Component {
  render() {
    return (
      <>
        <Provider store={store}>
          <BrowserRouter>
            <PersistGate persistor={persistor}>
              <Switch>
                <Route path="/" exact component={home} />
                <Route path="/login" exact component={login} />
                <Route path="/register" exact component={register} />
                <Route path="/nav" exact component={topnav} />
                <Route path="/profile" exact component={profile} />
                <Route path="/detail" exact component={detail} />
              </Switch>
            </PersistGate>
          </BrowserRouter>
        </Provider>
      </>
    );
  }
}

export default App;
