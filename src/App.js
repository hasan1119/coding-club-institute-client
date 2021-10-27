import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Courses from "./pages/Courses.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import PageNotFound from "./pages/PageNotFound.js";
import AuthProvider from "./contexts/AuthProvider.js";
import Reset from "./pages/Reset.js";
import Details from "./pages/Details.js";
import PrivateRoute from "./route/PrivateRoute.js";
import Footer from "./components/footer/Footer.js";
import Header from "./components/header/Header.js";
import Dashboard from "./pages/Dashboard.js";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header> </Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>

            <Route exact path="/courses">
              <Courses></Courses>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <Route path="/reset">
              <Reset></Reset>
            </Route>

            <Route path="/courses/:id">
              <Details></Details>
            </Route>

            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
