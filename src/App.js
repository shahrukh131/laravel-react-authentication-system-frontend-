import React, { useContext } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import Task from "./components/Task";
import MainLayout from "./layout/MainLayout";
function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <div className="App">
            <Navbar />
            <MainLayout />

            <Route exact path="/" component={LandingPage} />
            <Route path="/register" component={Signup} />
            <Route path="/login" component={Login} />
            <MainLayout>
              <Route exact path="/profile" component={Profile} />

              <Route path="/task" component={Task} />
            </MainLayout>
          </div>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
